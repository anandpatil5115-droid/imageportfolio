import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      {/* Scroll-driven canvas animation + overlay text */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Teaser sections with "View All" links */}
      <Projects teaser />
      <Experience teaser />
      <Skills teaser />
      <Contact />
    </main>
  );
}
