import { useState } from "react";
import { CardType } from "../../types";
import Button from "./elements/Button";
import Description from "./elements/Description";
import Price from "./elements/Price";
import Title from "./elements/Title";
import { PencilIcon, CheckIcon } from "@heroicons/react/24/outline";

Card;

function Card(
  props: CardType & {
    quantity: number;
    onTitleChange: (title: string, id: number) => void;
    onQuantityChange: (quantity: number, id: number) => void;
  }
) {
  const {
    id,
    title,
    description,
    image,
    price,
    quantity = 0,
    onTitleChange,
    onQuantityChange,
  } = props;
  const [edit, setEdit] = useState<boolean>(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 3) {
      onTitleChange(e.target.value, id);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    while (e.target.value.charAt(0) === "0") {
      e.target.value = e.target.value.slice(1);
    }

    const quantity = Number(e.target.value);

    if (!isNaN(quantity)) {
      onQuantityChange(quantity, id);
    }
  };

  return (
    <div className="flex flex-col bg-white m-4 px-6 py-12 border-4 rounded-sm border-black sm:max-w-full gap-5 min-w-0">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded-xl object-cover object-center"
      />
      <div>
        <div className="flex gap-2 relative">
          <Title title={title} />
          <button
            className="absolute top-5 right-0 transform translate-x-[-50%] translate-y-[-50%]"
            onClick={() => setEdit(!edit)}
          >
            {!edit ? (
              <PencilIcon className="h-4 w-4 mb-4 cursor-pointer" />
            ) : (
              <CheckIcon className="h-4 w-4 mb-4 cursor-pointer" />
            )}
          </button>
        </div>
        {edit && (
          <input
            type="text"
            className="border-2 border-gray-300 px-2"
            onChange={handleTitleChange}
            value={title}
          />
        )}
      </div>
      <div className="flex gap-2 items-center">
        <Price price={price} />
        <input
          type="number"
          onChange={handleQuantityChange}
          value={quantity}
          className="border-2 border-gray-300 w-11 text-center"
        />
      </div>
      <Description description={description} />
      <Button />
      <a className="text-center text-lg cursor-pointer underline">Learn more</a>
    </div>
  );
}

export default Card;
