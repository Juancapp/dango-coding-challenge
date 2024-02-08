import { useState } from "react";
import { CardType } from "../types";
import Card from "./Card";
import { data as mockedData } from "../data";

function CardsContainer() {
  const [data, setData] = useState<(CardType & { quantity: number })[]>(
    mockedData.map((item) => ({ ...item, quantity: 0 }))
  );

  const handleTitleChange = (title: string, id: number) => {
    setData(
      data.map((card) => {
        if (card.id === id) {
          return { ...card, title: title };
        } else {
          return { ...card };
        }
      })
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto px-[10%]">
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            price={card.price}
            description={card.description}
            image={card.image}
            quantity={card.quantity}
            onChange={handleTitleChange}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
