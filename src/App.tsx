import { useState } from "react";
import { context } from "./context";
import { data as mockedData } from "./data";
import { CardType } from "./types";
import CardsContainer from "./components/CardsContainer";

function App() {
  const fs = "text-8xl";
  const [data, setData] = useState<(CardType & { quantity: number })[]>(
    mockedData.map((item) => ({ ...item, quantity: 0 }))
  );

  return (
    <context.Provider value={{ fontSize: fs }}>
      <CardsContainer data={data} />
    </context.Provider>
  );
}

export default App;
