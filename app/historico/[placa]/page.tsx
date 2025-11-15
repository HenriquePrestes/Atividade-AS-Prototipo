import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import DetalhesVeiculo from '@/src/components/shared/DetalhesVeiculo'; 

interface DetalheHistoricoPageProps { params: { placa: string; } | any; }

export default async function DetalheHistoricoPage({ params }: DetalheHistoricoPageProps) {
  const resolved = await params;
  const placaRaw = resolved?.placa ?? 'N/D';
  const placaDecodificada = decodeURIComponent(placaRaw);

  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref="/historico">
      <div className="flex flex-col items-center justify-center py-8">
        <DetalhesVeiculo 
          placa={placaDecodificada} 
          flow="historico"
        />
      </div>
    </AuthenticatedLayout>
  );
}