# CSS

## Khái niệm

- CSS là ngôn định dạng cho trang html
- Tạo bố cục, màu sắc, kiểu chữ,...

## Cách thêm css vào html

Cách 1: Thêm trực tiếp thông qua thẻ style (Internal CSS)

```html
<style>
  Code CSS
</style>
```

Cách 2: Thêm thông qua file riêng (.css) (External CSS)

Liên kết vào html

```html
<link href="duong-dan-toi-file-css" rel="stylesheet" />
```

Cách 3: Thêm trực tiếp css vào thẻ html thông qua thuộc tính style (Inline CSS)

```html
<h1 style="code css">Nội dung</h1>
```

## Selector

--> Các cách để chọn đúng phần tử html mà chúng ta mong muốn

```css
selector {
  thuoctinh: giatri;
  thuoctinh: giatri;
  thuoctinh: giatri;
}
/*
Comment trong CSS
*/
```

1. id, class, tagname

- id --> #id
- class --> .class
- tagname --> tagname

2. Chọn toàn bộ tất cả các phần tử HTML

`*`

3. Selector kết hợp

3.1. Nằm trong

```css
selector1 selector2 selector3 {
  thuoctinh: giatri;
}
```

Lưu ý: Không giới hạn cấp

3.2. Cha con

```css
selector1 > selector2 > selector3 {
  thuoctinh: giatri;
}
```

Chọn cấp con gần nhất

3.3. Cùng cấp

```css
selector1selector2selector3 {
  thuoctinh: giatri;
}
```

Chọn phần tử html thỏa mãn các selector

3.4. Kế thừa

```css
selector1,
selector2,
selector3 {
  thuoctinh: giatri;
}
```

Các selector sẽ được áp dụng cùng các thuộc tính trong 1 khối

3.5. Ngang hàng (Không liền kề)

```css
selector1 ~ selector2 ~ selector3 {
  thuoctinh: giatri;
}
```

3.6. Ngang hàng (Liền kề)

```css
selector1 + selector2 + selector3 {
  thuoctinh: giatri;
}
```

4. Attribute (Thuộc tính)

- tagname[attribute] --> Chọn thẻ html có thuộc tính
- tagname[attribute="value"] --> Chọn thẻ html có thuộc tính khớp với giá trị
- tagname[attrbiute^="value"] --> Chọn thẻ html có thuộc tính bắt đầu bằng giá trị
- tagname[attrbiute$="value"] --> Chọn thẻ html có thuộc tính kết thúc bằng giá trị
- tagname[attrbiute*="value"] --> Chọn thẻ html có thuộc tính chứa giá trị (contains)

## Pseudo

### Pseudo Element

Cú pháp:

```css
selector::ten-phantu {
  thuoctinh: giatri;
}
```

- before
- after
- first-line
- first-letter
- selection
- placeholder

Lưu ý: before, after muốn hoạt động phải có thuộc tính content

### Pseudo Class

Cú pháp:

```css
selector:ten-lop {
  thuoctinh: giatri;
}
```

- hover
- active
- focus
- not
- checked
- disabled
- first-child
- last-child
- first-of-type
- last-of-type
- nth-child
- nth-of-type

## Các thuộc tính định dạng text

1. color

Thay đổi màu văn bản

2. font-size

Thay đổi cỡ chữ của văn bản

Đơn vị:

- Tuyệt đối: px
- Tương đối:

* em --> Tỷ lệ với font-size của phần tử cha
* rem --> Tỷ lệ với font-size của thẻ html
* vw (viewport width)
* vh (viewport height)
* %

3. line-height

- Thay đổi chiều cao của dòng văn bản
- Tỷ lệ với cỡ chữ của phần tử đó

4. font-family

- Thay đổi font chữ của văn bản
- Cú pháp: font-family: font1, font2,...

serif: Họ font có chân
sans-serif: Họ font không chân

5. font-weight

- Thiết lập độ dày của văn bản
- Giá trị: Bội số của 100 (Từ 100 đến 900), normal, bold

6. font-style

- normal
- italic

## Thuộc tính background

Thay đổi nền (màu, hình) của các phần tử html

1. backgroud-color

Thay đổi màu nền của phần tử

2. background-image

