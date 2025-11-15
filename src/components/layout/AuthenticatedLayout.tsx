import Link from 'next/link';
import { Header } from '@/src/components/shared/Header';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  backButtonHref?: string;
  backButtonText?: string;
}

export default function AuthenticatedLayout({
  children,
  showBackButton = false,
  backButtonHref = "/",
  backButtonText = "Voltar"
}: AuthenticatedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative">
        {children}
        {showBackButton && (
          <Link 
            href={backButtonHref}
            className="fixed bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-blue-400 hover:text-white z-50"
          >
            {backButtonText}
          </Link>
        )}
      </main>
    </div>
  );
}