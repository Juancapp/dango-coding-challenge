import { useContext } from "react";
import { context } from "../../../context";

function Title({ title }: { title: string }) {
  const userContext = useContext(context);

  return <h1 className={`font-bold mb-2 ${userContext.fontSize}`}>{title}</h1>;
}

export default Title;
