import { useLayoutEffect, createRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const heading = {
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.1,
      ease: 'linear',
    },
  }),
};

export const ContactSection = () => {
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
    <div className="contact__container" id="contact" ref={ref}>
      <h2>
        <motion.span
          custom={1}
          variants={heading}
          initial={{ scale: 0.5, y: 0, opacity: 0 }}
          animate={control}
        >
          I'm{' '}
        </motion.span>
        <motion.span
          custom={2}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          looking{' '}
        </motion.span>
        <motion.span
          custom={3}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          forward{' '}
        </motion.span>
        <motion.span
          custom={4}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          to{' '}
        </motion.span>
        <motion.span
          custom={5}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          hearing{' '}
        </motion.span>
        <motion.span
          custom={6}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          from{' '}
        </motion.span>
        <motion.span
          custom={7}
          variants={heading}
          initial={{ scale: 1, y: 0, opacity: 0 }}
          animate={control}
        >
          you!!
        </motion.span>
      </h2>
      <button className="contact-btn">
        <a
          href="mailto:yuchida4dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </button>
    </div>
  );
};
