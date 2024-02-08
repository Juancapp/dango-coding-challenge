import ArganOil from "./assets/Argan Oil.jpg";
import Eucalyptus from "./assets/Eucalyptus.jpg";
import TeaTree from "./assets/TeaTree.jpg";
import Unscented from "./assets/Unscented.jpg";
import { Data } from "./types";

const images = [ArganOil, Eucalyptus, TeaTree, Unscented];

const getRandomNumber = () => {
  const min = Math.ceil(10);
  const max = Math.floor(15);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomDescription() {
  let randomText = "";
  while (randomText.length < 120) {
    randomText += Math.random().toString(36).substring(2);
  }
  return randomText.substring(
    0,
    100 + Math.floor(Math.random() * (120 - 100 + 1))
  );
}

const toPushData = [];

for (let i = 0; i < 7; i++) {
  const pushData = {
    id: i,
    image: i <= 3 ? images[i] : images[i - 4],
    title: `Title example ${i}`,
    price: getRandomNumber(),
    description: getRandomDescription(),
  };

  toPushData.push(pushData);
}

export const data: Data[] = [...toPushData];
