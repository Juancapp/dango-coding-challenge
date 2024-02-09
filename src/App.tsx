import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import CardsContainer from "./components/CardsContainer";
import Range from "./components/Range";
import { useContext } from "react";
import { Context } from "./context";

function App() {
  const { totalQuantity } = useContext(Context);

  return (
    <div className="py-4 pr-3 flex flex-col gap-10 justify-center align-middle">
      <div className="flex flex-row gap-10 align-middle self-end">
        <div className="flex flex-row">
          <ShoppingCartIcon className="h-7 w-8 cursor-pointer" />
          <p className="bg-btn-bg-hover-color text-sm text-white font-semibold rounded-full px-2.5 h-7 flex items-center justify-center">
            {totalQuantity}
          </p>
        </div>
        <Range />
      </div>
      <CardsContainer />
    </div>
  );
}

export default App;
