import { CardType } from "../types";
import Card from "./Card";

function CardsContainer({
  data,
}: {
  data: (CardType & { quantity: number })[];
}) {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((card) => {
        return (
          <Card
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
