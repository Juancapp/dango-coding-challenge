import { useContext } from "react";
import { Context } from "../context";

function Range() {
  const fontSizes = ["text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"];
  const { fontSize, setFontSize } = useContext(Context);

  const fontSizeToSliderValue = (fontSize: string) => {
    return fontSizes.indexOf(fontSize);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setFontSize && fontSize) {
      setFontSize(fontSizes[parseInt(e.target.value)]);
    }
  };

  return (
    <div className="flex gap-2 align-middle">
      <p className="font-bold">Font size:</p>
      <input
        type="range"
        min="0"
        max="4"
        value={fontSizeToSliderValue(fontSize!)}
        onChange={handleChange}
        className="slider w-32 self-center bg-btn-bg-color hover:bg-btn-bg-hover-color appearance-none h-3 rounded-full outline-none"
        style={{
          border: "2px solid black",
        }}
      />
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          background: #E6D7E1;
          border: 2px solid black;
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #E6D7E1;
          border: 2px solid black;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Range;
