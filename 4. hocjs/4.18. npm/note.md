# Câu chuyện ngày xưa

Download thư viện -> Copy vào folder project --> Gọi file tương ứng

## Vấn đề

- Cài đặt: Phức tạp
- Cập nhật: Lên trang chủ -> download -> ghi đè
- Xóa: Xóa code, xóa file thư viện
- Di chuyển: Source nặng
- Không tự động hóa được

## Giải pháp

- Công cụ quản lý gói (package manager)
- Mỗi ngôn ngữ lập trình sẽ có các công cụ khác nhau

* js: npm, yarn,...
* php: composer
* python: pip

Thực thi bằng lệnh

Khi khởi tạo: Có file cấu hình (Lưu trữ các package)

## Khởi tạo dự án với npm

```
npm init -y
```

## Cài đặt thư viện

1. Cài bản mới nhất

```
npm i tenthuvien
```

2. Cài đặt theo phiên bản chỉ định

```
npm i tenthuvien@phienban
```

3. Cài đặt ở chế độ toàn cục

```
npm i tenthuvien -g
npm i tenthuvien@phienban -g
```

4. Cài đặt ở chế độ phát triển (dev)

```
npm i tenthuvien --save-dev
npm i tenthuvien@phienban --save-dev
```

5. Cài đặt tất cả thư viện (dependencies)

```
npm i
```

6. Chỉ cài đặt các dependencies ở môi trường production

```
npm i --production
```

## Gỡ thư viện

```
npm uninstall tenthuvien
```

## Cập nhật

```
npm update tenthuvien --> Lên bản mới nhất (Cập nhật 2 số sau của phiên bản)
npm update tenthuvien@phienban
npm update --> Update tất cả thư viện
```

Khi chạy lệnh update xong --> Update lai package-lock.json
