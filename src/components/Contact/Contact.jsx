import { CONTACT_CONTENT, PROFILE } from '../../data/portfolioData'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from '../Icons/Icons'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-inner">
          <div className="section-tag">// contact</div>
          <h2 className="section-heading">
            {CONTACT_CONTENT.headlinePrefix} <span>{CONTACT_CONTENT.headlineAccent}</span>
          </h2>
          <p className="contact-sub">{CONTACT_CONTENT.description}</p>

          <a href={`mailto:${PROFILE.email}`} className="contact-email-btn">
            <span>{PROFILE.email}</span>
            <ArrowRightIcon size={18} />
          </a>

          <div className="contact-divider">
            <span>or connect via</span>
          </div>

          <div className="contact-socials">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <GitHubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
            >
              <LinkedInIcon size={20} />
              <span>LinkedIn</span>
            </a>
            {PROFILE.resumeUrl && (
              <a
                href={PROFILE.resumeUrl}
                download={PROFILE.resumeFileName}
                className="contact-social-card"
              >
                <DownloadIcon size={20} />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
