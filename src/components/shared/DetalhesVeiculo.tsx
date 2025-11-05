"use client";

import { PlusIcon } from '@heroicons/react/24/solid';

// Props para receber a placa da página
interface DetalhesVeiculoProps {
  placa: string;
}

export default function DetalhesVeiculo({ placa }: DetalhesVeiculoProps) {

  // Dados mockados para o exemplo
  const chassi = 'XXXXXXXXXXXXXX';
  const tipo = 'LEVE';
  const numerosFogo = ['NÚMERO DE FOGO 1', 'NÚMERO DE FOGO 2', 'NÚMERO DE FOGO 3'];

  const handleCadastrarPneu = () => {
    console.log('Botão CADASTRAR NOVO PNEU clicado');
    alert('Função (simulação) para cadastrar novo pneu.');
  };

  const handleNumeroFogoClick = (numero: string) => {
    console.log('Botão', numero, 'clicado');
    alert(`Clicou no (simulação) ${numero}`);
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6">
      
      <div className="w-full rounded-lg bg-blue-300 p-6 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">{placa}</h2>
        <p className="mt-2 text-lg font-medium text-gray-700">CHASSI : {chassi}</p>
        <p className="text-lg font-medium text-gray-700">TIPO CAMINHÃO : {tipo}</p>
      </div>

      <div className="flex w-full flex-col gap-3">
        {numerosFogo.map((numero) => (
          <button
            key={numero}
            onClick={() => handleNumeroFogoClick(numero)}
            className="flex w-full items-center gap-4 rounded-lg border border-gray-300 bg-white p-4 text-left font-medium text-gray-700 shadow-md transition hover:bg-gray-50"
          >
            <PlusIcon className="h-6 w-6 rounded-md bg-gray-200 p-1 text-gray-600" />
            <span>{numero}</span>
          </button>
        ))}

        <div className="flex w-full items-center justify-center rounded-lg border border-gray-400 bg-gray-300 p-4 text-center font-bold text-gray-600 shadow-md">
          ...
        </div>
      </div>

      
      <button
        onClick={handleCadastrarPneu}
        className="w-full rounded-lg bg-blue-500 py-4 px-10 text-lg font-bold text-white shadow-lg transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        CADASTRAR NOVO PNEU
      </button>
      
    </div>
  );
}