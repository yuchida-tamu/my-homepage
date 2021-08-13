import { useLayoutEffect, createRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Section } from '../components/section/Section';

export const WorkSection = () => {
  const imgControl = useAnimation();
  const titleControl = useAnimation();
  const pControl = useAnimation();
  const ref = createRef();

  const onScroll = () => {
    const top = ref.current.getBoundingClientRect().top;
    const bot = ref.current.getBoundingClientRect().bottom;

    const topBoundary = window.scrollY + window.innerHeight * 0.45;
    const botBoundary = window.innerHeight * 0.5;

    if (top < topBoundary && bot > botBoundary) {
      if (window.innerWidth > 680) {
        imgControl.start({
          y: -75,
          scale: 1.25,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        });
      } else {
        imgControl.start({
          y: 0,
          scale: 1.1,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeInOut',
          },
        });
      }
      titleControl.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      });
      pControl.start({
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      });
    } else {
      imgControl.start({
        y: 75,
        scale: 1,
        opacity: 0,
        transition: {
          duration: 0.3,
        },
      });
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Section
      section="work"
      bgColor="tinted"
      bgText="WORK"
      bgPlacement="top-left"
      color="blue"
      ref={ref}
    >
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={imgControl}
        className="image__container"
      >
        <img
          alt="mockup"
          src={require('../assets/workout-tracker__mockup.png').default}
        />
      </motion.div>
      <div className="featured-work-item__container">
        <motion.h2 initial={{ opacity: 0, x: 1000 }} animate={titleControl}>
          Workout Tracker
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={pControl}>
          Workout management web applicattion, with which you can keep record of
          your exercise routine, and keep track of your progress.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={pControl}>
          Currently, it is still a work-in-progress project. My cohort and I are
          designing and developing the app, looking to publish it this year.
        </motion.p>

        <button>
          <a href="#">CHECK</a>
        </button>
      </div>
    </Section>
  );
};
