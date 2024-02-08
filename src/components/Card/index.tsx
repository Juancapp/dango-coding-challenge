import { CardType } from "../../types";
import Button from "./elements/Button";
import Description from "./elements/Description";
import Price from "./elements/Price";
import Title from "./elements/Title";

Card;

function Card(props: CardType & { quantity: number }) {
  const { id, title, description, image, price, quantity = 0 } = props;

  return (
    <div key={id}>
      <Title title={title} />
      <img src={image.src} alt={image.alt} />
      <div>
        <Price price={price} />
        <input type="number" value={quantity} />
      </div>
      <Description description={description} />
      <Button />
      <p>Learn more</p>
    </div>
  );
}

export default Card;
