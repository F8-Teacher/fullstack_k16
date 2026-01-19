// console.log("Hello anh em");
// console.log(window);
// console.log(localStorage.getItem("a"));

//Module
// - Mặc định: commonJS (require)
// - Có thể dùng ES Module
// const { a, b } = require("./modules/module1");
// console.log(a);
// console.log(b);

// import { a } from "./modules/module2.js";
// console.log(a);

// import path from "path";
// console.log(path);

//Để hỗ trợ ES Module trong nodejs
// - Dùng định dạng .mjs
// - Chuyển type của package.json --> module

// import moment from "moment";
// console.log(moment());

//Module có sẵn của nodejs
//1. path
// import path from "path";
// import { fileURLToPath } from "url";

//__filename --> Trả về đường dẫn tới file đang thực thi (Chỉ hoạt động ở CommonJS)
//__dirname --> Trả về đường dẫn tới folder chứa file đang thực thi (Chỉ hoạt động ở CommonJS)
//import.meta.url --> Trả về đường dẫn đẩy đủ tới file đang chạy (ES Module, có chứa cả giao thức file://)
// console.log(fileURLToPath());
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const demoPath = "/demo/db/test.json";
// console.log(path.dirname(demoPath));
// console.log(path.basename(demoPath));
// console.log(path.extname(demoPath));

//Ví dụ: Lấy folder của file đang chạy (__dirname), nối với demoPath
// const result = path.join(__dirname, "f8", demoPath);
// console.log(result);

//2. url
// import url from "url";
// const demoUrl =
//   "https://f8.edu.vn/fullstack-nodejs/discussions?limit=20&page=1";
// const parseUrl = url.parse(demoUrl);
// const parseUrl = new URL(demoUrl);
// console.log(parseUrl);

//3. file system (fs)

// import fs from "fs";
// import path from "path";
//Read
// const filePath = path.join(import.meta.dirname, "modules", "data", "data.txt");

// const data = fs.readFileSync(filePath, "utf-8");
// console.log(data);

// fs.readFile(filePath, "utf-8", (err, data) => {
//   console.log("err", err);
//   console.log(data);
// });

//Write
// fs.writeFileSync(filePath, "\nOk chưa?", {
//   flag: "a+",
// });

// fs.writeFile(
//   filePath,
//   "Ok chưa?",
//   {
//     flag: "a+",
//   },
//   (err) => {
//     console.log(err);
//   },
// );

//Delete
// fs.unlinkSync(filePath);

// const check = fs.existsSync(filePath);
// console.log(check);

// import fs from "fs/promises";
// (async () => {
//   const data = await fs.readFile(filePath, "utf-8");
//   console.log(data);
// })();

//4. http
import http from "http";
import url from "url";
const server = http.createServer((req, res) => {
  //req: Object nhận yêu cầu từ client gửi lên
  //   console.log("method", req.method);
  //   const urlParsed = url.parse(req.url);
  //   console.log(urlParsed);
  //   const userAgent = req.headers["user-agent"];
  //   console.log(userAgent);

  //res: Object trả về phản hồi cho client
  //   res.setHeader("x-api-key", "ahihi");
  //   res.statusCode = 404;
  //   res.write(`<h1>Hello anh em 3</h1>`);
  //   res.end(); //Dừng request
  const urlParsed = url.parse(req.url);
  res.setHeader("Content-Type", "application/json");
  let response = null;
  if (req.method === "OPTIONS" && urlParsed.pathname === "/users") {
    res.setHeader("Access-Control-Allow-Headers", "Authorization, x-api-key");
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.end();
  }
  if (urlParsed.pathname === "/" && req.method === "GET") {
    response = {
      success: true,
      message: "Home page",
    };
  }
  if (urlParsed.pathname === "/users" && req.method === "GET") {
    // console.log("request from client /users");
    res.setHeader("Access-Control-Allow-Origin", "*");
    response = {
      success: true,
      message: "Get user list success",
      data: [
        {
          id: 1,
          name: "User 1",
        },
        {
          id: 2,
          name: "User 2",
        },
      ],
    };
  }
  if (urlParsed.pathname === "/users" && req.method === "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*");

    response = {
      success: true,
      message: "Create users success",
    };
  }
  if (!response) {
    res.statusCode = 404;
    return res.end(
      JSON.stringify({
        message: "Not found",
        success: false,
      }),
    );
  }
  res.end(JSON.stringify(response));
});

server.listen(3000, () => {
  console.log(`Đang chạy server với url: http://localhost:3000`);
});

//cors (browser) -> forward proxy -->  back-end
