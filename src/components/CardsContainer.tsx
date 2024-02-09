import { useContext } from "react";
import Card from "./Card";
import { Context } from "../context";

function CardsContainer() {
  const { data, setData } = useContext(Context);

  const handleTitleChange = (title: string, id: number) => {
    if (data && setData) {
      setData(
        data.map((card) => {
          if (card.id === id) {
            return { ...card, title };
          } else {
            return { ...card };
          }
        })
      );
    }
  };

  const handleQuantityChange = (quantity: number, id: number) => {
    if (data && setData) {
      setData(
        data.map((card) => {
          if (card.id === id) {
            return { ...card, quantity };
          } else {
            return { ...card };
          }
        })
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto px-[10%]">
      {data?.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            price={card.price}
            description={card.description}
            image={card.image}
            quantity={card.quantity}
            onTitleChange={handleTitleChange}
            onQuantityChange={handleQuantityChange}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
