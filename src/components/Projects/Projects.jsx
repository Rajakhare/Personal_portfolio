import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Hospital Management System',
    description: 'A full-stack MERN application designed to manage hospital operations including patient registration, doctor appointments, medical records, and billing management. Built with MongoDB, Express.js, React.js, and Node.js to provide efficient workflow management and a responsive user experience.',
    tech: ['Node js', 'Express js', 'React js', 'MongoDB', 'Material UI'],
    github: 'https://github.com/Rajakhare/Hospital_Management_System',
    live: 'https://hospital-management-system-frontend-y28u.onrender.com/',
    featured: true,
  },
  {
    number: '02',
    title: 'Weather App',
    description: 'A real-time weather application that fetches live weather data based on your location or any searched city. Displays temperature, humidity, wind speed and a 5-day forecast using OpenWeather API.',
    tech: ['React', 'OpenWeather API', 'JavaScript', 'CSS3'],
    github: 'https://github.com/Rajakhare/Weatherapp',
    live: 'https://rajakhare.github.io/Weatherapp/',
    featured: false,
  },
  {
    number: '03',
    title: 'Python Automation Script - Job Application Tracker',
    description: 'A real-time weather application that fetches live weather data based on your location or any searched city. Displays temperature, humidity, wind speed and a 5-day forecast using OpenWeather API.',
    tech: ['Python', 'OOPS', 'smtplib', 'Automation'],
    github: 'https://github.com/Rajakhare/CLI_tool',
    featured: false,
  },
   
  {
    number: '04',
    title: 'Frontend Project',
    description: 'A fully responsive startup landing page built from scratch using HTML, CSS, JavaScript and Bootstrap. Features a modern UI with smooth animations, mobile-first design, interactive navigation and clean section layouts — showcasing real-world frontend development skills.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Rajakhare/Startup_Idea_Project',
    live: 'https://rajakhare.github.io/Startup_Idea_Project/',
    featured: false,
  },
  {
    number: '05',
    title: 'Calculator',
    description: 'A clean and responsive calculator app supporting basic arithmetic operations. Built with a focus on smooth UI interactions, keyboard support and accurate expression evaluation.',
    tech: ['React js','JavaScript', 'CSS3'],
    github: 'https://github.com/Rajakhare/Calculator',
    live: 'https://rajakhare.github.io/Calculator/',
    featured: false,
  },
  {
    number: '06',
    title: 'To Do List',
    description: 'A feature-rich task management app where each task includes a title, priority level, category and due date. Supports filtering, marking complete and deleting tasks to keep you organized.',
    tech: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/Rajakhare/To_Do_List',
    live: 'https://rajakhare.github.io/To_Do_List/',
    featured: false,
  },
  {
    number: '07',
    title: 'StopWatch',
    description: 'A precise and minimal stopwatch application with start, stop, reset and lap recording functionality. Displays hours, minutes, seconds and milliseconds in a clean real-time interface.',
    tech: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/Rajakhare/Stopwatch',
    live: 'https://rajakhare.github.io/Stopwatch/',
    featured: false,
  },
]

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
)

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
)

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <div className="section-tag">// projects</div>
          <h2 className="section-heading">
            Things I've <span>Built</span>
          </h2>
          <p className="section-sub">
            A collection of projects I've worked on. Each one taught me something new.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn" title="GitHub">
                    <GitHubIcon />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn" title="Live Demo">
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
