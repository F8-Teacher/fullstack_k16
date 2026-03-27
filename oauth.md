# Các bước của OAuth

1. Lấy Authorization Grant (Code)

- Redirect về trang của đối tác

2. Lấy Access token

- Nhận Auth code từ bước 1
- Call api để lấy access token

3. Lấy tài nguyên cần

- Dùng access token của bước 2 để đổi lấy dữ liệu
