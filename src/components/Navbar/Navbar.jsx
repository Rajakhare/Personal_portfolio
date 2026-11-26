import { useState, useEffect } from 'react'
import { NAV_LINKS, PROFILE } from '../../data/portfolioData'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const offset = 120
      let currentSection = NAV_LINKS[0].id
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= offset) {
            currentSection = id
          }
        }
      }
      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Primary Navigation">
        <a href="#home" className="nav-logo" aria-label={`${PROFILE.name} — Home`}>
          {PROFILE.initials}
          <span>.</span>
        </a>

        <ul id="primary-nav-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
                aria-current={activeSection === link.id ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {PROFILE.resumeUrl && (
            <li>
              <a
                href={PROFILE.resumeUrl}
                download={PROFILE.resumeFileName}
                className="nav-resume-btn"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          )}
        </ul>

        <button
          type="button"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar
