"use client";

import { useState, FormEvent } from 'react';
import Link from 'next/link';

const mockUserData = {
  nome: 'Antônio Fagundes',
  telefone: '(51)9999-9999',
  email: 'AntonioFagundes@gmail.com',
  usuario: 'AntonioF',
  senha: 'xxxxxxxxxxxxx', 
};

export default function PerfilForm() {
  
  const [formData, setFormData] = useState(mockUserData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Dados salvos:", formData);
    alert("Dados salvos (simulação) com sucesso!");
  };

  const inputStyle = "mt-1 block w-full rounded-lg border border-gray-300 bg-blue-50/50 p-3 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const cardStyle = "w-full max-w-lg rounded-xl bg-gradient-to-b from-white/90 to-blue-100/90 p-8 shadow-2xl backdrop-blur-sm";

  return (
    <div className={cardStyle}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input 
            type="text" 
            id="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            className={inputStyle} 
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input 
            type="tel" 
            id="telefone" 
            value={formData.telefone} 
            onChange={handleChange} 
            className={inputStyle} 
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input 
            type="email" 
            id="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={inputStyle} 
          />
        </div>

        <div>
          <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
            Usuário
          </label>
          <input 
            type="text" 
            id="usuario" 
            value={formData.usuario} 
            onChange={handleChange} 
            className={inputStyle} 
          />
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input 
            type="password" 
            id="senha" 
            value={formData.senha} 
            onChange={handleChange} 
            className={inputStyle} 
          />
          <div className="mt-2 text-sm text-right">
            <Link href="/Alterar-senha" className="text-blue-600 hover:underline">Alterar senha?</Link>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-cyan-400 py-2 px-10 text-base font-bold text-white shadow-md transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
          >
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
}