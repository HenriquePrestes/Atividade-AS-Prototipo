import Link from 'next/link';
import CadastroPneu from '@/src/components/shared/CadastroPneu'; 

// A página recebe 'params' como a página-mãe
interface CadastroPneuPageProps {
  params: {
    placa: string;
  };
}

export default function CadastroPneuPage({ params }: CadastroPneuPageProps) {
  
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">
      
      <CadastroPneu />

      <Link 
        href={`/manutencao/${params.placa}`} 
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}