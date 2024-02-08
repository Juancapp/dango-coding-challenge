import { CardType } from "../types";
import Card from "./Card";

function CardsContainer({
  data,
}: {
  data: (CardType & { quantity: number })[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mx-auto px-40">
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
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
