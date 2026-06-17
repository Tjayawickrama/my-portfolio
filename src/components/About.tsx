import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-image-wrapper">
        <div className="about-glow-light"></div>
        <img
          src="/images/3.png"
          alt="About Tharushi"
          className="about-image"
        />
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a passionate Frontend Developer and UI/UX Designer with a strong
          foundation in web development and user-centered design. Currently
          pursuing a BSc in Management Information Systems (Special) at NSBM
          Green University, I bridge the gap between user requirements and
          functional solutions through a detail-oriented, analytical approach.
          I specialize in creating modern, responsive web applications and
          high-fidelity UI designs that deliver seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
