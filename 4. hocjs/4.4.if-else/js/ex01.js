//if else --> Câu lệnh rẽ nhánh
/*
if (dieukien) {
    Cau lenh
}

if (dieukien) {
    Cau lenh dung
} else {
    Cau lenh sai
}

if (dieukien1) {
    Cau lenh 1
} else if (dieukien2) {
    Cau lenh 2
} else if (dieukien3) {
    Cau lenh 3
} else {
    Cau lenh n
}

if (dieukieu1) {
    if (dieukien2) {
        Cau lenh 1
    } else {
        Cau lenh 2    
    }
} else {
    Cau lenh 3    
}
*/

// let age = 15;
// if (age >= 18) {
//   console.log("Bạn đã đủ tuổi");
// } else {
//   console.log("Bạn chưa đủ tuổi");
// }

// let age = -1;
// if (age < 0) {
//   console.log("Sai điều kiện");
// } else if (age < 3) {
//   console.log("Trẻ sơ sinh");
// } else if (age < 12) {
//   console.log("Trẻ chưa trưởng thành");
// } else if (age < 18) {
//   console.log("Trẻ vị thành niên");
// } else if (age < 40) {
//   console.log("Thanh niên");
// } else if (age < 60) {
//   console.log("Trung niên");
// } else {
//   console.log("Người già");
// }

//Bài tập: Cho trước lương cơ bản 1 nhân viên. Yêu cầu tính lương thực nhận sau khi trừ thuế

//Bảng thuế:
//<= 5tr --> Thuế 0%
//5tr < Lương <= 10tr --> Thuế 3%
//10tr < Lương <= 15tr --> Thuế 5%
//> 15tr --> Thuế 7%

//Công thức: luongthucnhan = luongcoban - (luongcoban * thue / 100)
// let salary = -6000000;
// let income; //Chứa lương thực nhận
// let tax; //Chứa tỷ lệ thuế
// if (salary < 0) {
//   console.log("Không hợp lệ");
// } else {
//   if (salary <= 5000000) {
//     tax = 0;
//   } else if (salary <= 10000000) {
//     tax = 3;
//   } else if (salary <= 15000000) {
//     tax = 5;
//   } else {
//     tax = 7;
//   }
//   income = salary - (salary * tax) / 100;
//   console.log("Lương thực nhận:", income);
// }

//Bài tập: Tính tiền taxi khi biết số km
// - Số km <= 1: Giá 15.000
// - 1 < số km <= 5: Giá 13.500
// - Số km > 5: Giá 11.000
// - Số km > 120: Giảm 10% trên tổng tiền

//Ví dụ: Đi 6km
//Số tiền phải trả = 1*15000 + 4*13500 + 1*11000

const PRICE_1 = 15000;
const PRICE_2 = 13500;
const PRICE_3 = 11000;
const DISCOUNT = 10;
const DISTANCE_1 = 1;
const DISTANCE_2 = 5;
const DISTANCE_3 = 120;
let km = 150;
let total;
if (km < 0) {
  console.log("Không hợp lệ");
} else if (km <= DISTANCE_1) {
  total = DISTANCE_1 * PRICE_1;
} else if (km <= DISTANCE_2) {
  total = DISTANCE_1 * PRICE_1 + (km - DISTANCE_1) * PRICE_2;
} else {
  total =
    DISTANCE_1 * PRICE_1 +
    (DISTANCE_2 - DISTANCE_1) * PRICE_2 +
    (km - DISTANCE_2) * PRICE_3;
  if (km > DISTANCE_3) {
    total = total - (total * DISCOUNT) / 100;
  }
}
if (total) {
  console.log(total);
}
