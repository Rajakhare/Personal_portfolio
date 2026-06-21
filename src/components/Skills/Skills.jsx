import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'JavaScript','HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Django', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: ['Git & GitHub', 'VS Code', 'Postman'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="section-tag">// skills</div>
          <h2 className="section-heading">
            My <span>Tech Stack</span>
          </h2>
          <p className="section-sub">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(category => (
            <div className="skill-category-card" key={category.title}>
              <div className="skill-category-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
