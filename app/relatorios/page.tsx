import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import RelatorioForm from '@/src/components/shared/RelatorioForm'; 

export default function RelatorioPage() {
  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref="/">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Relatórios
        </h1>
        <RelatorioForm />
      </div>
    </AuthenticatedLayout>
  );
}