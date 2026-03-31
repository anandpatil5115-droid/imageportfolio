import PageHeader from '@/components/PageHeader';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        <PageHeader number="01" label="About" title="About Me" />
      </div>
      <About />
      <div className="h-32" />
    </main>
  );
}
