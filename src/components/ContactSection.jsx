import { useState } from 'react'
import SectionTitle from './SectionTitle'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    if (formData.name.trim().length < 2) {
      setStatus('error')
      setFeedback('Please enter at least 2 characters for your name.')
      return
    }

    if (formData.message.trim().length < 10) {
      setStatus('error')
      setFeedback('Message should be at least 10 characters long.')
      return
    }

    try {
      const primaryResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      let response = primaryResponse
      let rawBody = await response.text()

      if (response.status === 404) {
        // Fallback for environments where Vercel API routes are unavailable.
        response = await fetch('https://formsubmit.co/ajax/aidj0980@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        })
        rawBody = await response.text()
      }

      let payload = {}

      if (rawBody) {
        try {
          payload = JSON.parse(rawBody)
        } catch {
          payload = { error: rawBody }
        }
      }

      if (!response.ok) {
        throw new Error(payload.error || `Failed to send message (HTTP ${response.status}).`)
      }

      setStatus('success')
      setFeedback('Message sent successfully. We will contact you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setFeedback(error.message || 'Unable to send message right now.')
    }
  }

  return (
    <section id="contact" className="section shell">
      <SectionTitle
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Reach out for collaboration opportunities, demos, and research discussions."
      />
      <form className="contact-form glass" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send'}
        </button>
        {feedback ? (
          <p className={status === 'success' ? 'form-message success' : 'form-message error'}>
            {feedback}
          </p>
        ) : null}
      </form>
    </section>
  )
}

export default ContactSection
