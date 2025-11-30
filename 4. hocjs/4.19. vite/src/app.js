import "./assets/main.css";
import moment from "moment";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import config from "./config.json";

export const App = () => {
  // console.log(config);
  console.log(import.meta.env.VITE_BACKEND_API);

  return `
  ${Header()}
    <main>
        <h1 class="text-3xl text-center text-red-700">Xin chào F8</h1>
        <h2>Thời gian: ${moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    </main>
    ${Footer()}
  `;
};
