import { HERO_CONTENT, PROFILE } from '../../data/portfolioData'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../Icons/Icons'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-meta-row">
          <div className="hero-badge">
            <span className="badge-dot" aria-hidden="true"></span>
            <span>{PROFILE.availability}</span>
          </div>
          <span className="hero-location">{PROFILE.location}</span>
        </div>

        <h1 className="hero-title">
          {HERO_CONTENT.greeting}
          <span className="hero-role-title">{HERO_CONTENT.role}</span>
        </h1>

        <p className="hero-subtitle">{HERO_CONTENT.subtitle}</p>

        <p className="hero-desc">{HERO_CONTENT.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRightIcon size={16} />
          </a>
          {PROFILE.resumeUrl ? (
            <a
              href={PROFILE.resumeUrl}
              download={PROFILE.resumeFileName}
              className="btn-outline"
            >
              <DownloadIcon size={16} />
              Download Resume
            </a>
          ) : (
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          )}
        </div>

        <div className="hero-socials">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <GitHubIcon size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="social-link"
            aria-label={`Email ${PROFILE.email}`}
          >
            <MailIcon size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
