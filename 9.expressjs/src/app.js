import express from "express";
const app = express();
app.use(express.json()); //Nhận body là json
app.use(express.urlencoded()); //Nhận body là form-urlendcoded
//http method get
app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>About</h1>`);
});

app.get("/users", (req, res) => {
  const query = req.query;
  console.log(query);
  res.json({
    success: true,
    message: "Get user success",
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    data: "Detail user: " + id,
  });
});

app.post("/users", (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(201).json({
    message: "Create user",
  });
});

app.listen(3000, () => {
  console.log(`Đang chạy server với url: http://localhost:3000`);
});

//http method:
//app.get()
//app.post()
//app.put()
//app.patch()
//app.delete()
