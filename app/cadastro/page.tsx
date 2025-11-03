"use client";
import Link from 'next/link';
import { FormEvent, useState, ChangeEvent } from 'react';

export default function CadastroPage() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    // remove qualquer caractere que não seja dígito
    const digits = e.target.value.replace(/\D/g, '');
    setPhone(digits);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phone.length < 8) {
      alert('Por favor informe um número de telefone válido (somente dígitos).');
      return;
    }

    console.log('Formulário enviado!');
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-linear-to-br from-blue-400 to-white p-6">

      <h1 className="mb-10 text-4xl font-bold text-white text-shadow-md">Faça o seu cadastro</h1>

      <div className="w-full max-w-md rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              id="telefone"
              placeholder="(00) 0000-0000"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={11}
              value={phone}
              onChange={handlePhoneChange}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Seu e-mail"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Usuário</label>
            <input
              type="text"
              id="usuario"
              placeholder="Nome de usuário"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="senha"
              placeholder="Sua senha"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-cyan-400 py-2 px-10 text-base font-bold text-white shadow-md transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
            >
              CRIAR
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