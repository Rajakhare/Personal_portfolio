import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo">RA<span>.</span></span>
          <span className="footer-copy">
            Designed & Built by <strong>Raj Akhare</strong>
          </span>
        </div>

        <div className="footer-center">
          <span className="footer-text">© {year} All Rights Reserved</span>
        </div>

        <div className="footer-right">
          <a href="#home" className="footer-back-top">
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
