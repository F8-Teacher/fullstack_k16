import path from "path";
const dbPath = import.meta.dirname;
console.log(path.resolve(dbPath, "..", "modules", "data", "db.json"));

// console.log(path.join("a", "b", "c"));
// console.log(path.resolve("a", "b", "c"));

//Lưu ý: Không tự thêm gạch chéo, gạch ngược vào đường dẫn
