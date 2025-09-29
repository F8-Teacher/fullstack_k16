//Biết trước số lần lặp: for
//Không biết trước số lần lặp: while, do...while

//Cú pháp for
/*
for (giatrikhoitao; dieukienlap; buocnhay) {
    //khối lệnh được lặp
}
*/

//Vòng lặp tăng
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// //Vòng lặp giảm
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

//Vòng lặp lồng nhau
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log("i = " + i + ", j = " + j);
//   }
// }

//1. 100.000
//2. 200.000
//3. 400.000
//4. 1.600.000
// let total = 100000;
// for (let i = 1; i <= 4; i++) {
//   total = total * 2;
// }
// console.log(total);

//Tính giá trị biểu thức
//S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*4*...*n
// let n = 5;
// let temp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   //Tính i! và in ra trong vòng lặp
//   temp = temp * i;
//   //Cộng tất cả temp lại
//   total = total + temp;
// }
// console.log(total);

// let company = "F8";
// // let output = "Học lập trình tại " + company + " không khó";
// //backtick `` (Dưới ESC)
// let output = `<h1>Học lập trình tại ${company} không khó</h1>`;
// console.log(output);

// document.body.innerHTML = output;

//Bảng cửu chương
let heading1 = "";
let heading2 = "";
let row1 = "";
let row2 = "";
for (let i = 1; i <= 5; i++) {
  heading1 = heading1 + `<th>${i}</th>`;
  row1 = row1 + "<td>";
  for (let j = 1; j <= 10; j++) {
    row1 = row1 + `${i} x ${j} = ${i * j} <br/>`;
  }
  row1 = row1 + "</td>";
}
for (let i = 6; i <= 10; i++) {
  heading2 = heading2 + `<th>${i}</th>`;
  row2 = row2 + "<td>";
  for (let j = 1; j <= 10; j++) {
    row2 = row2 + `${i} x ${j} = ${i * j} <br/>`;
  }
  row2 = row2 + "</td>";
}
let html = `<table width="100%" border="1">
      ${heading1}
      <tr>
        ${row1}
      </tr>
      <tr>
        ${heading2}
      </tr>
      <tr>
        ${row2}
      </tr>
    </table>`;
document.body.innerHTML = html;
