import ArganOil from "./assets/Argan Oil.jpeg";
import Eucalyptus from "./assets/Eucalyptus.jpg";
import TeaTree from "./assets/TeaTree.jpg";
import Unscented from "./assets/Unscented.jpeg";

export type Image =
  | typeof ArganOil
  | typeof Eucalyptus
  | typeof TeaTree
  | typeof Unscented;

export interface Data {
  id: number;
  image: Image;
  title: string;
  price: number;
  description: string;
}
