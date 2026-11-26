import { ABOUT_CONTENT, PROFILE } from '../../data/portfolioData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-visual-col" aria-label="Engineering profile summary">
          <div className="about-profile-card">
            <div className="about-card-top">
              <div className="about-monogram" aria-hidden="true">
                {PROFILE.initials}
              </div>
              <div>
                <div className="about-card-name">{PROFILE.name}</div>
                <div className="about-card-role">{PROFILE.title}</div>
              </div>
            </div>

            <div className="about-code-block" aria-hidden="true">
              <div className="code-line">
                <span className="code-key">focus</span>
                <span className="code-sep">:</span>
                <span className="code-val">&quot;Backend &amp; API Architecture&quot;</span>
              </div>
              <div className="code-line">
                <span className="code-key">core</span>
                <span className="code-sep">:</span>
                <span className="code-val">[&quot;Python&quot;, &quot;FastAPI&quot;, &quot;PostgreSQL&quot;]</span>
              </div>
              <div className="code-line">
                <span className="code-key">frontend</span>
                <span className="code-sep">:</span>
                <span className="code-val">[&quot;React&quot;, &quot;Next.js&quot;, &quot;JS&quot;]</span>
              </div>
            </div>

            <dl className="about-snapshot-list">
              {ABOUT_CONTENT.stackSnapshot.map((item) => (
                <div className="about-snapshot-item" key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="about-text-col">
          <div className="section-tag">// about</div>
          <h2 className="section-heading">
            {ABOUT_CONTENT.headingPrefix} <span>{ABOUT_CONTENT.headingAccent}</span>
          </h2>

          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p className="about-para" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
