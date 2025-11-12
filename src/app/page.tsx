import Image from 'next/image';
import Navbar from './home/partial/navbar';
import Hero from './home/partial/hero';
import ProvenSection from './home/partial/about-proven';
import ExperienceSection from './home/partial/about-tech';
import ChooseWiselySection from './home/partial/skill-chooseMe';
import JobExperience from './home/partial/skill-building';
import Projects from './home/partial/project-frontend';
import Testimonials from './home/partial/testimonials';
import FAQ from './home/partial/FAQ';
import ContactForm from './home/partial/contact-form';
import Footer from './home/partial/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProvenSection />
      <ExperienceSection />
      <ChooseWiselySection />
      <JobExperience />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
