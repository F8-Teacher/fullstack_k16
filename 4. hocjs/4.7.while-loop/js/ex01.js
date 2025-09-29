//while: Lặp với số lần lặp không xác định trước (Kiểm tra điều kiện trước khi vào vòng lặp)

//do while: Lặp với số lần lặp không xác định trước (Kiểm tra điều kiện sau khi vào vòng lặp)

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 0);

//Ví dụ: Cho trước 1 số nguyên n, cần đếm xem số nguyên này chia hết cho 2 được bao nhiêu lần
//n = 500 -> 250 -> 125
// let n = 100000;
// let count = 0;
// while (n % 2 === 0) {
//   n = n / 2;
//   count++;
// }
// console.log(count);

//Cho trước số nguyên n, yêu cầu: Đảo ngược số nguyên và hiển thị kết quả (Không dùng xử lý chuỗi)
// let n = 532674; //476235
// let result = 0;
// while (n > 0) {
//   const temp = n % 10;
//   n = (n - temp) / 10;
//   result = result * 10 + temp;
// }
// console.log(result);

//Từ khóa:
//- break: Thoát vòng lặp
//- continue: Bỏ qua lần lặp --> Chạy đến lần lặp tiếp theo

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }
