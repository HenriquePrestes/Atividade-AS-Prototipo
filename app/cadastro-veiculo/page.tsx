import Link from 'next/link';
import CadastroVeiculoForm from '@/src/components/shared/CadastroVeiculoForm'; 

export default function CadastroVeiculoPage() {
  return (
  <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6 md:p-12">
      
      <div className="w-full max-w-3xl">
        
        <div className="mb-4">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            Cadastro de veículos
          </h1>
        </div>

        <CadastroVeiculoForm />

      </div>

      <Link 
        href="/"
        className="absolute bottom-6 right-6 rounded-lg bg-gray-100 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-gray-200"
      >
        &larr; Voltar
      </Link>
    </div>
  );
}