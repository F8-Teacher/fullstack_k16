`
https://f8.edu.vn/khoa-hoc/fullstack?search=nodejs

- https --> protocol /scheme
- f8.edu.vn --> domain
- khoa-hoc/fullstack --> path
- search=nodejs --> query string
  `

# HTML

## Thẻ block và thẻ inline

1. Thẻ block

- Chiều rộng mặc định tỷ lệ 100% so với chiều rộng của thẻ cha (Thẻ chứa nó)
- Luôn ở 1 hàng mới
- Chứa được các thẻ block và inline khác

2. Thẻ inline

- Chiều rộng mặc định theo nội dung
- Các thẻ inline đứng cạnh nhau nằm trên 1 hàng
- Không bọc được thẻ block (Trừ thẻ a)

## Các thẻ html trong nhóm block

1. Thẻ heading (Thẻ tiêu đề)

```html
<h1>Tiêu đề trang web</h1>
<h2>Tiêu đề trang web</h2>
<h3>Tiêu đề trang web</h3>
<h4>Tiêu đề trang web</h4>
<h5>Tiêu đề trang web</h5>
<h6>Tiêu đề trang web</h6>
```

2. Thẻ đoạn văn (p)

```html
<p>Nội dung đoạn văn</p>
<p>Nội dung đoạn văn</p>
<p>Nội dung đoạn văn</p>
<p>Nội dung đoạn văn</p>
```

3. Thẻ định dạng danh sách

3.1. Định dạng danh sách không theo thứ tự

```html
<ul>
  <li>Danh sách 1</li>
  <li>Danh sách 2</li>
  <li>Danh sách 3</li>
  <li>Danh sách 4</li>
</ul>
```

3.2. Định dạng danh sách theo thứ tự

```html
<ol>
  <li>Danh sách 1</li>
  <li>Danh sách 2</li>
  <li>Danh sách 3</li>
  <li>Danh sách 4</li>
</ol>
```

4. Thẻ phân chia khu vực (div)

- Nhóm các thẻ html khác thành 1 khu vực
- Phân chia bố cục trang web

Lưu ý:

- Không thay đổi định dạng ban đầu của các văn bản, các thẻ html khác
- Dùng nhiều để chia bố cục trang (Layout)

5. Thẻ trích dẫn (blockquote)

```html
<blockquote>Nội dung trích dẫn</blockquote>
```

6. Thẻ hr

```html
<hr />
```

Tạo đường kẻ ngang

7. Các thẻ thay thế thẻ div

- header: Thể hiện phần đầu trang web hoặc phần đầu của 1 card item
- footer: Thể hiện phần chân trang web hoặc phần chân của 1 card item
- nav: Thể hiện thanh điều hướng (menu)
- main: Phần thân của trang web (Sau header và trước footer)
- section: Thể hiện 1 phần trên 1 trang web
- article: Thể hiện 1 nội dung độc lập với các phần còn lại (Ví dụ: sản phẩm, bài viết, bình luận,...)
- aside: Thể hiện cột bên của trang web

## Các thẻ trong nhóm inline

1. Thẻ chèn liên kết (a = anchor)

```html
<a href="dia-chi-trang-web">Văn bản hiện thị</a>
```

Các thuộc tính khác:

- target: Mục tiêu khi mở trang web

* `_self`: Ở tab hiện tại
* `_blank`: Ở tab mới

- title: Hiển thị nội khi trỏ chuột

```
http://127.0.0.1:63782/1.%20hochtml/csc/cscscss/ex02.html

/note.md --> http://127.0.0.1:63782/note.md

https://vnexpress.net/khoa-hoc-cong-nghe/bo-khoa-hoc-va-cong-nghe

1. /khoa-hoc --> https://vnexpress.net/khoa-hoc

2. ./khoa-hoc --> https://vnexpress.net/khoa-hoc-cong-nghe/khoa-hoc

3. ../khoa-hoc --> https://vnexpress.net/khoa-hoc

https://hoanganit19.github.io/viedeli_k6/
https://hoanganit19.github.io/images/logo.png
```

2. Thẻ chèn hình ảnh (img)

```html
<img
  src="duong-dan-anh"
  width="chieu-rong"
  height="chieu-cao"
  alt="Van ban thay the"
  title="Tieu de khi tro chuot"
/>
```

3. Thẻ span (Thẻ định dạng kiểu)

- Không có ý nghĩa (non-semantic)
- Nó dùng để định dạng 1 kiểu khác mà vẫn giữ yếu tố inline (Trên dòng)

4. Thẻ in đậm, nghiêng, gạch chân, gạch ngang

- In đậm: b
- Nghiêng: i
- Ngạch chân: u
- Gạch ngang: s

5. Thẻ công thức toán học, hóa học

6. Table

- table --> Quy định bảng
- tr --> Quy định hàng
- td --> Quy định cột
- th --> Quy định cột (Với nội dung là tiêu đề)

table -> tr -> td

cellspacing: Khoảng cách giữa các ô trong bảng
cellpadding: Khoảng cách giữa ô với nội dung

7. Thẻ ngắt dòng: `<br/>`

8. Biểu mẫu (form)

- Thẻ form

* action: URL mà trình duyệt sẽ gửi request tới
* method: Phương thức gửi (Theo quy ước của http)
  ** get: Dữ liệu của form sẽ được đẩy lên url của action (Theo dạng query string)
  ** post: Không gửi dữ liệu lên url mà sẽ gửi ở dạng form data

Lưu ý: Trường phải có name để server nhận được dữ liệu

Các trường trong form

8.1. Thẻ input --> Rất nhiều trường hợp, thay đổi bằng thuộc tính type

- text: Mặc định, nhập cái gì cũng được
- email: Định dạng email
- number: Định dạng số
- date: Định dạng ngày - tháng - năm
- file: Chọn file
- radio: Lựa chọn (Chỉ chọn 1 trong 1 nhóm, dựa vào name)
- checkbox: Lựa chọn (Chọn nhiều)

  8.2. Thẻ select

  8.3. Thẻ textarea

Giá trị mặc định:

- Input nhập liệu: Dùng thuộc tính value
- Radio, Checkbox: Dùng thuộc tính checked
- Select option: Dùng thuộc tính selected ở thẻ option
- Textarea: Thêm vào phần nội dung của thẻ (Giữa mở và đóng thẻ)

  8.4. Thẻ button

- type: submit --> Gửi form (Mặc định)
- type: button --> Tạo hình cái button
- type: reset --> Xóa dữ liệu của form (Không nên dùng)

Tổng kết:

1. Nhập liệu 1 dòng

- input text, input email, input number

2. Nhập liệu nhiều dòng

- textarea

3. Lựa chọn

- file
- date
- radio
- checkbox
- select option

4. Nút

- button

Quy ước đặt id, class

- Chữ hoa, chữ thường, số, gạch ngang, gạch dưới, dấu :
- Không được bắt đầu bằng số
- Dùng danh từ
- Đặt tên bằng Tiếng Anh (Có ý nghĩa)

Với class:

- Đặt được nhiều class giống nhau trên 1 trang web (Mang tính kế thừa)
- Trong 1 thẻ html (Phần tử, element) có thể đặt nhiều class (Mỗi class cách nhau bởi khoảng trắng)
