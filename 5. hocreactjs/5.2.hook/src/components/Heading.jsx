import { use } from "react";
import { AppContext } from "../ReactContext";

export default function Heading() {
  const { message, setMessage } = use(AppContext);

  return (
    <div>
      <h2>F8 - Học React</h2>
      <h3>{message}</h3>
      <button onClick={() => setMessage("Học React làm gì?")}>
        Change Message
      </button>
    </div>
  );
}

//const a = () => {}
//const b = a;
//const c = b;
//c()
