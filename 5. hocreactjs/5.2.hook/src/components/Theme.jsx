import { use } from "react";
import Heading from "./Heading";
import { AppContext } from "../ReactContext";

export default function Theme() {
  const { message } = use(AppContext);
  return (
    <div>
      <Heading />
      <h3>{message}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        distinctio debitis laboriosam vero natus necessitatibus nam ipsum sit
        consequuntur nostrum veritatis fugit quas velit, sequi eius odit itaque
        architecto. Fugit?
      </p>
    </div>
  );
}
