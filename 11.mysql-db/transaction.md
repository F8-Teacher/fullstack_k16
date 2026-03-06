# Transaction

- Nhóm các lệnh sql được thực trên 1 đơn vị công việc
- Chỉ cần 1 lệnh không thỏa mãn điều kiện --> Hủy hết các lệnh còn lại

Ví dụ:

1. Trừ tiền 100.000 tài khoản A

2. Cộng 100.000 tài khoản B

--> rollback: khôi phục lại

Thứ tự chạy

- Backend khởi tạo transaction: START TRANSACTION
- Backend gửi lệnh trừ tiền: UPDATE accounts SET balance = balance - 100000 WHERE email = 'user1@gmail.com';
- Backend gửi lệnh cộng tiền: UPDATE accounts SET balance = balance + 100000 WHERE email = 'user2@gmail.com';
- Back-end kiểm tra xem user1@gmail.com còn tiền để trừ hay không?

* Nếu còn --> Gửi lệnh commit
* Nếu hết --> Gửi lệnh rollback để thu hồi
