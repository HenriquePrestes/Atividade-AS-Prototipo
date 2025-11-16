"use client";

import { useState, FormEvent } from 'react';
import { 
  ListBulletIcon, 
  MinusIcon, 
  PlusIcon,
  PencilIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import { usePneus } from '@/src/hooks/usePneus';
import { useQuilometragem } from '@/src/hooks/useQuilometragem';

// Função helper para os botões de checkbox (só para o visual da imagem)
function CustomCheckbox({ label, defaultChecked = false }: { label: string, defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className="flex w-full items-center justify-between py-2">
      <span className="text-lg font-medium text-gray-700">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="h-7 w-7 rounded border-gray-400 text-green-500 accent-green-500 focus:ring-green-400" 
      />
    </label>
  );
}

interface CadastroPneuProps {
  placa?: string;
}

export default function CadastroPneu({ placa = 'DEFAULT' }: CadastroPneuProps) {
  
  const [pressao, setPressao] = useState(40);
  const [sulco, setSulco] = useState(2);
  const [posicao, setPosicao] = useState('traseiro-D');
  const [numeroFogo, setNumeroFogo] = useState('1');
  const [editandoQuilometragem, setEditandoQuilometragem] = useState(false);
  const [tempQuilometragem, setTempQuilometragem] = useState('');
  
  const { pneus } = usePneus(placa);
  const { quilometragem, atualizarQuilometragem, obterQuilometragemFormatada } = useQuilometragem(placa);

  const iniciarEdicaoQuilometragem = () => {
    setTempQuilometragem(quilometragem);
    setEditandoQuilometragem(true);
  };

  const salvarQuilometragem = () => {
    if (tempQuilometragem.trim()) {
      atualizarQuilometragem(tempQuilometragem);
    }
    setEditandoQuilometragem(false);
    setTempQuilometragem('');
  };

  const cancelarEdicaoQuilometragem = () => {
    setEditandoQuilometragem(false);
    setTempQuilometragem('');
  };

  const handleQuilometragemKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      salvarQuilometragem();
    } else if (e.key === 'Escape') {
      cancelarEdicaoQuilometragem();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Formulário de pneu enviado");
    console.log('posição selecionada:', posicao);
    console.log('numero de fogo selecionado:', numeroFogo);
    alert(`Pneu atualizado (simulação) com sucesso! Posição: ${posicao} - Nº Fogo: ${numeroFogo}`);
  };

  return (
    <div className="w-full max-w-lg rounded-xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="flex w-full items-center gap-3 rounded-lg border border-gray-400 bg-white p-4 shadow-sm">
          <ListBulletIcon className="h-6 w-6 text-gray-600" />
          <div className="flex-1">
            <label htmlFor="numero-fogo" className="sr-only">Número de fogo</label>
            <select
              id="numero-fogo"
              value={numeroFogo}
              onChange={(e) => setNumeroFogo(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              {pneus.map((pneu) => (
                <option key={pneu.id} value={pneu.id.toString()}>
                  {pneu.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">QUILOMETRAGEM</label>
          {editandoQuilometragem ? (
            <div className="mt-1 flex items-center gap-2">
              <input
                type="text"
                value={tempQuilometragem}
                onChange={(e) => setTempQuilometragem(e.target.value)}
                onKeyDown={handleQuilometragemKeyDown}
                placeholder="Digite a quilometragem"
                className="flex-1 rounded-lg border border-blue-400 bg-white p-3 text-center text-lg font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoFocus
              />
              <button
                type="button"
                onClick={salvarQuilometragem}
                className="rounded-lg bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                title="Salvar quilometragem"
              >
                <CheckIcon className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div 
              className="mt-1 flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-400 bg-gray-100 p-3 text-center text-lg font-medium text-gray-700 shadow-inner transition hover:bg-gray-200"
              onClick={iniciarEdicaoQuilometragem}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  iniciarEdicaoQuilometragem();
                }
              }}
            >
              <span className="flex-1">{obterQuilometragemFormatada()}</span>
              <PencilIcon className="h-5 w-5 text-gray-500" />
            </div>
          )}
          {editandoQuilometragem && (
            <p className="mt-1 text-xs text-gray-500">
              Pressione Enter para salvar ou Esc para cancelar
            </p>
          )}
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex flex-1 flex-col items-center">
            <label className="block text-sm font-medium text-gray-600">PRESSÃO</label>
            <div className="mt-2 flex items-center gap-2">
              <button type="button" onClick={() => setPressao(p => p - 1)} className="rounded-full bg-gray-200 p-1 text-gray-700 hover:bg-gray-300">
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="w-12 rounded-md border border-gray-400 bg-white py-1 text-center text-lg font-bold text-blue-600">
                {pressao}
              </span>
              <button type="button" onClick={() => setPressao(p => p + 1)} className="rounded-full bg-gray-200 p-1 text-gray-700 hover:bg-gray-300">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col items-center">
            <label className="block text-sm font-medium text-gray-600">PROFUNDIDADE DO SULCO</label>
            <div className="mt-2 flex items-center gap-2">
              <button type="button" onClick={() => setSulco(s => Math.max(0, s - 1))} className="rounded-full bg-gray-200 p-1 text-gray-700 hover:bg-gray-300">
                <MinusIcon className="h-5 w-5" />
              </button>
              <span className="w-12 rounded-md border border-gray-400 bg-white py-1 text-center text-lg font-bold text-blue-600">
                {sulco}
              </span>
              <button type="button" onClick={() => setSulco(s => s + 1)} className="rounded-full bg-gray-200 p-1 text-gray-700 hover:bg-gray-300">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-600">POSIÇÃO</label>
          <select
            value={posicao}
            onChange={(e) => setPosicao(e.target.value)}
            className="mt-1 w-48 rounded-lg border border-gray-400 bg-white py-2 px-3 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            <option value="Frontal-E">frontal-E</option>
            <option value="Frontal-D">frontal-D</option>
            <option value="Traseiro-E">traseiro-E</option>
            <option value="Traseiro-D">traseiro-D</option>
            <option value="Traseiro-E-1">traseiro-E-1</option>
            <option value="Traseiro-D-1">traseiro-D-1</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-x-10">
          <CustomCheckbox label="RODÍZIO" defaultChecked />
          <CustomCheckbox label="CONSERTO" defaultChecked />
          <CustomCheckbox label="RECAPAGEM" defaultChecked />
          <CustomCheckbox label="SUCATEADO" />
          <CustomCheckbox label="ESTOQUE" defaultChecked />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-cyan-400 py-3 px-10 text-lg font-bold text-white shadow-lg transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
        >
          ATUALIZAR
        </button>

      </form>
    </div>
  );
}