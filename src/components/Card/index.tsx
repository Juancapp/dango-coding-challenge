import { CardType } from "../../types";
import Button from "./elements/Button";
import Description from "./elements/Description";
import Price from "./elements/Price";
import Title from "./elements/Title";

Card;

function Card(props: CardType & { quantity: number }) {
  const { id, title, description, image, price, quantity = 0 } = props;

  return (
    <div className="flex flex-col bg-white m-4 px-6 py-12 border-4 rounded-sm border-black max-w-xs gap-5">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded object-cover object-center"
      />
      <Title title={title} />
      <div className="flex gap-2 align-middle">
        <Price price={price} />
        <input
          type="number"
          value={quantity}
          className="border-2 border-gray-300 w-11 text-center"
        />
      </div>
      <Description description={description} />
      <Button />
      <a className="text-center cursor-pointer underline">Learn more</a>
    </div>
  );
}

export default Card;
