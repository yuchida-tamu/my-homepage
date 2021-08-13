import { IconContext } from 'react-icons';
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { Section } from '../components/section/Section';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: 'linear',
};

const letter = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    rotate: 360,
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
};

const first = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const second = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const TopSection = () => {
  return (
    <Section section="top" bgColor="white">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="title-fullname__container"
      >
        <motion.h1>
          <motion.span variants={first}>
            <motion.span variants={letter} className="letter-pink">
              Y
            </motion.span>
            <motion.span variants={letter}>U</motion.span>
            <motion.span variants={letter}>T</motion.span>
            <motion.span variants={letter}>A</motion.span>
          </motion.span>
          <span> </span>
          <motion.span variants={second}>
            <motion.span variants={letter} className="letter-pink">
              U
            </motion.span>
            <motion.span variants={letter}>C</motion.span>
            <motion.span variants={letter}>H</motion.span>
            <motion.span variants={letter}>I</motion.span>
            <motion.span variants={letter}>D</motion.span>
            <motion.span variants={letter}>A</motion.span>
          </motion.span>
        </motion.h1>
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="title-position__container"
      >
        <h2>
          <motion.span variants={first} className="position__first-chunk">
            <motion.span variants={letter} className="letter-blue">
              F
            </motion.span>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>d</motion.span>
          </motion.span>{' '}
          <motion.span variants={second} className="position__second-chunk">
            <motion.span variants={letter} className="letter-blue">
              E
            </motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>g</motion.span>
            <motion.span variants={letter}>i</motion.span>
            <motion.span variants={letter}>n</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>e</motion.span>
            <motion.span variants={letter}>r</motion.span>
          </motion.span>
        </h2>
      </motion.div>
      <motion.div className="social-media__container">
        <IconContext.Provider value={{ size: '56px' }}>
          <motion.a
            animate={{ y: [0, -128, 0], rotate: [0, 360] }}
            transition={{
              delay: 0.2,
              duration: 2,
              east: 'linear',
              repeatDelay: 1,
            }}
            href="https://www.linkedin.com/in/yuta-uchida-76718316b/"
          >
            <AiFillLinkedin />
          </motion.a>
          <motion.a
            animate={{ y: [0, -128, 0], rotate: [0, 360] }}
            transition={{
              delay: 0.6,
              duration: 2,
              east: 'linear',
              repeatDelay: 1,
            }}
            href="https://twitter.com/yuchida1992"
          >
            <AiFillTwitterSquare />
          </motion.a>
          <motion.a
            animate={{ y: [0, -128, 0], rotate: [0, 720] }}
            transition={{
              delay: 1,
              duration: 2,
              east: 'linear',
              repeatDelay: 1,
            }}
            href="mailto:yuchida4dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </motion.a>
        </IconContext.Provider>
      </motion.div>
    </Section>
  );
};
