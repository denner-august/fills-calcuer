import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  usuario: {
    userAçõesQuantidade: number;
    userPreçoAções: number;
  };

  setUserAçõesQuantidade: (objeto: {
    userAçõesQuantidade: number;
    userPreçoAções: number;
  }) => void;

  ações: {
    QuantiCompraAções: number;
    CompraPreçoAções: number;
  };

  setAções: (objeto: {
    QuantiCompraAções: number;
    CompraPreçoAções: number;
  }) => void;
}

interface childrenProps {
  children: ReactNode;
}

export const FllsContext = createContext({} as ContextProps);

export function FllsContextProvider({ children }: childrenProps) {
  const [usuario, setUserAçõesQuantidade] = useState({
    userAçõesQuantidade: 0,
    userPreçoAções: 0,
  });

  const [ações, setAções] = useState({
    QuantiCompraAções: 0,
    CompraPreçoAções: 0,
  });

  return (
    <FllsContext.Provider
      value={{ usuario, ações, setUserAçõesQuantidade, setAções }}
    >
      {children}
    </FllsContext.Provider>
  );
}