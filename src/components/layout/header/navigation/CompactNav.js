import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toggle } from './Toggle';
import { Link, animateScroll as scroll } from 'react-scroll';

const transition = { duration: 0.7, ease: [0.6, 0.04, 0.15, 0.9] };

export const CompactNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <Toggle transition={transition} click={onClickHandler} />
          <motion.ul
            initial={{ opacity: 0, height: 0, width: 0, borderRadius: '50%' }}
            animate={{
              opacity: 1,
              height: '80%',
              width: 317,
              borderRadius: '1%',
            }}
            end={{
              opacity: 0,
              height: 0,
              width: 0,
              borderRadius: '1%',
            }}
            className="compact-menu"
          >
            <li>
              <Link
                className="compact-menu__item"
                to="top"
                onClick={onClickHandler}
                smooth={true}
              >
                Top
              </Link>
            </li>
            <li>
              <Link
                className="compact-menu__item"
                to="work"
                onClick={onClickHandler}
                smooth={true}
              >
                Featured works
              </Link>
            </li>
            <li>
              <Link
                className="compact-menu__item"
                to="about"
                onClick={onClickHandler}
                smooth={true}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                className="compact-menu__item"
                to="contact"
                onClick={onClickHandler}
                smooth={true}
              >
                Contact
              </Link>
            </li>
          </motion.ul>
        </>
      ) : (
        <motion.div
          initial={{ x: -15 }}
          animate={{ x: -15 }}
          className="burger-menu"
          onClick={onClickHandler}
        >
          <motion.span
            initial={{ x: 0, y: 18, opacity: 1, rotate: 45, height: 3 }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
              width: 40,
              height: 1,
            }}
            transition={{ ...transition }}
            className="burger-menu__line burger-menu__line-top"
          ></motion.span>
          <motion.span
            initial={{ x: 0, opacity: 0, width: 0 }}
            animate={{ x: 0, opacity: 1, width: 40 }}
            className="burger-menu__line burger-menu__line-mid"
          ></motion.span>
          <motion.span
            initial={{ x: 0, y: -18, opacity: 1, rotate: 135, height: 3 }}
            animate={{ x: 0, y: 0, rotate: 0, width: 40, height: 1 }}
            transition={{ ...transition }}
            className="burger-menu__line burger-menu__line-bot"
          ></motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
