import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import PerfilForm from '@/src/components/shared/PerfilForm'; 

export default function PerfilPage() {
  return (
    <AuthenticatedLayout>
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dados do usuário
        </h1>
        <PerfilForm />
      </div>
    </AuthenticatedLayout>
  );
}