import { Footer } from '../components/layout/footer/Footer';
import { Header } from '../components/layout/header/Header';
import { AboutSection } from '../containers/AboutSection';
import { ContactSection } from '../containers/ContactSection';
import { TechSection } from '../containers/TechSection';
import { TopSection } from '../containers/TopSection';
import { WorkSection } from '../containers/WorkSection';

export const Main = () => {
  return (
    <>
      <Header />
      <TopSection />
      <WorkSection />
      <TechSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};
