import { createContext, useContext, useState } from 'react';

const BuscaContext = createContext();

export const useBusca = () => useContext(BuscaContext);

export const BuscaProvider = ({ children }) => {
  const [buscaInstance, setBuscaInstance] = useState(null);

  return (
    <BuscaContext.Provider value={{ buscaInstance, setBuscaInstance }}>
      {children}
    </BuscaContext.Provider>
  );
};
