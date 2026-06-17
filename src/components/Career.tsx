import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education 
          <br />Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Diploma in Information Technology</h4>
                <h5>Sri Lanka International Buddhist Academy (SIBA Campus)</h5>
              </div>
              <h3>2018-2019</h3>
            </div>
            <p>
              Completed a Higher Diploma in Information Technology, building a
              strong foundation in software development and IT concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Diploma in English</h4>
                <h5>Sri Lanka International Buddhist Academy (SIBA Campus)</h5>
              </div>
              <h3>2018-2019</h3>
            </div>
            <p>
              Completed a Higher Diploma in English, strengthening communication
              and language proficiency for professional and technical contexts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NVQ Level 4 National Certificates</h4>
                <h5>Vocational Training Authority (VTA)</h5>
              </div>
              <h3>2020-2021</h3>
            </div>
            <p>
              Gained practical vocational training and national-level
              certification in IT and related technical disciplines.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc in Management Information Systems (Special)</h4>
                <h5>NSBM Green University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing an undergraduate degree (2024–2027) specializing
              in MIS, with active involvement as a Designer at IEEE WIE NSBM,
              Co-chief Media Creator at the Association of Information Systems,
              and Member of ISACA NSBM.
            </p>
          </div>
        </div>

        <div className="career-certs">
          <h3 className="career-certs-title">Certifications</h3>
          <div className="career-certs-grid">
            <div className="career-cert-item">
              <div className="career-cert-icon">📊</div>
              <div className="career-cert-info">
                <h4>Power BI for Beginners</h4>
                <p>Simplilearn</p>
              </div>
            </div>
            <div className="career-cert-item">
              <div className="career-cert-icon">🌐</div>
              <div className="career-cert-info">
                <h4>HTML</h4>
                <p>Sololearn</p>
              </div>
            </div>
            <div className="career-cert-item">
              <div className="career-cert-icon">📋</div>
              <div className="career-cert-info">
                <h4>Project Management Skills</h4>
                <p>UOM (University of Moratuwa)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
