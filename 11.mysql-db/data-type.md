# Các kiểu dữ liệu hay dùng

## Chuỗi

- char(n): Chuỗi có độ dài cố định
- varchar(n): Chuỗi có độ dài biến đổi
- text: Chuỗi không giới hạn độ dài (Giới hạn theo dung lượng)
- mediumtext
- longtext

## Số

- tinyint: Số nguyên có giá trị từ -128 đến
- smallint: Số nguyên có giá trị từ -32768 đến 32767
- mediumint:
- int
- bigint

- float --> Số thực
- double --> Số thực

## Thời gian

date: Kiểu ngày: Năm - Tháng - Ngày
datetime: Kiểu ngày, thời gian: Năm - Tháng - Ngày Giờ:Phút:Giây
timestamp: Giống datetime nhưng sẽ tự động convert về múi giờ UTC khi lưu vào database và tự động chuyển về múi giờ của Server khi đọc dữ liệu về
