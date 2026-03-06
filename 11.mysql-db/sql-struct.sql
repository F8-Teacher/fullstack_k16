-- Comment trong sql
-- Comment
-- Tạo Database
# CREATE DATABASE fullstack_k16;
-- Xem danh sách Database
# SHOW DATABASES;
-- Xóa database
# DROP DATABASE fullstack_k16;
-- Chọn database để làm việc
# use fullstack_k16;
-- Thêm dữ liệu vào bảng
# INSERT INTO users(name, email, status, created_at, updated_at)
# VALUES(
#        'User 3',
#        'user3@gmail.com',
#        true,
#        NOW(),
#        NOW()
# );
-- Hiển thị dữ liệu của bảng
# SELECT *
# FROM users;
#
# -- Cập nhật dữ liệu
# UPDATE users
# SET name = 'Hoàng An',
#     status = false,
#     updated_at = NOW()
# WHERE id = 1;
#
# -- Xóa dữ liệu
# DELETE FROM users WHERE id = 2;
-- Lọc dữ liệu
# SELECT * FROM users WHERE id != 3
# SELECT * FROM users WHERE id BETWEEN 3 AND 5;
# SELECT * FROM users WHERE id >= 3 AND id <= 5;
# SELECT * FROM users WHERE id IN (3,5)
# SELECT * FROM users WHERE created_at IS NULL
# SELECT * FROM users WHERE created_at IS NOT NULL
# SELECT * FROM users WHERE id NOT BETWEEN 3 AND 5;
# SELECT * FROM users WHERE id NOT IN (3,5)
# SELECT * FROM users
#          WHERE (name LIKE '%son%' OR email LIKE '%son%')
#                AND status=1
-- Sắp xếp
# SELECT * FROM users ORDER BY name, id DESC
-- Giới hạn, bỏ qua
# SELECT * FROM users ORDER BY id DESC LIMIT 3 OFFSET 1
-- inner join
# use fullstack_k16;
# SELECT users.*, phones.phone as phoneNumber
# FROM users
# INNER JOIN phones
# ON users.id = phones.user_id
-- left join
# SELECT users.*, phones.phone as phoneNumber
# FROM users
# LEFT JOIN phones
# ON users.id = phones.user_id
-- right join
# SELECT users.*, phones.phone as phoneNumber
# FROM users
# RIGHT JOIN phones
# ON users.id = phones.user_id
-- Ví dụ: Lấy danh sách các posts và tên user, email user, số điện thoại
# SELECT posts.*, users.name as username, users.email as userEmail,  phones.phone
# FROM posts
# INNER JOIN users
# ON users.id = posts.user_id
# LEFT JOIN phones
# ON users.id = phones.user_id
# ORDER BY posts.created_at DESC;
-- Bài tập: Lấy danh sách users (Đủ thông tin) của khóa học có tên chứa từ khóa "fullstack"
# SELECT users.*
# FROM users
# JOIN users_courses
# ON users.id = users_courses.user_id
# JOIN courses
# ON courses.id = users_courses.course_id
# WHERE courses.name LIKE '%back-end%';
-- Yêu cầu thêm: Lấy thêm số điện thoại
# SELECT users.*, phones.phone FROM users
# JOIN users_courses
# ON users.id = users_courses.user_id
# JOIN courses
# ON courses.id = users_courses.course_id
# LEFT JOIN phones ON phones.user_id = users.id
# WHERE courses.name LIKE '%back-end%'
-- Yêu cầu: Lấy thông tin khóa học có giá cao nhất của user có id = 1
# SELECT courses.*
# FROM users_courses
# JOIN courses
# ON courses.id = users_courses.course_id
# WHERE users_courses.user_id = 1
# ORDER BY courses.price DESC
# LIMIT 1;
-- --> sub query
-- HÀM TỔNG HỢP (Thường đi kèm với mệnh đề GROUP BY, HAVING)
-- COUNT(): Đếm hàng trong bảng
-- SUM(): Tính tổng
-- MAX(): Lớn nhất
-- MIN(): Nhỏ nhất
-- AVG(): Trung bình cộng
# SELECT count(id) as users_count FROM users WHERE status=1;
# SELECT count(id) AS users_count, status FROM users GROUP BY status HAVING users_count > 2
-- Tính tổng doanh thu của từng user
# SELECT SUM(courses.price), users.* FROM courses
# INNER JOIN users_courses
# ON courses.id = users_courses.course_id
# INNER JOIN users
# ON users.id = users_courses.user_id
# GROUP BY users.id
-- Đếm số lượng khóa học của từng users
# SELECT users.*, COUNT(users_courses.user_id) AS course_count
# FROM users
# LEFT JOIN users_courses
# ON users.id = users_courses.user_id
# GROUP BY users.id
# HAVING course_count < 2
# ORDER BY course_count;
#
# -- sub query, temp table
# DELETE FROM users_courses WHERE user_id IN (
#     SELECT id FROM (
#     SELECT users.*, COUNT(users_courses.user_id) AS course_count
# FROM users
# LEFT JOIN users_courses
# ON users.id = users_courses.user_id
# GROUP BY users.id
# HAVING course_count < 2
# ORDER BY course_count
#                ) as table_temp
#     )
-- Giả định tình huống
-- type: 0 - sản phẩm thường, 1 - sản phẩm bán chạy
-- Yêu cầu mới: thêm loại "Hàng mới về" => Bổ sung type = 2, Sắp xếp "Sản phẩm bán chạy" lên đầu tiên -> hàng mới về -> sản phẩm thường
# SELECT *,
# (CASE
#     WHEN (type = 1) THEN 0
#     WHEN (type = 2) THEN 1
#     ELSE 2
# END) as type_order
# FROM products
# ORDER BY type_order
-- Tạo thêm cột mới "discount_rate" trong câu lệnh truy vấn theo các điều kiện sau
-- Nếu giá > 1000 => Trả về giá trị "10%"
-- Nếu 500 < giá <= 1000 => Trả về giá trị "5%"
-- Nếu giá <=500 => Trả về 0
# SELECT
#     *,
#     (CASE
#         WHEN (price > 1000) THEN '10%'
#         WHEN (price > 500 AND price <= 1000) THEN '5%'
#         ELSE 0
#     END) AS discount_rate
# FROM products
-- Yêu cầu: Lấy thông tin danh sách khóa học có giá cao nhất của user có id = 1
# SELECT courses.*
# FROM users_courses
# JOIN courses
# ON courses.id = users_courses.course_id
# WHERE users_courses.user_id = 1
# ORDER BY courses.price DESC
# LIMIT 1;
SELECT users_courses.*,
    courses.*
FROM users_courses
    JOIN courses ON courses.id = users_courses.course_id
WHERE users_courses.user_id = 1
    AND courses.price = (
        SELECT MAX(courses.price)
        FROM users_courses
            JOIN courses ON courses.id = users_courses.course_id
        WHERE users_courses.user_id = 1
    );
-- B1: Tìm giá lớn nhất trong tất cả khóa học của user có id = 1
-- B2: Lấy tất cả các khóa học của user có id = 1 và giá = giá lớn nhất

START TRANSACTION;
UPDATE accounts SET balance = balance - 100000 WHERE email = 'user1@gmail.com'; -- Trừ tiền
UPDATE accounts SET balance = balance + 100000 WHERE email = 'user2@gmail.com';
-- lệnh kết thúc gọi COMMIT; --> Thực thi
-- Lệnh kết thúc gọi ROLLBACK; --> Hủy (Coi như không co hien tuong gi xay ra)
ROLLBACK;