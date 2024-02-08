import { context } from "./context";

function App() {
  const fs = "text-2xl";

  return <context.Provider value={{ fontSize: fs }}></context.Provider>;
}

export default App;
