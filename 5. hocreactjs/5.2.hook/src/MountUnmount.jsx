import { useState } from "react";
import Content from "./components/Content";

export default function MountUnmount() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Content />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}
