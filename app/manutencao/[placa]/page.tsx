import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import DetalhesVeiculo from '@/src/components/shared/DetalhesVeiculo'; 

interface DetalhePageProps { params: Promise<{ placa: string; }>; }

export default async function DetalhePage({ params }: DetalhePageProps) {
  const resolvedParams = await params;
  const placaDecodificada = decodeURIComponent(resolvedParams.placa);

  const manutencaoLink = {
    href: `/manutencao/${placaDecodificada}/editar-pneu/novo`,
    buttonText: "ATUALIZAR PNEU EXISTENTE",
    buttonColorClass: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
  };

  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref="/manutencao">
      <div className="flex flex-col items-center justify-center py-8">
        <DetalhesVeiculo 
          placa={placaDecodificada} 
          flow="manutencao" 
          linkConfig={manutencaoLink} 
        />
      </div>
    </AuthenticatedLayout>
  );
}