import Link from 'next/link';
import RelatorioGerado from '@/src/components/shared/RelatorioGerado'; 

export default function ResultadoRelatorioPage() {
  return (
  <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6 md:p-12">
      
      <div className="w-full max-w-4xl">
        
        <h1 className="mb-10 text-center text-5xl font-bold text-gray-800">
          Relatórios
        </h1>

        <RelatorioGerado />

      </div>

      <Link 
        href="/relatorios"
        className="absolute bottom-6 right-6 rounded-lg bg-gray-100 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-gray-200"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}