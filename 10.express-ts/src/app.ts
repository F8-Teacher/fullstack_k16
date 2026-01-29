import express from "express";

const PORT: number = 3000;
const app = express();

app.use(express.json());

import indexRoute from "./routes/index.route";

app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

//Buổi sau:
// - Uploads file
// - Ejs
// - SQL (Cài trước docker)
