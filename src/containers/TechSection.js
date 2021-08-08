import { Section } from '../components/section/Section';

export const TechSection = () => {
  return (
    <Section
      bgPlacement="bottom-right"
      bgText="TECH"
      bgColor="white"
      color="pink"
      section="tech"
    >
      <div className="list-container">
        <div>
          <h3 className="list-heading">LANGUAGE</h3>
          <ul className="tech-list language">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Reactjs</li>
            <li>HTML/CSS</li>
            <li>JAVA</li>
          </ul>
        </div>
        <div>
          <h3 className="list-heading">DB</h3>
          <ul className="tech-list db">
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3 className="list-heading">CLOUD</h3>
          <ul className="tech-list cloud">
            <li>AWS</li>
          </ul>
        </div>
        <div>
          <h3 className="list-heading">SOFTWARE</h3>
          <ul className="tech-list software">
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
