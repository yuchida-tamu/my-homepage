import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { CompactNav } from './navigation/CompactNav';
import { Nav } from './navigation/Nav';
export const Header = () => {
  const { width } = useWindowSize();
  const [isShrunk, setIsShrunk] = useState(false);
  useEffect(() => {
    if (width < 768) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  }, [width]);

  const navigation = isShrunk ? <CompactNav /> : <Nav />;

  return isShrunk ? (
    <motion.div
      initial={{ width: '100%' }}
      animate={{ width: 72, height: 72, borderRadius: '50%' }}
      className="header "
    >
      {navigation}
    </motion.div>
  ) : (
    <motion.div
      initial={{ width: 72 }}
      animate={{ width: '100vw', height: '6vh' }}
      className="header"
    >
      {navigation}
    </motion.div>
  );
};
