import Link from 'next/link';
import DetalhesPneuHistorico from '@/src/components/shared/DetalhesHistorico';

interface DetalhePneuPageProps { params: { placa: string; pneuID: string } | any; }

export default async function DetalhePneuPage({ params }: DetalhePneuPageProps) {
  const resolved = await params;
  const placaRaw = resolved?.placa ?? 'N/D';
  const placa = decodeURIComponent(placaRaw);
  const pneuIdRaw = resolved?.pneuID ?? resolved?.pneuId ?? '1';
  const tituloPneu = `NÚMERO DE FOGO ${pneuIdRaw}`;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">

      <DetalhesPneuHistorico titulo={tituloPneu} />

      <Link 
        href={`/historico/${encodeURIComponent(placa)}`}
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}