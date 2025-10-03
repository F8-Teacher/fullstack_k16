//Các phương thức xử lý mảng
console.log(Array.prototype);

//1. Kiểm tra biến có phải là mảng không?
//Array.isArray(bienMang)
// const myArr = [];
// console.log(Array.isArray(myArr));

//2. length --> Lấy số lượng phần tử của mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.length = 2;
// console.log(myArr.length);
// console.log(myArr);

//3. concat(arr1, arr2, arr3,...) --> Nối tất cả các mảng lại và trả về mảng mới
// const myArr = [1, 2, 3];
// const arr1 = [4, 5, 6];
// const arr2 = ["Item 1", "Item 2", "Item 3"];
// const newArr = myArr.concat(arr1, arr2);
// const newArr = myArr.concat("new item", "new item 2", 55);
// console.log(newArr);
// console.log(myArr);

//4. indexOf(value) --> Tìm value có tồn tại trong mảng không và trả về index đầu tiên tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.indexOf("Item 2"));

//5. lastIndexOf(value) --> Tìm value có tồn tại trong mảng không và trả về index cuối cùng tìm được
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.lastIndexOf("Item 2"));

//6. includes(value) --> Tìm phần tử trong mảng và trả về true / false
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr.includes("Item 2"));

//7. slice(start, end) --> Cắt mảng từ start đến end-1 và trả về mảng mới
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr);

// console.log(myArr.slice(1, 3));
// console.log(myArr.slice(1));
// console.log(myArr.slice(-1));

//8. splice(index, count): Xóa count phần tử từ index (Thay đổi mảng ban đầu)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.splice(1, 0, "new item 1", "new item 2", "new item 3");
// console.log(myArr);
// console.log(newArr);

//9. push(value1, value2, value3,...) --> Thêm nhiều phần tử vào cuối mảng
// - Thay đổi mảng ban đầu
// - Trả tổng số lượng phần tử sau khi đã thêm
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const count = myArr.push("new item 1", "new item 2");
// console.log(myArr);
// console.log(count);

//10. unshift(value1, value2, value3,...) --> Thêm nhiều phần tử vào đầu mảng
// - Thay đổi mảng ban đầu
// - Trả tổng số lượng phần tử sau khi đã thêm
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const count = myArr.unshift("new item 1", "new item 2");
// console.log(myArr);
// console.log(count);

//11. pop() --> Xóa phần tử cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const deleteValue = myArr.pop();
// console.log(myArr);
// console.log(deleteValue);

//12. shift() --> Xóa phần tử đầu mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const deleteValue = myArr.shift();
// console.log(myArr);
// console.log(deleteValue);

//13. fill(value) --> Cập nhật tất cả các phần tử thành 1 giá trị
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.fill(1);
// console.log(myArr);

//14. reverse() --> Đảo ngược mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.reverse();
// console.log(myArr);

//15. join(string) --> Nối các phần tử mảng thành 1 chuỗi
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.join("-"));

//Mối quan hệ với string
// const fullname = "Tạ Hoàng An"; //string
// const fullnameArr = fullname.split(" ");
// console.log(fullnameArr);

//Ví dụ đảo ngược số
// let number = 532064;
// let result = +number.toString().split("").reverse().join("");
// console.log(result);

//16. sort() --> Sắp xếp mảng theo thứ tự tăng dần (Sắp xếp theo chuỗi)
// const fruits = ["banana", "apple", "date", "cherry", "elderberry"];
// fruits.sort();
// console.log(fruits);

// const numbers = [5, 2, 1, 8, "100", 7, 10];
// numbers.sort(function (a, b) {
//   //   console.log(`a = ${a}`, `b = ${b}`);
//   //Nguyên tắc:
//   // - Nếu hàm này trả về giá trị âm --> Đổi chỗ a và b
//   // - b phần tử trước
//   // - a phần tử sau
//   //Muốn sắp xếp tăng dần
//   // - Tìm điều kiện: b > a
//   // - Đổi chỗ
//   //   if (b > a) {
//   //     return -1; //Trả về của hàm
//   //   }
//   return a - b;
// });
// console.log(numbers);

//Sắp xếp tên theo độ dài tăng dần
// const users = ["Khiêm", "Tuấn", "Sơn", "Anh", "An"];
// users.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(users);

//Bài tập:
// const arr1 = [5, 2, 9, 1, 8];
// const arr2 = [2, 5, 1, 10];

//Yêu cầu: Tìm giao giữa 2 mảng: [5, 2, 1]
// const newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.includes(arr1[i])) {
//     newArr.push(arr1[i]);
//   }
// }
// console.log(newArr);

// const numbers = [
//   [1, 2],
//   [3, 4],
// ];
// console.log(numbers);
// console.log(numbers[0][1]);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
//Yêu cầu: Chunk array theo size
//Output: [[1,2], [3,4], [5,6], [7,8], [9]]
// const newArr = [];
// for (let i = 0; i < numbers.length; i += size) {
//   let chunk = numbers.slice(i, i + size);
//   newArr.push(chunk);
// }
// const newArr2 = [[]];
//Ý tưởng: Đếm số lượng phần tử mảng con cuối cùng
//[[]] --> [[1]] --> [[1,2]]
//[[1,2], [3]] --> [[1,2], [3,4]]
// for (let i = 0; i < numbers.length; i++) {
//   if (newArr2[newArr2.length - 1].length < size) {
//     newArr2[newArr2.length - 1].push(numbers[i]);
//   } else {
//     newArr2.push([numbers[i]]);
//   }
// }
// console.log(newArr2);

//forEach(callback)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.forEach(function (value, index) {
//   console.log(value, index);
// });

//map(callback)
// - Duyệt giống như forEach
// - Trả về mảng mới có số lượng phần tử giống mảng ban đầu
// - Giá trị từng phần tử của mảng sẽ là return của callback
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.map(function (value, index) {
//   console.log(value, index);
//   return `${index}. ${value}`;
// });
// console.log(newArr);

//Ví dụ: Cho trước mảng numbers. Tạo mảng mới có số lượng giống mảng cũ. Tuy nhiên, phần tử nào là số chẵn thì nhân đôi
// const numbers = [5, 2, 7, 10, 15]; //[5, 4, 7, 20, 15]
// const newArr = numbers.map(function (number) {
//   if (number % 2 === 0) {
//     return number * 2;
//   }
//   return number;
// });
// console.log(newArr);

//filter(callback): Lọc dữ liệu theo điều kiện trong callback
//Nếu callback return về truthy --> thêm phần tử đó vào mảng mới
// const numbers = [5, 2, 7, 10, 15];
// const result = numbers.filter(function (value, index) {
//   //   console.log(value, index);
//   //   if (value % 2 === 0) {
//   //     return true;
//   //   }
//   //   return value % 2 === 0;
//   return index;
// });
// console.log(result);

//Ví dụ: Dùng filter để giải quyết bài toán tìm kiếm sau
// const users = [
//   "Tạ Hoàng An",
//   "Nguyễn Văn Sơn",
//   "Hoàng Anh Tuấn",
//   "Đặng Ngọc Sơn",
// ];
// let keyword = "an";
// //Output: ['Nguyễn Văn Sơn', 'Đặng Ngọc Sơn']
// const result = users.filter(function (value) {
//   return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
const newArr = myArr.filter(function (value, index) {
  //   console.log(myArr.indexOf(value), index);
  return myArr.indexOf(value) === index;
});
console.log(newArr);

// ((value) => {
//   console.log(value);
// })("F8");

//Tìm hiểu trước:
// - find
// - findLast
// - findIndex
// - findLastIndex
// - some
// - every
// - reduce
// - flat
