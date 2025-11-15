"use client";

import Link from 'next/link'; 
import { PlusIcon } from '@heroicons/react/24/solid';
import { usePneus } from '@/src/hooks/usePneus';

interface DetalhesVeiculoProps {
  placa: string;
  flow: 'manutencao' | 'historico'; 
  
  linkConfig?: {
    href: string;
    buttonText: string;
    buttonColorClass: string;
  } | null;
}

export default function DetalhesVeiculo({ placa, flow, linkConfig }: DetalhesVeiculoProps) {
  
  const chassi = 'XXXXXXXXXXXXXX';
  const tipo = 'LEVE';
  const placaExibida = placa || 'N/A';
  
  const { pneus, adicionarPneu } = usePneus(placaExibida);

  const handleAdicionarPneu = () => {
    adicionarPneu();
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-6">
      
      <div className="w-full rounded-lg bg-blue-300 p-6 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800">{placaExibida}</h2>
        <p className="mt-2 text-lg font-medium text-gray-700">CHASSI : {chassi}</p>
        <p className="text-lg font-medium text-gray-700">TIPO CAMINHÃO : {tipo}</p>
      </div>

      <div className="flex w-full flex-col gap-3">
        {pneus.map((pneu) => {
          const destination = flow === 'manutencao'
            ? `/manutencao/${encodeURIComponent(placaExibida)}/editar-pneu/${pneu.id}`
            : `/historico/${encodeURIComponent(placaExibida)}/detalhe-pneu/${pneu.id}`;
            
          return (
            <Link
              key={pneu.id}
              href={destination}
              className="flex w-full items-center gap-4 rounded-lg border border-gray-300 bg-white p-4 text-left font-medium text-gray-700 shadow-md transition hover:bg-gray-50"
            >
              <PlusIcon className="h-6 w-6 rounded-md bg-gray-200 p-1 text-gray-600" />
              <span>{pneu.nome}</span>
            </Link>
          );
        })}
        
        <div className="flex w-full items-center justify-center rounded-lg border border-gray-400 bg-gray-300 p-4 text-center font-bold text-gray-600 shadow-md">
          ...
        </div>
      </div>

      {flow === 'manutencao' && (
        <button
          onClick={handleAdicionarPneu}
          className="w-full rounded-lg bg-green-500 py-3 px-6 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          + ADICIONAR NOVO PNEU
        </button>
      )}

      {linkConfig && (
        <Link 
          href={linkConfig.href}
          className={`w-full rounded-lg py-4 px-10 text-center text-lg font-bold text-white shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 
            ${linkConfig.buttonColorClass} 
          `}
        >
          {linkConfig.buttonText}
        </Link>
      )}
      
    </div>
  );
}