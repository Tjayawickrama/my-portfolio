import "./styles/Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Java", "PHP", "C", "Dart"],
      color: "#ff6b9d",
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      color: "#c44569",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Spring Boot", "Firebase", "MySQL", "MongoDB", "Express"],
      color: "#a8edea",
    },
    {
      category: "Tools",
      skills: ["Figma", "VS Code", "Git", "Postman", "Android Studio", "Power BI"],
      color: "#fed6e3",
    },
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-main-title">My Expertise</h2>
        </div>

        <div className="skills-wrapper">
          {skillsData.map((skillGroup, index) => (
            <div 
              key={index} 
              className="skill-column"
              style={{ "--accent-color": skillGroup.color } as React.CSSProperties}
            >
              <div className="skill-column-header">
                <div className="color-dot"></div>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-items">
                {skillGroup.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;




