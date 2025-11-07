"use client";

import { useState, FormEvent } from 'react';

const mockData = {
  placa: 'IUV-5963',
  ano: '2023',
  modelo: 'Scania S 770',
  chassi: '987654321-21',
  quilometragem: '129.300 KM',
  renavam: '005489639',
  situacao: 'Ativo',
};

const inputStyle = "mt-1 block w-full rounded-xl border border-gray-400 bg-white/80 p-3 text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500";

export default function CadastroVeiculoForm() {
  
  const [formData, setFormData] = useState(mockData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Veículo cadastrado:", formData);
    alert("Veículo criado com sucesso!");
  };

  return (
    <div className="w-full rounded-xl bg-linear-to-b from-white/90 to-blue-100/90 p-8 shadow-2xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="placa" className="block text-sm font-medium text-gray-700">Placa</label>
              <input type="text" id="placa" value={formData.placa} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="ano" className="block text-sm font-medium text-gray-700">Ano de fabricação</label>
              <input type="text" id="ano" value={formData.ano} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
              <input type="text" id="modelo" value={formData.modelo} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="chassi" className="block text-sm font-medium text-gray-700">Chassi</label>
              <input type="text" id="chassi" value={formData.chassi} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="quilometragem" className="block text-sm font-medium text-gray-700">Quilometragem</label>
              <input type="text" id="quilometragem" value={formData.quilometragem} onChange={handleChange} className={inputStyle} />
            </div>
          </div>
          
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="renavam" className="block text-sm font-medium text-gray-700">Renavam</label>
              <input type="text" id="renavam" value={formData.renavam} onChange={handleChange} className={inputStyle} />
            </div>
            <div>
              <label htmlFor="situacao" className="block text-sm font-medium text-gray-700">Situação</label>
              <input type="text" id="situacao" value={formData.situacao} onChange={handleChange} className={inputStyle} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-cyan-400 py-2 px-12 text-base font-bold text-white shadow-md transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
          >
            Criar
          </button>
        </div>

      </form>
    </div>
  );
}