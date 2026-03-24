import express from "express";
import "dotenv/config";
import indexRoute from "./routes/index.route";
import path from "node:path";
// import "./workers/index.worker";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";
const PORT: number = 3000;
const app = express();

app.use(express.json()); //parse body là json
app.use(express.urlencoded()); //parse body là urlendcoded

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/media", express.static(path.join(__dirname, "uploads")));

app.use(indexRoute);

app.use(errorHandlingMiddleware);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

//Buổi sau:
// - Uploads file
// - Ejs
// - SQL (Cài trước docker)
