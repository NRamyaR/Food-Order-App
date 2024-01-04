import { useEffect, useState } from "react";
import Demo2 from "./Demo2";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  //heavy opertaion

  return (
    <div
      className={`p-4 m-4 w-96 h-96 border border-black ${
        isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="m-10 p-2 bg-green-200"
        >
          Darktheme
        </button>
        <input
          type="text"
          className="border border-black w-72 px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div> */}

      <Demo2 />
    </div>
  );
};

export default Demo;
