import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
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
    <AuthenticatedLayout showBackButton={true} backButtonHref="/">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Manutenção de Veículos</h1>
        <BuscaHistorico data={mockData} basePath="manutencao" />
      </div>
    </AuthenticatedLayout>
  );
}