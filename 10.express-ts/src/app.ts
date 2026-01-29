import express from "express";

const PORT: number = 3000;
const app = express();

import indexRoute from "./routes/index.route";

app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});
