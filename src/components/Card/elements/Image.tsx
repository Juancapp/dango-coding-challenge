import { Image } from "../../../types";

function Image(props: { src: Image; alt: string }) {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
}

export default Image;
