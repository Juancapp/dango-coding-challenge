import { createContext } from "react";

export const context = createContext<{
  fontSize?: string;
}>({});
