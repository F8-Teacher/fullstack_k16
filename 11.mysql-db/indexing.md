# Đánh index cho cột

index mặc định:

- primary key
- foreign key
- unique

Tìm kiếm dữ liệu của 1 bảng -> quét toàn bộ bảng

Thêm, sửa, xóa --> Lấy cột mà đánh index để lưu lại vào 1 nơi khác (Bảng index)

Nhược điểm

- Thao tác thêm, sửa, xóa bị chậm
- Tốn tài nguyên
- Nếu không phân tích kỹ --> Đánh index không có tác dụng, thậm chí còn chậm hơn

Đánh index gộp

```
SELECT * FROM users WHERE name = 'An' AND email = 'an@gmail.com'

SELECT * FROM posts WHERE content LIKE '%tukhoa%'
```

## Bài tập

Thiết kế cơ sở dữ liệu quan hệ cho blog cá nhân
