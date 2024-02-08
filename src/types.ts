import ArganOil from "./assets/Argan Oil.jpeg";
import Eucalyptus from "./assets/Eucalyptus.jpg";
import TeaTree from "./assets/TeaTree.jpg";
import Unscented from "./assets/Unscented.jpeg";

export type Image =
  | typeof ArganOil
  | typeof Eucalyptus
  | typeof TeaTree
  | typeof Unscented;

export interface CardType {
  id: number;
  image: {
    src: Image;
    alt: string;
  };
  title: string;
  price: number;
  description: string;
}
