'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <div>
      <header className="bg-blue-500 text-white p-4 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/usuario_caminhao.jpg"
                alt="Avatar do usuário"
                width={64}
                height={64}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-semibold">Bem-vindo</h2>
              <p className="text-sm">Usuário: Antonio Fagundes</p>
              <p className="text-sm">Situação: Ativo</p>
            </div>
          </div>

          {/* Seção direita - Botão do usuário */}
          <div className="flex items-center">
            <Link 
              href="/perfil"
              className={`rounded-lg py-2 px-6 text-base font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${
                isActive('/perfil') 
                  ? 'bg-white text-blue-400' 
                  : 'bg-blue-400 text-white hover:bg-blue-500'
              }`}
            >
              Usuário
            </Link>
          </div>
        </div>
      </header>

      {/* Menu de navegação inferior */}
      <nav className="bg-blue-400 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-6 py-3">
            <Link 
              href="/manutencao"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isActive('/manutencao') 
                  ? 'bg-white text-blue-500 shadow-md' 
                  : 'bg-transparent hover:bg-blue-300 text-white'
              }`}
            >
              MANUTENÇÃO
            </Link>
            <Link 
              href="/historico"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isActive('/historico') 
                  ? 'bg-white text-blue-500 shadow-md' 
                  : 'bg-transparent hover:bg-blue-300 text-white'
              }`}
            >
              HISTÓRICO DE PNEUS
            </Link>
            <Link 
              href="/cadastro-veiculo"
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isActive('/cadastro') 
                  ? 'bg-white text-blue-500 shadow-md' 
                  : 'bg-transparent hover:bg-blue-300 text-white'
              }`}
            >
              CADASTRO DE VEÍCULOS
            </Link>
            <Link 
              href="/relatorios"
              className={`rounded-lg py-2 px-6 text-base font-bold shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${
                isActive('/relatorios') 
                  ? 'bg-white text-blue-400' 
                  : 'bg-blue-400 text-white hover:bg-blue-500'
              }`}
            >
              GERAR RELATÓRIOS
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}