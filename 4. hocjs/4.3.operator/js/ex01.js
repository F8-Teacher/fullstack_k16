//Kiểu dữ liệu
//number --> Số
//string --> Chuỗi (Văn bnar)
//boolean --> Logic (true, false)
//object --> Đối tượng
//null
//undefined
//bigInt --> Số nguyên lưu trữ giá trị lớn (Khi number không lưu trữ được)
//symbol

//Cách kiểm tra kiểu dữ liệu --> Dùng từ khóa typeof hoặc hàm typeof()
// let age = 34;
// console.log(typeof age);

// let user = null;
// console.log(typeof user);

// let price = 12000n;
// console.log(typeof price);

//1. Toán tử số học
// Phép toán: +, -, *, /
// Chia lấy dư: %
// Lũy thừa: **
// Tăng 1 đơn vị: ++
// Giảm 1 đơn vị: --

// let a = "10";
// let b = 20;

// a = Number(a); //Ép biến a về kiểu số
// a = +a; //short hand
// let c = a + b;
// console.log(c);

// let a = 10;
// let b = 0;
// let c = a / b;
// console.log(c);

//Lưu ý: Trừ phép +, các phép toán khác trong số học sẽ tự động ép kiểu về kiểu số trước khi tính toán
//Nếu ép kiểu thất bại --> Trả về NaN (Not A Number)
// let a = 10;
// let b = "20a";
// let c = a * b;
// console.log(c);

//Chia lấy dư
// let a = 1.5 % 1;
// console.log(a);

//Lũy thừa
// let a = -(10 ** 3);
// console.log(a);

//Tăng, giảm 1 đơn vị
// let count = 0;
// count++;
// ++count;
// console.log(count);

// let total;
// let count = 1;
// total = ++count;
// console.log("total: ", total);
// console.log("count: ", count);

//Bài tập:
// let count = 1;
// let total = count++ + ++count; // 1 + 3
// console.log(total);

//2. Toán tử so sánh --> Luôn trả về boolean
// >, >=, <=, <=
// ==, ===
// !=, !==

//Lưu ý: Luôn sử dụng === và !==
// let a = 20;
// let b = "20";
// let c = a === b;
// console.log(c);

//So sánh chuỗi
// let str1 = "An";
// let str2 = "an";
// console.log(str1 > str2);

//3. Truthy, Falsy
// Falsy: Khi đặt 1 giá trị vào trong 1 biểu thức logic --> Giá trị đó tự động chuyển về false --> Falsy
//Các giá trị Falsy: 0, "", false, null, undefined, NaN
//Truthy: Khi đặt 1 giá trị vào trong 1 biểu thức logic --> Giá trị đó tự động chuyển về true --> Truthy

// let a = "";
// if (a) {
//   console.log("Đúng");
// } else {
//   console.log("Sai");
// }

//4. Toán tử luận lý (&&, ||, !)

// Cú pháp: bieuthuc1 && bieuthuc2 || bieuthuc3 || !bieuthuc4

// &&: Tìm falsy, nếu tìm thấy falsy --> Dừng lại và trả về giá trị falsy tìm được. Nếu không tìm thấy falsy --> Trả về giá trị của biểu thức cuối cùng

// ||: Tìm truthy, nếu tìm thấy truthy --> Dừng lại và trả về giá trị truthy tìm được. Nếu không tìm thấy truthy --> Trả về giá trị của biểu thức cuối cùng

// !: Chuyển về boolean --> Trả về giá trị ngược lại

// let a = 10;
// let result = a && 5 && 5 < 0 && 1 && "F8";
// console.log(result);

// let a = 10;
// let result = null || 0 || 5 < 0 || 10 || undefined;
// console.log(result);

// let a = 10;
// let result = !!a;
// console.log(result);

//5. Toán tử nullish (??)
//Cú pháp: a ?? b
let a;
let b = 20;
let result = a ?? b;
console.log(result);
