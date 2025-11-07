import Link from 'next/link';
import RelatorioForm from '@/src/components/shared/RelatorioForm'; 

export default function RelatorioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">
      

      <h1 className="mb-10 text-5xl font-bold text-white text-shadow-md">
        Relatórios
      </h1>


      <RelatorioForm />


      <Link 
        href="/manutencao" 
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}