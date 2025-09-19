import { Header } from '@/components/shared/Header';
import { TravelForm } from '@/components/TravelForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <div className="space-y-8">
          <TravelForm />
          {/* Results will go here */}
        </div>
      </main>
      <footer className="p-4 border-t text-center text-sm text-muted-foreground">
        Built for the Firebase Studio Championship.
      </footer>
    </div>
  );
}