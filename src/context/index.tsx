import { createContext, useMemo, useState } from "react";
import { CardType } from "../types";
import { data as mockedData } from "../data";
import { ReactNode } from "react";

export const Context = createContext<{
  fontSize?: string;
  totalQuantity?: number;
  data?: (CardType & { quantity: number })[];
  setData?: React.Dispatch<
    React.SetStateAction<(CardType & { quantity: number })[]>
  >;
  setFontSize?: React.Dispatch<React.SetStateAction<string>>;
}>({
  fontSize: "text-2xl",
  totalQuantity: 0,
  data: [],
  setData: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<(CardType & { quantity: number })[]>(
    mockedData.map((item) => ({ ...item, quantity: 0 }))
  );
  const [fontSize, setFontSize] = useState("text-2xl");

  const totalQuantity = useMemo(() => {
    return data.reduce((total, item) => total + item.quantity, 0);
  }, [data]);

  const contextValue = { data, setData, fontSize, totalQuantity, setFontSize };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
