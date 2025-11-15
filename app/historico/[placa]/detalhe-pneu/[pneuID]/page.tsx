import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import DetalhesPneuHistorico from '@/src/components/shared/DetalhesHistorico';

interface DetalhePneuPageProps { params: { placa: string; pneuID: string } | any; }

export default async function DetalhePneuPage({ params }: DetalhePneuPageProps) {
  const resolved = await params;
  const placaRaw = resolved?.placa ?? 'N/D';
  const placa = decodeURIComponent(placaRaw);
  const pneuIdRaw = resolved?.pneuID ?? resolved?.pneuId ?? '1';
  const tituloPneu = `NÚMERO DE FOGO ${pneuIdRaw}`;

  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref={`/historico/${encodeURIComponent(placa)}`}>
      <div className="flex flex-col items-center justify-center py-8">
        <DetalhesPneuHistorico titulo={tituloPneu} />
      </div>
    </AuthenticatedLayout>
  );
}