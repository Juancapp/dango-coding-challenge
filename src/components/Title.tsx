import { useContext } from "react";
import { context } from "../context";

function Title({ text }: { text: string }) {
  const userContext = useContext(context);

  return <h1 className={`font-bold ${userContext.fontSize}`}>{text}</h1>;
}

export default Title;
