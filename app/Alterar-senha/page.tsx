"use client"; 

import Link from 'next/link';
import { FormEvent } from 'react'; 

export default function AlterarSenhaPage() {
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('Formulário de alteração de senha enviado!');
    alert('Senha alterada com sucesso!');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">
      
      <h1 className="mb-10 text-4xl font-bold text-white text-shadow-md">
        Redefinição de senha
      </h1>

      <div className="w-full max-w-md rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Seu e-mail"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="nova-senha" className="block text-sm font-medium text-gray-700">
              Nova senha
            </label>
            <input
              type="password"
              id="nova-senha"
              placeholder="Digite sua senha"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="confirmar-senha" className="block text-sm font-medium text-gray-700">
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmar-senha"
              placeholder="Confirmar sua senha"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-cyan-400 py-2 px-10 text-base font-bold text-white shadow-md transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
            >
              Alterar senha
            </button>
          </div>

        </form>
      </div>

      <Link 
        href="/" 
        className="absolute bottom-6 right-6 rounded-lg bg-white/90 py-2 px-4 text-sm text-gray-700 shadow-md transition hover:bg-white"
      >
        &larr; Voltar
      </Link>
      
    </div>
  );
}