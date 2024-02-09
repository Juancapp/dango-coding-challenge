import ArganOil from "./assets/Argan Oil.jpeg";
import Eucalyptus from "./assets/Eucalyptus.jpg";
import TeaTree from "./assets/TeaTree.jpg";
import Unscented from "./assets/Unscented.jpeg";
import { CardType } from "./types";

const images = [ArganOil, Eucalyptus, TeaTree, Unscented];

const toPushData = [];

// Edit the value of "i" to change the number of cards to be displayed
for (let i = 0; i < 7; i++) {
  const pushData = {
    id: i,
    image: {
      src: i <= 3 ? images[i] : images[i - 4],
      alt: `Title example ${i}`,
    },
    title: `Title example ${i}`,
    price: parseFloat((Math.random() * (15 - 10) + 10).toFixed(2)),
    description:
      "Recharge your skin with the super energizing power of finely crushed to tourmaline powder blended with natural complexion",
  };

  toPushData.push(pushData);
}

export const data: CardType[] = [...toPushData];
