import { useState } from "react";
import { context } from "./context";
import { data as mockedData } from "./data";
import { CardType } from "./types";
import CardsContainer from "./components/CardsContainer";

function App() {
  const fs = "text-2xl";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<(CardType & { quantity: number })[]>(
    mockedData.map((item) => ({ ...item, quantity: 0 }))
  );

  return (
    <div className="flex justify-center">
      <context.Provider value={{ fontSize: fs }}>
        <CardsContainer data={data} />
      </context.Provider>
    </div>
  );
}

export default App;
