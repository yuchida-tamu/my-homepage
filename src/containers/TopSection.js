import { IconContext } from 'react-icons';
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { Section } from '../components/section/Section';
export const TopSection = () => {
  return (
    <Section section="top" bgColor="white">
      <div className="title-fullname__container">
        <h1>
          <span className="letter-pink">Y</span>
          <span>U</span>
          <span>T</span>
          <span>A</span>
          <span> </span>
          <span className="letter-pink">U</span>
          <span>C</span>
          <span>H</span>
          <span>I</span>
          <span>D</span>
          <span>A</span>
        </h1>
      </div>
      <div className="title-position__container">
        <h2>
          <span className="position__first-chunk">
            <span className="letter-blue">F</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
          </span>{' '}
          <span className="position__second-chunk">
            <span className="letter-blue">E</span>
            <span>n</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
            <span>e</span>
            <span>e</span>
            <span>r</span>
          </span>
        </h2>
      </div>
      <div className="social-media__container">
        <IconContext.Provider value={{ size: '56px' }}>
          <AiFillLinkedin />
          <AiFillTwitterSquare />
          <AiFillMail />
        </IconContext.Provider>
      </div>
    </Section>
  );
};
