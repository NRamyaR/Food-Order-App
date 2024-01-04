import { useEffect, useState, useRef } from "react";
const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 10;
  const ref = useRef(0);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("Rendering...");
    }, 1000);
    return () => clearInterval(i);
  }, []);
  console.log("y = " + y);
  console.log("Ref = " + ref.current);
  return (
    <div className="m-4 p-2 border border-black bg-slate-50">
      <div>
        <button
          className="bg-green-300 px-2 m-4  text-black"
          onClick={() => {
            x = x + 1;
            console.log("X = " + x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-lg  text-black">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-300 px-2 m-4 text-black "
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase State
        </button>
        <span className="font-bold text-lg  text-black">State = {y}</span>
        {console.log(x)}
      </div>
      <div>
        <button
          className="bg-green-300 px-2 m-4  text-black"
          onClick={() => {
            ref.current = ref.current + 1;
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-lg  text-black">
          Ref = {ref.current}
        </span>
        {console.log(x)}
      </div>
    </div>
  );
};

export default Demo2;
