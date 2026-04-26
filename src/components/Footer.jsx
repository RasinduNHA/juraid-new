function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-content">
        <p>JuriAid Legal-Tech Initiative</p>
        <div className="social-links">
          <a href="#">LinkedIn</a>
          <a href="https://github.com/ChathuminaK/JuriAid_App_Backend">GitHub</a>
          <a href="#">YouTube</a>
        </div>
        <p>Copyright {new Date().getFullYear()} JuriAid. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
