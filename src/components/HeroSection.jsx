function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-gradient" />
      <div className="shell hero-content">
        <div className="hero-copy glass">
          <p className="eyebrow">Final-Year Research Project</p>
          <h1>JuriAid: Legal Research and Evidence Assistant</h1>
          <p>
            AI-powered legal research platform for Sri Lankan case retrieval, law
            amendment tracking, automated legal question generation, and
            multi-agent reasoning.
          </p>
          <a className="primary-btn" href="#domain">
            Explore Research
          </a>
        </div>
        <div className="hero-visual glass">
          <div className="hero-illustration">
            <span className="scale">AI</span>
            <span className="divider" />
            <span className="scale">LAW</span>
          </div>
          <p>Legal-tech intelligence for next-generation judicial research.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
