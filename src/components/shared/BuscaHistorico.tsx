"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; 

type HistoricoItem = {
  veiculo: string;
  nFogo: string;
};

type BuscaHistoricoProps = {
  data: HistoricoItem[];
};

export default function BuscaHistorico({ data }: BuscaHistoricoProps) {
  // 2. Instanciar o router
  const router = useRouter(); 
  const [placa, setPlaca] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!placa.trim()) {
      alert('Por favor, digite uma placa.');
      return;
    }
    
    // 3. Navegar para a nova rota dinâmica com a placa
    console.log('Navegando para:', `/manutencao/${placa.toUpperCase()}`);
    router.push(`/manutencao/${placa.toUpperCase()}`);
  };

  return (
    <div className="w-full max-w-3xl">
      
      <form 
        onSubmit={handleSearch} 
        className="flex w-full flex-col items-center gap-4"
      >
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          placeholder="Digite a placa aqui!"
          className="w-full max-w-md rounded-lg border border-gray-400 bg-white p-4 text-center text-lg text-gray-700 placeholder-gray-400 shadow-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-400 py-2 px-12 text-base font-bold text-white shadow-md transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
        >
          BUSCAR
        </button>
      </form>

      <h2 className="my-8 text-center text-2xl font-semibold text-gray-700">
        Histórico de veículos
      </h2>
      <div className="overflow-hidden rounded-xl bg-white/90 shadow-2xl backdrop-blur-sm">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-blue-200/70">
            <tr>
              <th scope="col" className="py-3.5 px-6 text-left text-sm font-semibold text-blue-800">
                VEÍCULOS
              </th>
              <th scope="col" className="w-1/3 py-3.5 px-6 text-left text-sm font-semibold text-blue-800">
                Nº DE FOGO
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white/80">
            {data.map((item) => (
              <tr key={item.veiculo}>
                <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900">
                  {item.veiculo}
                </td>
                <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-700">
                  {item.nFogo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}