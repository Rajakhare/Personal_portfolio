import './About.css'
import photo from '../../assets/portfolio_photo.png'


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image-col">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <img src={photo} alt="Profile" className='about-profile-img'/>
            </div>
            <div className="about-image-border"></div>
            <div className="about-badge-card">
              <span className="about-badge-icon">⚡</span>
              <div>
                <div className="about-badge-title">Open to Work</div>
                <div className="about-badge-sub">Full-time & Freelance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <div className="section-tag">// about me</div>
          <h2 className="section-heading">
            Crafting Digital <span>Experiences</span>
          </h2>

          <p className="about-para">
            Hi! I'm <strong>Raj Akhare</strong>, a passionate full stack developer based in
            your city. I love building beautiful, accessible and performant web applications
            that solve real problems.
          </p>
          <p className="about-para">
            With a strong foundation in React and modern JavaScript, I enjoy turning complex
            ideas into elegant user interfaces. When I'm not coding, you'll find me exploring
            new technologies and contributing to open source.
          </p>
          <p className="about-para">
            I believe great software is built at the intersection of clean code and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
