import "./styles/About.css";

const About = () => {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "4+", label: "Projects Completed" },
    { value: "6+", label: "Technologies" },
  ];

  const highlights = [
    { icon: "🎓", text: "BSc in Management Information Systems (Special) — NSBM Green University" },
    { icon: "💻", text: "Frontend Developer & UI/UX Designer" },
    { icon: "🎨", text: "Passionate about pixel-perfect, user-centered design" },
    { icon: "🚀", text: "Bridging creativity with functional web solutions" },
  ];

  return (
    <div className="about-section" id="about">
      <div className="about-inner">
        {/* Left — heading + decorative */}
        <div className="about-left">
          <span className="about-eyebrow">About Me</span>
          <h2 className="about-heading">
            Crafting Digital <br />
            <span className="about-heading-accent">Experiences</span>
          </h2>

          {/* Decorative animated lines */}
          <div className="about-deco">
            <div className="deco-line deco-line-1" />
            <div className="deco-line deco-line-2" />
            <div className="deco-orb" />
          </div>

          {/* Stats row */}
          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — paragraph + highlights */}
        <div className="about-right">
          <p className="about-para">
            I'm a passionate Frontend Developer and UI/UX Designer with a strong
            foundation in web development and user-centered design. I bridge the
            gap between user requirements and functional solutions through a
            detail-oriented, analytical approach — specialising in modern,
            responsive web applications and high-fidelity UI designs that deliver
            seamless experiences.
          </p>

          <ul className="about-highlights">
            {highlights.map((h) => (
              <li className="highlight-item" key={h.text}>
                <span className="highlight-icon">{h.icon}</span>
                <span className="highlight-text">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
