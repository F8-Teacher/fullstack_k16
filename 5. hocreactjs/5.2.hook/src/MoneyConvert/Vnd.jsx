import { use } from "react";
import { MoneyContext } from "./MoneyConvert";

export default function Vnd() {
  const { vnd, onChangeVnd } = use(MoneyContext);
  return (
    <div>
      <label htmlFor="">Vnd</label>
      <input
        type="number"
        placeholder="Vnd..."
        value={vnd}
        onChange={onChangeVnd}
      />
    </div>
  );
}
