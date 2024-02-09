import { useContext } from "react";
import { Context } from "../../../context";

function Title({ title }: { title: string }) {
  const userContext = useContext(Context);

  return (
    <h1 className={`font-bold mb-2 ${userContext.fontSize} inline-block`}>
      {title}
    </h1>
  );
}

export default Title;