Cú pháp: background-image: url("duong-dan-anh")

3. background-repeat

Thay đổi cách lặp của background image

- repeat --> Lặp 2 trục
- repeat-x --> Lặp trục x
- repeat-y --> Lặp trục y
- no-repeat --> Không lặp

4. background-position

Thay đổi vị trí của hình nền

Cú pháp: background-position: x y

Mặc định: x = y = 0

x sẽ nhận các giá trị sau:

- left
- center
- right
- Giá trị phần trăm (Tỷ lệ theo chiều rộng của phần tử)

y sẽ nhận các giá trị sau:

- top
- center
- bottom
- Giá trị phần trăm (Tỷ lệ theo chiều cao của phần tử)

5. background-size

Tùy chỉnh kích thước của background

Cú pháp: background-size: x y

x: Kích thước chiều rộng
y: Kích thước chiều cao

2 giá trị đặc biệt:

- cover: Lấp kín kích thước của phần tử
- contain: Lấp kín tuy nhiên đảm bảo tỷ lệ gốc của ảnh --> Lấp kín hết được

6. background-attachment

Cố định hình nền khi kéo thanh cuộn

Cú pháp: background-attachment: scroll|fixed

7. background

Gộp các thuộc tính trên

background: color image repeat position / size attachment

## Box model

- Mô hình hộp cấu tạo css của 1 phần tử
- Trong box model sẽ có các thuộc tính

* padding
* border
* margin

Kích thước của box mặc định = content + padding + border

Muốn tùy lại cách tính kích thước, dùng box-sizing

### Thuộc tính border

border = width + style + color

- border-width
- border-style: none | solid | dotted | dashed | double
- border-color

Thuộc tính mở rộng

- border-{side}-width
- border-{side}-style
- border-{side}-color

side nhận các giá trị: top, left, right, bottom

- border-top-width
- border-left-width
- border-right-width
- border-bottom-width

- border-top-style
- border-left-style
- border-right-style
- border-bottom-style

- border-top-color
- border-left-color
- border-right-color
- border-bottom-color

Thuộc tính gộp

border: width style color
border-{side}: width style color

### Padding

- Khoảng cách giữa border và content
- Các thuộc tính

* padding-top
* padding-left
* padding-right
* padding-bottom
* padding

Lưu ý:

- padding-top và padding-bottom chỉ có tác dụng với thẻ block
- Nếu dùng đơn vị % --> Tỷ lệ theo width của thẻ cha
- Nếu dùng đơn vị em --> Tỷ lệ theo font-size của chính nó
- Không có giá trị âm

Thay đổi kiểu thẻ html --> Dùng thuộc tính display

display: none | block | inline | inline-block

inline-block là gì? --> Vừa có yếu tố inline, vừa có yếu tố block

- Nằm trên 1 dòng
- Kích thước chiều rộng mặc định vẫn theo nội dung
- Thay đổi được chiều rộng, chiều cao, padding-top, padding-bottom, margin-top, margin-bottom

### Margin

Căn lề (Ngoài border)

- Các thuộc tính

* margin-top
* margin-left
* margin-right
* margin-bottom
* margin

Lưu ý:

- margin-top và margin-bottom chỉ có tác dụng với thẻ block
- Nếu dùng đơn vị % --> Tỷ lệ theo width của thẻ cha
- Nếu dùng đơn vị em --> Tỷ lệ theo font-size của chính nó
- Có giá trị âm và auto

### Width, Height

- width: Thiết lập chiều rộng
- height: Thiết lập chiều cao

Lưu ý:

Chỉ áp dụng với block

Nếu dùng đơn vị % --> Tỷ lệ với kích thước của thẻ cha

Nếu dùng đơn vị vw --> Tỷ lệ với chiều rộng của khung nhìn (viewport)

Nếu dùng đơn vị vh --> Tỷ lệ với chiều cao của khung nhìn (viewport)

- min-width: Chiều rộng tối thiểu
- max-width: Chiều rộng tối đa
- min-height: Chiều cao tối thiểu
- max-height: Chiều cao tối đa

## Reset CSS

- Chuyển các css mặc định của trình duyệt về giá trị mong muốn
- padding, margin, box-sizing, border, outline

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  border: 0;
}
```
