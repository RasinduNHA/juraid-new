const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(response, message) {
  return response.status(400).json({ error: message })
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST'])
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const body =
    typeof request.body === 'string'
      ? (() => {
          try {
            return JSON.parse(request.body)
          } catch {
            return {}
          }
        })()
      : request.body || {}

  const { name, email, message } = body
  const safeName = String(name || '').trim()
  const safeEmail = String(email || '').trim()
  const safeMessage = String(message || '').trim()

  if (!safeName || safeName.length < 2) {
    return badRequest(response, 'Please enter your name.')
  }

  if (!EMAIL_REGEX.test(safeEmail)) {
    return badRequest(response, 'Please provide a valid email address.')
  }

  if (!safeMessage || safeMessage.length < 10) {
    return badRequest(response, 'Message should be at least 10 characters long.')
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'aidj0980@gmail.com'
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!apiKey) {
    return response.status(500).json({ error: 'Email service is not configured.' })
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New contact form message from ${safeName}`,
        reply_to: safeEmail,
        text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      let resendMessage = 'Email delivery failed.'

      if (errorBody) {
        try {
          const parsed = JSON.parse(errorBody)
          resendMessage = parsed?.message || parsed?.error?.message || resendMessage
        } catch {
          resendMessage = errorBody
        }
      }

      return response.status(502).json({
        error: resendMessage,
      })
    }

    return response.status(200).json({ ok: true })
  } catch {
    return response.status(500).json({ error: 'Server error while sending message.' })
  }
}
