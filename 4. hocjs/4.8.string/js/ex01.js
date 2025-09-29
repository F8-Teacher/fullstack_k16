//Chuỗi: Tập hợp các ký tự (Kiểu dữ liệu nguyên thủy)
// let fullname = "Tạ Hoàng An";
// let email = `hoangan.web@gmail.com`;
// console.log(fullname);
// console.log(email);

//Kiểm tra chuỗi
// if (typeof fullname === "string") {
//   console.log("Đây là chuỗi");
// }

//Phương thức, thuộc tính xử lý chuỗi
console.log(String.prototype);

//1. length: Lấy độ dài của chuỗi
// let str = "Hoàng An";
// console.log(str.length);

//2. charAt(index): Lấy ký tự theo index (index bắt đầu từ 0)
// let str = "Hoàng An";
// console.log(str.charAt(1));
// console.log(str[1]);

//3. charCodeAt(index): Lấy ký tự theo index và chuyển thành mã ASCII
// let str = "Hoàng An";
// console.log(str.charCodeAt(0));

//4. slice(start, end): Cắt chuỗi từ vị trí index đến end-1
// let str = "Học lập trình không khó";
// console.log(str.slice(1, 5));
// console.log(str.slice(1));
// console.log(str.slice(-5));

//5. indexOf(subStr): Tìm chuỗi con có trong chuỗi cha hay không? Nếu tìm trả về index đầu tiên tìm được, không tìm thấy trả về -1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.indexOf("F8"));

//6. lastIndexOf(subStr): Tìm chuỗi con có trong chuỗi cha hay không? Nếu tìm trả về index cuối cùng tìm được, không tìm thấy trả về -1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.lastIndexOf("F8"));

//7. includes(subStr): Tìm chuỗi con trong chuỗi tra, trả về true / false
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.includes("F88"));

//8. replace(search, with): Tìm và thay thế chuỗi đầu tiên tìm được
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.replace("F8", "F88"));

//9. replaceAll(search, with): Thay thế tất cả
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.replaceAll("F8", "F88"));

//10. toUpperCase(): Chuyển thành chữ hoa
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toUpperCase());

// 10. toLowerCase(): Chuyển thành chữ thường
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toLowerCase());

//11. trim(): Bỏ khoảng trắng đầu và cuối chuỗi
// let fullname = "  HOÀNG AN ";
// console.log(fullname);
// console.log(fullname.trim());

//12. trimStart(): Loại bỏ khoảng trắng đầu chuỗi
// let fullname = "  HOÀNG AN ";
// console.log(fullname);
// console.log(fullname.trimStart());

//13. trimEnd(): Loại bỏ khoảng trắng cuối chuỗi
// let fullname = "  HOÀNG AN ";
// console.log(fullname);
// console.log(fullname.trimEnd());

//14. repeat(number): Lặp chuỗi
// let str = "*";
// console.log(str.repeat(10));

//15. startsWith: Kiểm tra chuỗi con ở đầu chuỗi cha
// let pathname = "/admin/posts";
// console.log(pathname.startsWith("/admin"));

//16. endsWith: Kiểm tra chuỗi con ở cuối chuỗi cha

//17. match: Cắt chuỗi dựa vào biểu thức chính quy

// let content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. +84388875179 Unde magnam reprehenderit animi amet ad incidunt quibusdam, 0123456789 culpa dolores porro? Ea placeat eum commodi animi explicabo soluta minima corrupti! Laborum, quos?`;
// let pattern = /(\+84|0)\d{9}/g; //regular expression
// let result = content.match(pattern);
// console.log(result);

//Bài 1: Lấy username của email bất kỳ
// let email = "hoangan.web@gmail.com"; //hoangan
// const position = email.indexOf("@");
// const username = email.slice(0, position);
// console.log(username);

//Bài 2: Kiểm tra 1 chuỗi xem có phải tất cả đều viết HOA không?
// let fullname = "TẠ HOÀNG An";
// let fullnameUppercase = fullname.toUpperCase();
// if (fullname === fullnameUppercase) {
//   console.log("Hợp lệ");
// } else {
//   console.log("Không hợp lệ");
// }

//Bài 3: Chuẩn hóa họ tên
let fullname = "tạ hoàng an"; //Tạ Hoàng An

//Cách xử lý chuỗi:
//- Đoạn 1: Từ đầu đến trước vị trí cần xử lý
//- Đoạn 2: Vị trí cần xử lý
//- Đoạn 3: Sau vị trí cần xử lý

//B1: Chuyển ký tự đầu tiên của chuỗi thành chữ hoa
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

//B2: Tìm vị trí của ký tự bắt đầu mỗi từ (Dựa vào khoảng trắng)
for (let i = 0; i < fullname.length; i++) {
  const char = fullname.charAt(i);
  if (char === " ") {
    const position = i + 1; //Vị trí của ký tự cần chuyển thành chữ hoa
    //Đoạn 1: fullname.slice(0, position)
    //Đoạn 2: fullname.charAt(position).toUpperCase()
    //Đoạn 3: fullname.slice(position+1)
    fullname =
      fullname.slice(0, position) +
      fullname.charAt(position).toUpperCase() +
      fullname.slice(position + 1);
  }
}
console.log(fullname);
