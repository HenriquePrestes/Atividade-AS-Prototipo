import Link from 'next/link';
import DetalhesVeiculo from '@/src/components/shared/DetalhesVeiculo'; 

interface DetalhePageProps { params: { placa: string; }; }

export default function DetalhePage({ params }: DetalhePageProps) {
  const placaDecodificada = decodeURIComponent(params.placa);

  const manutencaoLink = {
  
    href: `/manutencao/${placaDecodificada}/editar-pneu/novo`,
    buttonText: "CADASTRAR NOVO PNEU",
    buttonColorClass: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">
      
      <DetalhesVeiculo 
        placa={placaDecodificada} 
        flow="manutencao" 
        linkConfig={manutencaoLink} 
      />

      <Link 
        href="/manutencao"
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}