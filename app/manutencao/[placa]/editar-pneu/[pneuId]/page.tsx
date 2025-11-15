import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import CadastroPneu from '@/src/components/shared/CadastroPneu'; 

// A página recebe 'params' como a página-mãe
interface CadastroPneuPageProps {
  params: Promise<{
    placa: string;
    pneuId: string;
  }>;
}

export default async function CadastroPneuPage({ params }: CadastroPneuPageProps) {
  const resolvedParams = await params;
  
  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref={`/manutencao/${resolvedParams.placa}`}>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Cadastro de Pneu</h1>
        <CadastroPneu placa={resolvedParams.placa} />
      </div>
    </AuthenticatedLayout>
  );
}