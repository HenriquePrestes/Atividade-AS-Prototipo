'use client';

import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import DetalhesPneuHistorico from '@/src/components/shared/DetalhesHistorico';
import { useQuilometragem } from '@/src/hooks/useQuilometragem';

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
        <DetalhePneuHistoricoWrapper titulo={tituloPneu} placa={placa} />
      </div>
    </AuthenticatedLayout>
  );
}

// Wrapper component para usar hooks
function DetalhePneuHistoricoWrapper({ titulo, placa }: { titulo: string; placa: string }) {
  const { quilometragem } = useQuilometragem(placa);
  
  return (
    <DetalhesPneuHistorico 
      titulo={titulo} 
      quilometragem={quilometragem}
    />
  );
}