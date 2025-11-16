'use client';

import { useState, useEffect } from 'react';

// Armazenamento local da quilometragem por veículo
const quilometragemStorage: { [placa: string]: string } = {};

export function useQuilometragem(placa: string) {
  const [quilometragem, setQuilometragem] = useState<string>(() => {
    // Inicializar com valor padrão se não existir
    if (!quilometragemStorage[placa]) {
      quilometragemStorage[placa] = '129.300';
    }
    return quilometragemStorage[placa];
  });

  const atualizarQuilometragem = (novaQuilometragem: string) => {
    // Remove caracteres não numéricos e formata
    const apenasNumeros = novaQuilometragem.replace(/\D/g, '');
    let quilometragemFormatada = apenasNumeros;
    
    // Adiciona pontos para separar milhares
    if (apenasNumeros.length > 3) {
      quilometragemFormatada = apenasNumeros.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    
    setQuilometragem(quilometragemFormatada);
    quilometragemStorage[placa] = quilometragemFormatada;
  };

  const obterQuilometragemFormatada = () => {
    return `${quilometragem} KM`;
  };

  return {
    quilometragem,
    atualizarQuilometragem,
    obterQuilometragemFormatada
  };
}