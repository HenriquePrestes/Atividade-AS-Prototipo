import Link from 'next/link';
import BuscaHistorico from '@/src/components/shared/BuscaHistorico'; 

const mockData = [
  { veiculo: 'AET-2354', nFogo: 'XX' },
  { veiculo: 'OPT-8965', nFogo: 'XX' },
  { veiculo: 'MJK-9236', nFogo: 'XX' },
  { veiculo: 'LJK-6887', nFogo: 'XX' },
  { veiculo: 'ITW-6640', nFogo: 'XX' },
];

export default function ManutencaoPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">
      
      <BuscaHistorico data={mockData} basePath="manutencao" />

      <Link 
        href="/" 
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}