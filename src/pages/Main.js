import { Footer } from '../components/layout/footer/Footer';
import { Header } from '../components/layout/header/Header';
import { AboutSection } from '../containers/AboutSection';
import { ContactSection } from '../containers/ContactSection';
import { TechSection } from '../containers/TechSection';
import { TopSection } from '../containers/TopSection';
import { WorkSection } from '../containers/WorkSection';

import { AnimatePresence } from 'framer-motion';

export const Main = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Header />
        <TopSection id="top" />
        <WorkSection id="work" />
        <TechSection id="tech" />
        <AboutSection id="about" />
        <ContactSection />
        <Footer />
      </AnimatePresence>
    </>
  );
};
