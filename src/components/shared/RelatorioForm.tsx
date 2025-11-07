"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

function CheckboxOption({ label, checked, onChange }: { label: string, checked: boolean, onChange: () => void }) {
  return (
    <label className="flex w-full cursor-pointer items-center justify-between gap-4">
      <span className="flex-1 rounded-lg border border-gray-400 bg-white p-3 text-center font-medium text-gray-700 shadow-sm">
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-7 w-7 rounded border-gray-400 text-green-500 accent-green-500 focus:ring-green-400"
      />
    </label>
  );
}

export default function RelatorioForm() {
  
  const router = useRouter(); 

  const [options, setOptions] = useState({
    ultimoMes: true,
    noventaDias: true,
    movimentacao: false,
    manutencao: true,
  });

  const handleToggle = (optionKey: keyof typeof options) => {
    setOptions(prev => ({
      ...prev,
      [optionKey]: !prev[optionKey],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Gerando relatório com as opções:", options);
    
    router.push('/relatorios/resultado'); 
  };

  return (
    <div className="w-full max-w-sm rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        <CheckboxOption 
          label="ULTIMO MÊS" 
          checked={options.ultimoMes} 
          onChange={() => handleToggle('ultimoMes')} 
        />
        <CheckboxOption 
          label="90 dias" 
          checked={options.noventaDias} 
          onChange={() => handleToggle('noventaDias')} 
        />
        <CheckboxOption 
          label="MOVIMENTAÇÃO" 
          checked={options.movimentacao} 
          onChange={() => handleToggle('movimentacao')} 
        />
        <CheckboxOption 
          label="MANUTENÇÃO" 
          checked={options.manutencao} 
          onChange={() => handleToggle('manutencao')} 
        />

        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-cyan-400 py-2 px-10 text-base font-bold text-white shadow-md transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
          >
            Gerar relatório
          </button>
        </div>
        
      </form>
    </div>
  );
}