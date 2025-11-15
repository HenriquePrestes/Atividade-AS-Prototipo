import AuthenticatedLayout from '@/src/components/layout/AuthenticatedLayout';
import CadastroVeiculoForm from '@/src/components/shared/CadastroVeiculoForm'; 

export default function CadastroVeiculoPage() {
  return (
    <AuthenticatedLayout showBackButton={true} backButtonHref="/">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-3xl">
          <div className="mb-8">
            <h1 className="text-center text-3xl font-bold text-gray-800">
              Cadastro de veículos
            </h1>
          </div>
          <CadastroVeiculoForm />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}