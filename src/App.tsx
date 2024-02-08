import { context } from "./context";
import CardsContainer from "./components/CardsContainer";

function App() {
  const fs = "text-2xl";

  return (
    <div className="flex justify-center">
      <context.Provider value={{ fontSize: fs }}>
        <CardsContainer />
      </context.Provider>
    </div>
  );
}

export default App;
