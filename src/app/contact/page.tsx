import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        <PageHeader number="05" label="Contact" title="Let&apos;s Connect" />
      </div>
      <Contact />
      <div className="h-32" />
    </main>
  );
}
