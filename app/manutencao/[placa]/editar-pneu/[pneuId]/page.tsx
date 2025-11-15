import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import CadastroPneu from '@/src/components/shared/CadastroPneu'; 

// A página recebe 'params' como a página-mãe
interface CadastroPneuPageProps {
  params: {
    placa: string;
  };
}

export default function CadastroPneuPage({ params }: CadastroPneuPageProps) {
  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref={`/manutencao/${params.placa}`}>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Cadastro de Pneu</h1>
        <CadastroPneu />
      </div>
    </AuthenticatedLayout>
  );
}