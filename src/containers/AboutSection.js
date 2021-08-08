import { Section } from '../components/section/Section';

export const AboutSection = () => {
  return (
    <Section
      bgText="ABOUT"
      bgPlacement="bottom-left"
      bgColor="white"
      color="blue"
      section="about"
    >
      <div className="intro-container">
        <p>
          Yuta Uchida is frontend engineer, who has visual art background. He is
          passonate about generating and materializing creative ideas. He is
          eager to grow and keep on providing better services.
        </p>
      </div>
    </Section>
  );
};
