import PageHeader from '@/components/PageHeader';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        <PageHeader number="02" label="Projects" title="What I&apos;ve Built" />
      </div>
      <Projects />
      <div className="h-32" />
    </main>
  );
}
