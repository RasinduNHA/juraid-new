import SectionTitle from './SectionTitle'

function ContactSection() {
  return (
    <section id="contact" className="section shell">
      <SectionTitle
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Reach out for collaboration opportunities, demos, and research discussions."
      />
      <form className="contact-form glass">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message" />

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default ContactSection
