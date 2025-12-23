/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import Usd from "./Usd";
import Vnd from "./Vnd";
export const MoneyContext = createContext();
const USD_RATE = 26000;
export default function MoneyConvert() {
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);
  const handleChangeVnd = (e) => {
    setVnd(e.target.value);
    setUsd(e.target.value / USD_RATE);
  };
  const handleChangeUsd = (e) => {
    setUsd(e.target.value);
    setVnd(e.target.value * USD_RATE);
  };
  return (
    <MoneyContext.Provider
      value={{
        vnd,
        usd,
        onChangeVnd: handleChangeVnd,
        onChangeUsd: handleChangeUsd,
      }}
    >
      <Vnd />
      <Usd />
    </MoneyContext.Provider>
  );
}
