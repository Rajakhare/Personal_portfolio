import { SKILL_CATEGORIES } from '../../data/portfolioData'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="section-tag">// skills</div>
          <h2 className="section-heading">
            Technical <span>Skills</span>
          </h2>
          <p className="section-sub">
            Core technologies, databases, and engineering tools I use to build backend services and full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skill-category-card" key={category.id}>
              <div className="skill-category-header">
                <h3 className="skill-category-title">{category.title}</h3>
                <p className="skill-category-desc">{category.description}</p>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
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
