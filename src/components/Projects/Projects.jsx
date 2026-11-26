import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../../data/portfolioData'
import { ExternalIcon, GitHubIcon } from '../Icons/Icons'
import './Projects.css'

const ArchitectureDiagram = ({ type }) => {
  if (type === 'architecture') {
    const layers = [
      { label: 'Client / Swagger', detail: 'OpenAPI · HTTPS' },
      { label: 'Middleware & Routers', detail: 'Tracing · Validation' },
      { label: 'Service Layer & Auth', detail: 'JWT · Argon2id · RBAC' },
      { label: 'Async PostgreSQL', detail: 'SQLAlchemy 2.0 · Alembic' },
    ]
    return (
      <div className="project-diagram" aria-label="TaskFlow API layered architecture overview">
        <div className="diagram-label">API Architecture</div>
        <div className="diagram-flow">
          {layers.map((layer, idx) => (
            <div className="diagram-step-wrap" key={layer.label}>
              <div className="diagram-node">
                <span className="diagram-node-title">{layer.label}</span>
                <span className="diagram-node-sub">{layer.detail}</span>
              </div>
              {idx < layers.length - 1 && (
                <span className="diagram-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const modules = [
    { label: 'React Client', detail: 'Protected Routes · UI' },
    { label: 'JWT & RBAC', detail: 'Admin · Doctor · Patient' },
    { label: 'Express REST API', detail: 'Node.js · Workflows' },
    { label: 'MongoDB', detail: 'Records · Appointments' },
  ]
  return (
    <div className="project-diagram" aria-label="Hospital Management System architecture overview">
      <div className="diagram-label">System Flow</div>
      <div className="diagram-flow">
        {modules.map((mod, idx) => (
          <div className="diagram-step-wrap" key={mod.label}>
            <div className="diagram-node">
              <span className="diagram-node-title">{mod.label}</span>
              <span className="diagram-node-sub">{mod.detail}</span>
            </div>
            {idx < modules.length - 1 && (
              <span className="diagram-arrow" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-tag">// projects</div>
          <h2 className="section-heading">
            Featured <span>Engineering Work</span>
          </h2>
          <p className="section-sub">
            Personal backend and full-stack projects focused on clean architecture, authentication, and database design.
          </p>
        </div>

        <div className="featured-projects-list">
          {FEATURED_PROJECTS.map((project) => (
            <article className="featured-project-card" key={project.number}>
              <div className="project-card-header">
                <div className="project-meta-left">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  {project.status && (
                    <span className="project-status-badge">{project.status}</span>
                  )}
                </div>

                {(project.github || project.live) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GitHubIcon size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link primary"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalIcon size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <h3 className="featured-project-title">{project.title}</h3>
              <p className="featured-project-desc">{project.description}</p>

              <ArchitectureDiagram type={project.visualType} />

              <div className="project-highlights-wrap">
                <h4 className="project-highlights-heading">Key Engineering Highlights</h4>
                <ul className="project-highlights-list">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.note && <p className="project-dev-note">{project.note}</p>}

              <div className="project-tech" aria-label="Technology stack">
                {project.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {OTHER_PROJECTS.length > 0 && (
          <div className="other-projects-section">
            <h3 className="other-projects-heading">Additional Engineering Project</h3>
            <div className="other-projects-grid">
              {OTHER_PROJECTS.map((project) => (
                <article className="other-project-card" key={project.number}>
                  <div className="project-card-header">
                    <div className="project-meta-left">
                      <span className="project-number">{project.number}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GitHubIcon size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                  <h4 className="other-project-title">{project.title}</h4>
                  <p className="other-project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
