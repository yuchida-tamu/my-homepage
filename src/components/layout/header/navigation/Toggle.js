import { motion } from 'framer-motion';

export const Toggle = ({ click, transition }) => {
  return (
    <motion.div className="burger-menu" onClick={click}>
      <motion.span
        initial={{ x: -15, y: 18, opacity: 1, rotate: 0 }}
        animate={{
          x: -15,
          y: 18,
          rotate: 45,
          width: '140%',
          height: 3,
        }}
        transition={{ ...transition }}
        className="burger-menu__line burger-menu__line-top"
      ></motion.span>
      <motion.span
        initial={{ x: 0, opacity: 1, width: '100%' }}
        animate={{ x: 0, opacity: 0, width: 0 }}
        transition={{ ...transition }}
        className="burger-menu__line burger-menu__line-mid"
      ></motion.span>
      <motion.span
        initial={{ x: -15, y: -18, opacity: 1, rotate: 0 }}
        animate={{ x: -15, y: -18, rotate: 135, width: '140%', height: 3 }}
        transition={{ ...transition }}
        className="burger-menu__line burger-menu__line-bot"
      ></motion.span>
    </motion.div>
  );
};
