import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MeuProvider({ children }) {
  const [data, setData] = useState({
    titulo: 'Título padrão',
    descricao: 'Descrição padrão'
  });
  return (
    <main>
      <h1>Página Principal</h1>
      <p>Bem-vindo ao meu site!</p>
      <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
    </main>
    
  );
}