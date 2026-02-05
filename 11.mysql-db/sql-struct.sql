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
SELECT * FROM users ORDER BY id DESC LIMIT 3 OFFSET 1