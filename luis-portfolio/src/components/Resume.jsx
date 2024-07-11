import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <h3>Work Experience</h3>
      <ul>
        <li>US Army</li>
        <li>Best Buy</li>
        <li>Marriott International</li>
        <li>USAA</li>
      </ul>
      <h3>Certifications</h3>
      <ul>
        <li>P&C Adjuster</li>
        <li>Xactimate Level 1</li>
        <li>Xactimate Level 2</li>
        <li>CEA Earthquake</li>
      </ul>
      <h3>Coding Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express</li>
        </ul>
      <a href="assets/images/resume.pdf" download>Download Resume</a>
    </section>
  );
};

export default Resume;
