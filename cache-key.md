# Đặt cache key sao cho hiệu quả

## Công thức

Công thức: Prefix:Version:Entity:Scope:Params

- Prefix: Tên dự án/service (ví dụ: blog)
- Version: Phiên bản cache (ví dụ: v1)
- Entity: Đối tượng chính (ví dụ: posts)
- Scope: Phạm vi của dữ liệu (ví dụ: list, detail,...)
- Params: Các biến định danh (ví dụ: id:101 hoặc page:1)

## Ví dụ

### Danh sách (list)

- Danh sách mặc định (Trang 1): blog:v1:posts:list:page_1_limit_10
- Danh sách theo Category (Ví dụ: Thể thao): blog:v1:posts:list:cat_sports_page_1
- Tìm kiếm theo từ khóa: blog:v1:posts:list:q_iphone_sort_price_desc
- Danh sách được lọc phức tạp (Dùng MD5 Hash cho Params): blog:v1:posts:list:hash_a1b2c3d4e5

### Quản lý version cho list

- blog:v1:posts:list_v1:page_1_limit_10
- blog:v1:posts:list_v1:cat_sports_page_1

### Chi tiết thực thể

- Chi tiết bài viết: blog:v1:posts:detail:id_101
- Thông tin User (Dùng Attribute để chia nhỏ)

* identity:v1:users:detail:id_55:profile
* identity:v1:users:detail:id_55:settings
