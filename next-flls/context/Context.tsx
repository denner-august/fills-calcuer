import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  usuario: {
    userAçõesQuantidade?: number;
    userPreçoAções?: number;
  };

  setUserAçõesQuantidade: (objeto: {
    userAçõesQuantidade?: number;
    userPreçoAções?: number;
  }) => void;

  ações: {
    QuantiCompraAções?: number;
    CompraPreçoAções?: number;
  };

  setAções: (objeto: {
    QuantiCompraAções?: number;
    CompraPreçoAções?: number;
  }) => void;

  mostraResult: boolean;

  setMostraResult: (result: boolean) => void;

  precoMedio: {
    quantidadeTotal: number;
    valorTotal: number;
    novoPrecoMedio: number;
  };

  setPrecoMedio: (objeto: {
    quantidadeTotal: number;
    valorTotal: number;
    novoPrecoMedio: number;
  }) => void;
}

interface childrenProps {
  children: ReactNode;
}

export const FllsContext = createContext({} as ContextProps);

export function FllsContextProvider({ children }: childrenProps) {
  const [mostraResult, setMostraResult] = useState(false);

  const [usuario, setUserAçõesQuantidade] = useState({});

  const [ações, setAções] = useState({});

  const [precoMedio, setPrecoMedio] = useState({
    quantidadeTotal: 0,
    valorTotal: 0,
    novoPrecoMedio: 0,
  });

  return (
    <FllsContext.Provider
      value={{
        usuario,
        ações,
        setUserAçõesQuantidade,
        setAções,
        mostraResult,
        setMostraResult,
        precoMedio,
        setPrecoMedio,
      }}
    >
      {children}
    </FllsContext.Provider>
  );
}
