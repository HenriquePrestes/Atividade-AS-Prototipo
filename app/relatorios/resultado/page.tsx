import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import RelatorioGerado from '@/src/components/shared/RelatorioGerado'; 

export default function ResultadoRelatorioPage() {
  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref="/relatorios">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
            Relatórios Gerados
          </h1>
          <RelatorioGerado />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}