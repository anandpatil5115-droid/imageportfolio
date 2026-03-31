import PageHeader from '@/components/PageHeader';
import Skills from '@/components/Skills';

export default function SkillsPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        <PageHeader number="03" label="Skills" title="Tech Stack" />
      </div>
      <Skills />
      <div className="h-32" />
    </main>
  );
}
