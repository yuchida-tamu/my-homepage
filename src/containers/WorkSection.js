import { Section } from '../components/section/Section';

export const WorkSection = () => {
  return (
    <Section
      section="work"
      bgColor="tinted"
      bgText="WORK"
      bgPlacement="top-left"
      color="blue"
    >
      <div className="image__container">
        <img
          alt="mockup"
          src={require('../assets/workout-tracker__mockup.png').default}
        />
      </div>
      <div className="featured-work-item__container">
        <h2>Workout Tracker</h2>
        <p>
          Workout management web applicattion, with which you can keep record of
          your exercise routine, and keep track of your progress.
        </p>
        <p>I designed and developed this app with my cohort.</p>

        <button onClick={() => window.alert('clicked')}>CHECK</button>
      </div>
    </Section>
  );
};
