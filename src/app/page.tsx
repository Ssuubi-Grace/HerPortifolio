import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import CommunityImpact from '@/components/CommunityImpact';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Skills />
      <Experience />
      <CommunityImpact />
      <Projects />
      <Contact />
    </main>
  );
}
