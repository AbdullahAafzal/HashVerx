import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobDetail from '@/components/careers/JobDetail';

export default function JobPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <JobDetail jobId={params.id} />
      <Footer />
    </main>
  );
}


