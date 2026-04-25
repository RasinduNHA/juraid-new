import { navLinks } from '../data/siteData'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav shell glass">
        <a className="brand" href="#home">
          JuriAid
        </a>
        <ul className="nav-links">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
