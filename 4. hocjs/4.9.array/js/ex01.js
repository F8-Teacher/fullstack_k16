//Mảng: Lưu trữ danh sách nhiều giá trị trong 1 biến
//Ví dụ: Danh sách học viên, danh sách sản phẩm,...
//2 phần:
// - Element --> Giá trị của phần tử
// - index --> Chỉ số để truy cập vào phần tử

//Khai báo mảng
const myArr = ["Sơn", "An", "Khiêm"];
console.log(myArr);

//Truy cập vào 1 phần tử theo index
console.log(myArr[1]);

//Cập nhật giá trị phần tử theo index
myArr[0] = "Nguyễn Văn Sơn";

//Thêm phần tử vào cuối mảng
myArr[myArr.length] = "Quốc";
myArr[myArr.length] = "Nam Khánh";

console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }

//for..in trả về index của array

// for (let index in myArr) {
//   console.log(myArr[index]);
// }

//for...of chỉ trả về element của array
// for (let element of myArr) {
//   console.log(element);
// }

//Ví dụ:
const numbers = [1, 2, 5, 9, 4, 8];
//Yêu cầu: Lấy tất cả số chẵn trong mảng numbers và thêm vào mảng mới
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];
  if (value % 2 === 0) {
    output[output.length] = value;
  }
}
console.log(output);

//array --> object --> string | number | boolean
