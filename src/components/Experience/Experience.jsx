import { EXPERIENCES } from '../../data/portfolioData'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <div className="section-tag">// experience</div>
          <h2 className="section-heading">
            Professional <span>Experience</span>
          </h2>
          <p className="section-sub">
            Hands-on engineering experience building backend services, authentication flows, and full-stack integrations.
          </p>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp) => (
            <article className="experience-card" key={`${exp.company}-${exp.role}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot"></span>
              </div>

              <div className="experience-card-body">
                <div className="experience-top">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company-row">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-sep" aria-hidden="true">·</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>

                  <div className="experience-meta">
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-tech" aria-label="Technologies used">
                  {exp.tech.map((item) => (
                    <span className="exp-tech-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
