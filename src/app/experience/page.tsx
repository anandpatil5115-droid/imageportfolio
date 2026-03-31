import PageHeader from '@/components/PageHeader';
import Experience from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        <PageHeader number="04" label="Experience" title="Where I&apos;ve Worked" />
      </div>
      <Experience />
      <div className="h-32" />
    </main>
  );
}
