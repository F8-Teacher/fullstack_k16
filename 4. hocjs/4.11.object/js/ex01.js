//Object:
// - Kiểu dữ liệu tham chiếu
// - Bao gồm các cặp key - value

//Đối tượng
// - Đặc điểm (Thuộc tính)
// - Hành động (Phương thức)

//Khai báo đối tượng
// const user = {
//   //key: value
//   name: "Hoàng An",
//   age: 33,
// };

//Truy cập vào key trong object
// console.log(user.name);
// console.log(user["age"]);

// const key = "age";
// console.log(user.key);
// console.log(user[key]); //Computed Property

//Thêm key vào object
// user.email = "hoangan.web@gmail.com";
// user["address"] = "Hà Nội";
// user["shipping-address"] = "Hồ Chí Minh";

// //Cập nhật giá trị của key
// user.name = "Hoàng An F8";

// //Xóa key
// delete user.address;

// console.log(user);

//Duyệt các key trong object
//1. Dùng for...in
// for (let key in user) {
//   const value = user[key];
//   console.log(key, value);
// }
//2. Dùng phương thức Object.keys(obj) --> Trả về 1 mảng chứa các key
// Object.keys(user).forEach((key) => {
//   console.log(key, user[key]);
// });

//Bài tập 1: Xóa các key không có giá trị trong object
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 0,
//   address: undefined,
//   position: "Teacher",
// };
// for (let key in user) {
//   const value = user[key];
//   if (!value && value !== 0) {
//     delete user[key];
//   }
// }
// console.log(user);

//Bài tập 2: Gộp 2 object dưới thành 1 object mới

/*
{
    name: "My name",
    email: "myemail@mail.com",
    age: 33,
    address: "Hà Nội",
}
*/
//Gợi ý:
// - Tạo object mới: {}
// - Duyệt qua object1 --> Thêm key và value của object1 vào object mới
// - Duyệt qua object2 --> Thêm key và value của object2 vào object mới
// const obj1 = {
//   name: "My name",
//   email: "myemail@mail.com",
// };
// const obj2 = {
//   age: 33,
//   address: "Hà Nội",
// };
// const obj3 = {};
// for (let key in obj1) {
//   const value = obj1[key];
//   obj3[key] = value;
// }
// for (let key in obj2) {
//   const value = obj2[key];
//   obj3[key] = value;
// }
// console.log(obj3);

//Các phương thức của object
//Constructor: Object
//1. Object.keys(obj) --> Trả về 1 mảng chứa các key của object
// const errors = {};
// const email = "hoangan.web@gmail.com";
// if (!email) {
//   errors.email = "Vui lòng nhập email";
// }
// if (Object.keys(errors).length === 0) {
//   console.log("Không có lỗi");
// } else {
//   console.log(errors);
// }

//2. Object.values(obj) --> Trả về 1 mảng chứa các value của object
// const myObj = {
//   name: "An",
//   email: "hoangan.web@gmail.com",
// };
// console.log(Object.values(myObj));

//3. Object.entries(obj) --> Trả về 1 mảng 2 chiều chứa cả key và object
// const myObj = {
//   name: "An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
// };
// const entries = Object.entries(myObj);

//4. Object.fromEntries(array) --> Chuyển dạng entries array sang object
// const myObj2 = Object.fromEntries([
//   ["name", "An"],
//   ["email", "hoangan.web@gmail.com"],
// ]);
// const myObj2 = Object.fromEntries(entries);
// console.log(myObj2);

//5. Object.assign(target, source1, source2,...): Nối các object source vào target và trả về object mới
// const obj1 = {
//   name: "My name",
//   email: "myemail@mail.com",
// };
// const obj2 = {
//   age: 33,
//   address: "Hà Nội",
// };
// const obj3 = {
//   x: 1,
//   y: 2,
// };
// const newObj = Object.assign({}, obj1, obj2, obj3);
// console.log(obj1);
// console.log(newObj);

//Bài tập:
// const query = {
//   keyword: "Khóa học Fullstack",
//   status: "active",
//   category: 1,
// };

//Chuyển thành chuỗi query string
//Output: keyword=Khóa+học+Fullstack&status=active&category=1
// const queryString = Object.entries(query)
//   .map((value) => {
//     return value.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

// let queryString = "";
// for (let key in query) {
//   const value = query[key];
//   queryString = `${queryString}${key}=${value}&`;
// }
// queryString = queryString.replaceAll(" ", "+").slice(0, -1);
// console.log(queryString);

const queryString =
  "keyword=Khóa+Fullstack&status=active&category=1&category=2&category=3";
/*
{
    keyword: "Khóa Fullstack",
    status: "active",
    category: [1,2]
}

//Case 2: keyword=Khóa+Fullstack&status=active&category=1
{
    keyword: "Khóa Fullstack",
    status: "active",
    category: 1
}
*/
console.log(queryString);

const array = queryString.split("&");
const query = {};
array.forEach((item) => {
  const itemArr = item.split("=");
  const key = itemArr[0];
  const value = itemArr[1];
  if (!query[key]) {
    query[key] = value;
  } else {
    //Kiểm tra và chỉ khởi tạo mảng 1 lần
    if (!Array.isArray(query[key])) {
      query[key] = [query[key]];
    }
  }
  if (Array.isArray(query[key])) {
    query[key].push(value);
  }
});
console.log(query);

let content = `Xin chào anh em F8 Anh em học lập trình tại F8 có vui không`;
//Từ Xin xuất hiện 1 lần
//Từ chào xuất hiện 1 lần
const words = content.split(" ");
const countObj = {};
words.forEach((word) => {
  if (!countObj[word]) {
    countObj[word] = 0;
  }
  countObj[word]++;
});
console.log(countObj);

//CMS = Content Management System
//API
//User
//Message Queue: Kafka, RabitMQ

//Quy trình:
// - Database
// - Viết API
// - Làm CMS
// - User

//Buổi sau:
// Từ khóa this
// Prototype
// Function Constructor
