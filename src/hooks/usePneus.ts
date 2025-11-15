'use client';

import { useState, useEffect } from 'react';

interface Pneu {
  id: number;
  nome: string;
}

// Armazenamento local dos pneus por veículo
const pneusStorage: { [placa: string]: Pneu[] } = {};

export function usePneus(placa: string) {
  const [pneus, setPneus] = useState<Pneu[]>(() => {
    // Inicializar com 3 pneus padrão se não existir
    if (!pneusStorage[placa]) {
      pneusStorage[placa] = [
        { id: 1, nome: 'NÚMERO DE FOGO 1' },
        { id: 2, nome: 'NÚMERO DE FOGO 2' },
        { id: 3, nome: 'NÚMERO DE FOGO 3' },
      ];
    }
    return pneusStorage[placa];
  });

  const adicionarPneu = () => {
    const novoId = Math.max(...pneus.map(p => p.id)) + 1;
    const novoPneu = { id: novoId, nome: `NÚMERO DE FOGO ${novoId}` };
    const novosPneus = [...pneus, novoPneu];
    
    setPneus(novosPneus);
    pneusStorage[placa] = novosPneus;
  };

  const removerPneu = (id: number) => {
    const novosPneus = pneus.filter(p => p.id !== id);
    setPneus(novosPneus);
    pneusStorage[placa] = novosPneus;
  };

  return {
    pneus,
    adicionarPneu,
    removerPneu
  };
}