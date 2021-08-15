import { createRef, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Section } from '../components/section/Section';

export const AboutSection = () => {
  const control = useAnimation();
  const ref = createRef();

  const onScroll = () => {
    const bottom = ref.current.getBoundingClientRect().bottom;

    const topBoundary = window.scrollY;
    if (bottom < topBoundary) {
      control.start({
        opacity: 1,
        transition: {
          delay: 0.1,
          duration: 0.6,
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
      bgText="ABOUT"
      bgPlacement="bottom-left"
      bgColor="white"
      color="blue"
      section="about"
      ref={ref}
    >
      <div className="intro-container">
        <motion.p initial={{ opacity: 0 }} animate={control}>
          Yuta Uchida is a frontend engineer with a visual art background. An
          eager learner, he continues to grow so he can provide excellent
          services. He is passionate about generating and materialising creative
          ideas, while finding solutions where others might not think to look.
        </motion.p>
      </div>
    </Section>
  );
};
