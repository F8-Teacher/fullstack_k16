//Switch case --> Câu lệnh rẽ nhánh chỉ chấp nhận so sánh ===
//Cú pháp
/*
switch (bieuthuc) {
   case giatri1: 
   case giatri2: 
   case giatri3:
    Khối lệnh 1
    break;
   
   case giatri4:
    Khối lệnh 2
    break;
    
   default: 
    Khối lệnh n
    break; 
}
*/
let action = "remove1";
switch (action) {
  case "create":
  case "add":
  case "insert":
    console.log("Thêm mới");
    break;
  case "update":
  case "edit":
    console.log("Cập nhật");
    break;
  case "delete":
  case "remove":
    console.log("Xóa");
    break;
  default:
    console.log("Không hợp lệ");
    break;
}
//Bài tập: Chuyển đoạn trên thành if else
if (action === "create" || action === "add" || action === "insert") {
  console.log("Thêm mới");
} else if (action === "update" || action === "edit") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}
