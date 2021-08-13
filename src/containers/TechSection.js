import { useLayoutEffect, createRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Section } from '../components/section/Section';

const transition = {
  duration: 0.6,
};

const listItem = {
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { ...transition, delay: i * 0.1 },
  }),
};

const language = ['JavaScript', 'TypeScript', 'Reactjs', 'HTML/CSS', 'JAVA'];
const db = ['MongoDB'];
const cloud = ['AWS'];
const software = ['Photoshop', 'Illustrator', 'Figma'];

export const TechSection = () => {
  const control = useAnimation();
  const ref = createRef();

  const onScroll = () => {
    const bottom = ref.current.getBoundingClientRect().bottom;

    const topBoundary = window.scrollY;
    if (bottom < topBoundary) {
      control.start('visible');
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Section
      bgPlacement="bottom-right"
      bgText="TOOLS"
      bgColor="white"
      color="pink"
      section="tech"
      ref={ref}
    >
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="list-container"
      >
        <motion.div>
          <h3 className="list-heading">LANGUAGE</h3>
          <motion.ul className="tech-list language">
            {language.map((item, i) => (
              <motion.li
                custom={i}
                initial={{ x: -1000, opacity: 0 }}
                animate={control}
                variants={listItem}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <div>
          <h3 className="list-heading">DB</h3>
          <motion.ul className="tech-list db">
            {db.map((item, i) => (
              <motion.li
                custom={i}
                initial={{ x: -1000, opacity: 0 }}
                animate={control}
                variants={listItem}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <h3 className="list-heading">CLOUD</h3>
          <motion.ul className="tech-list cloud">
            {cloud.map((item, i) => (
              <motion.li
                custom={i}
                initial={{ x: -1000, opacity: 0 }}
                animate={control}
                variants={listItem}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div>
          <h3 className="list-heading">SOFTWARE</h3>
          <motion.ul className="tech-list software">
            {software.map((item, i) => (
              <motion.li
                custom={i}
                initial={{ x: -1000, opacity: 0 }}
                animate={control}
                variants={listItem}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </Section>
  );
};
