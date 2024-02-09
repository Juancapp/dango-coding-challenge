import { createContext, useMemo, useState } from "react";
import { CardType } from "../types";
import { data as mockedData } from "../data";
import { ReactNode } from "react";
import { ContextType } from "./types";

export const Context = createContext<ContextType>({});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<(CardType & { quantity: number })[]>(
    mockedData.map((item) => ({ ...item, quantity: 0 }))
  );

  const [fontSize, setFontSize] = useState("text-2xl");

  const totalQuantity = useMemo(
    () => data.reduce((total, item) => total + item.quantity, 0),
    [data]
  );

  const contextValue = { data, setData, fontSize, totalQuantity, setFontSize };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
