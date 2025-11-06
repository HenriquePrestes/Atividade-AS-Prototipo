import Link from 'next/link';
import DetalhesVeiculo from '@/src/components/shared/DetalhesVeiculo'; 

interface DetalheHistoricoPageProps { params: { placa: string; } | any; }

export default async function DetalheHistoricoPage({ params }: DetalheHistoricoPageProps) {
  const resolved = await params;
  const placaRaw = resolved?.placa ?? 'N/D';
  const placaDecodificada = decodeURIComponent(placaRaw);

  return (
  <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">

      <DetalhesVeiculo 
        placa={placaDecodificada} 
        flow="historico"
      />

      <Link 
        href="/historico"
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}