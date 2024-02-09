import { CardType } from "../types";

export interface ContextType {
  fontSize?: string;
  totalQuantity?: number;
  data?: (CardType & { quantity: number })[];
  setData?: React.Dispatch<
    React.SetStateAction<(CardType & { quantity: number })[]>
  >;
  setFontSize?: React.Dispatch<React.SetStateAction<string>>;
}
