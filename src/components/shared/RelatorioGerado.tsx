"use client";

import { DocumentTextIcon } from '@heroicons/react/24/solid';

const reportData = [
  { label: 'MANUTENÇÃO', percentage: 45, color: '#3b82f6' }, 
  { label: 'ULTIMO MÊS', percentage: 35, color: '#b45309' }, 
  { label: '90 DIAS', percentage: 20, color: '#9333ea' }, 
];

export default function RelatorioGerado() {
  
  const handleEmail = () => {
    alert("Simulação: Enviar por e-mail");
  };

  const handlePrint = () => {
    alert("Simulação: Imprimir");
  };

  return (
    <div className="flex w-full max-w-4xl flex-col items-start gap-8 md:flex-row">
      
      <div className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-lg md:w-1/2">
        
        <div className="mb-8 flex flex-col gap-4">
          {reportData.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <span className="w-32 text-sm font-medium text-gray-700">{item.label}</span>
              <div className="relative flex-1 rounded-full bg-gray-200 h-2">
                <div 
                  className="absolute left-0 top-0 h-full rounded-full" 
                  style={{ 
                    width: `${item.percentage}%`, 
                    backgroundColor: item.color 
                  }}
                ></div>
              </div>
              <span className="w-8 text-sm font-bold text-gray-800 text-right">{item.percentage}%</span>
            </div>
          ))}
        </div>

        
        <div 
          className="mx-auto my-8 h-52 w-52 rounded-full shadow-inner" 
          style={{
            background: `conic-gradient(
              ${reportData[0].color} 0% ${reportData[0].percentage}%, 
              ${reportData[1].color} ${reportData[0].percentage}% ${reportData[0].percentage + reportData[1].percentage}%, 
              ${reportData[2].color} ${reportData[0].percentage + reportData[1].percentage}% 100%
            )`
          }}
        >
          
        </div>
        
        <div className="mt-8 space-y-2 text-sm text-gray-700">
          <p>
            <strong>MANUTENÇÃO:</strong> "Informações gerais sobre manutenção como, quantidade de veículos em manutenção e alterações feitas".
          </p>
          <p>
            <strong>Ultimo mês:</strong> "Contendo todas os veículos feitos no ultimo mês."
          </p>
          <p>
            <strong>90 dias:</strong> "Contendo tudo o que foi feito nos últimos 90 dias".
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 md:w-1/2">
        
        <button
          onClick={handleEmail}
          className="flex items-center justify-center gap-3 rounded-lg bg-blue-500 py-3 px-6 text-lg font-bold text-white shadow-md transition hover:bg-blue-600"
        >
          <DocumentTextIcon className="h-6 w-6" />
          Enviar P/e-mail
        </button>
        
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-3 rounded-lg bg-blue-500 py-3 px-6 text-lg font-bold text-white shadow-md transition hover:bg-blue-600"
        >
          Imprimir
        </button>
      </div>

    </div>
  );
}