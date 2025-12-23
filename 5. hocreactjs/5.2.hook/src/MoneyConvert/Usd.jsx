import React, { use } from "react";
import { MoneyContext } from "./MoneyConvert";

export default function Usd() {
  const { usd, onChangeUsd } = use(MoneyContext);
  return (
    <div>
      <label htmlFor="">Usd</label>
      <input
        type="number"
        placeholder="Usd..."
        value={usd}
        onChange={onChangeUsd}
      />
    </div>
  );
}
