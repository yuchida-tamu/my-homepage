import { IconContext } from 'react-icons';
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from 'react-icons/ai';
export const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <span>Yuta Uchida</span>
      </div>
      <div className="social-icon__container">
        <IconContext.Provider value={{ size: '36px' }}>
          <a href="https://www.linkedin.com/in/yuta-uchida-76718316b/">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/yuchida4dev">
            <AiFillTwitterSquare />
          </a>
          <a
            href="mailto:yuchida4dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
        </IconContext.Provider>
      </div>
      <div className="copyright__container">
        <span>Designed and Created by Yuta Uchida. Copyright © 2021</span>
      </div>
    </div>
  );
};
