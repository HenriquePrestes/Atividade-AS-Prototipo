interface DetalhesPneuProps {
  titulo: string;
}

const dados = [
  { label: 'QUILOMETRAGEM', value: '129.038-KM' },
  { label: 'PRESSÃO MEDIDA', value: '50' },
  { label: 'RODÍZIO', value: 'S' },
  { label: 'CONSERTO', value: 'N' },
  { label: 'RECAPAGEM', value: 'S' },
  { label: 'SUCATEADO', value: 'S' },
  { label: 'ESTOQUE', value: 'S' },
  { label: 'VENDIDO', value: 'N' },
  { label: 'PROFUNDIDADE DO SULCO', value: '2' },
  { label: 'POSIÇÃO', value: 'Traseiro-D-1' },
];

export default function DetalhesPneuHistorico({ titulo }: DetalhesPneuProps) {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl bg-white/90 shadow-2xl backdrop-blur-sm">
      
      <div className="bg-blue-300 p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">{titulo}</h2>
      </div>

      <div className="p-6">
        <div className="flex flex-col">
          {dados.map((item, index) => (
            <div 
              key={item.label}
              className={`flex justify-between border-b border-gray-300 py-3 ${index === 0 ? 'border-t' : ''}`}
            >
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              <span className="text-sm font-medium text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}