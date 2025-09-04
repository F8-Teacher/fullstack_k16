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

## Flex

### Các thuộc tính trong flex container

1. display: flex --> Kích hoạt flexbox

2. flex-direction --> Chọn hướng của trục main (Mặc định nằm ngang)

- row --> Ngằm ngang (Mặc định)
- row-reverse --> Nằm ngang, đảo ngược
- column --> Nằm dọc
- column-reverse --> Nằm dọc, đảo ngược

2. justify-content: Căn chỉnh các item theo hướng song song với trục main

- flex-start
- center
- flex-end
- space-around
- space-between
- space-evenly

3. align-items: Căn chỉnh các item theo hướng song song với trục cross

- stretch --> Mặc định
- flex-start
- center
- flex-end
- baseline

4. flex-wrap

- nowrap
- wrap
- wrap-reverse

5. gap: Điều chỉnh khoảng cách giữa các item

### Các thuộc tính trong flex item

1. flex-grow: Giãn item chỉ định để lấp đầy vị trí còn trống của container
   Cú pháp: flex-grow: number (Mặc định = 0)

2. flex-shrink: Ngược lại với flex-grow

Cú pháp: flex-shrink: number (Mặc định = 1)

3. flex-basis: Thiết lập kích ban đầu của item

flex-basis sẽ không chính xác nếu

- Có max-width, max-height
- Có max-height, min-height
- Có flex-shrink, flex-grow

4. order: Sắp các item theo thứ tự mong muốn

Cú pháp: order: number

## Position

Điều chỉnh vị trí của các phần tử

4 loại:

- Vị trí tương đối
- Vị trí tuyệt đối
- Cố định
- Tĩnh (Mặc định)

Cú pháp:

position: static | relative | absolute | fixed

Các thuộc tính trong position (Chỉ khả dụng khi có position khác static)

- top
- left
- right
- bottom
- z-index
- inset

## Transition

Lưu ý: Chỉ tác dụng với các thuộc tính có giá trị là số

Màu giá trị cũng là số

1. Thuộc tính transition-property

- Chọn thuộc tính css để cho phép áp dụng transition
- Mỗi thuộc tính cách nhau bởi dấu ,
- Có thể chọn tất cả bằng cách dùng giá trị all

Ví dụ:

```css
transition-property: width, color;
```

2. Thuộc tính transition-duration

- Chọn thời gian hoàn thành quá trình chuyển động
- Đơn vị: s, ms

3. Thuộc tính transition-delay

- Thời gian trễ trước khi chuyển động bắt đầu
- Đơn vị: s, ms

4. Thuộc tính transition-timing-function

- ease (Mặc định): Chuyển động chậm - nhanh - chậm
- ease-in: Chuyển động chậm - nhanh
- ease-out: Chuyển động nhanh - chậm
- ease-in-out: Chuyển động chậm - nhanh - chậm
- linear: Chuyển động đều
- cubic-bezier(): Tự thiết lập

5. Thuộc tính transition

transtion: property duration delay timing-function

Nếu muốn khai báo nhiều thuộc tính:

```css
transition-property: width, height;
transtion: 0.3s linear;
```

## Transform

- Thay đổi hình dạng ban đầu của phần tử html
- Tác dụng: xoay, ngiêng, phóng to / thu nhỏ, dịch chuyển

Cú pháp: transform: value

1. Xoay

- rotate(angle) --> Xoay phần tử theo trục Z
- rotateX(angle) --> Xoay phần tử theo trục X
- rotateY(angle) --> Xoay phần tử theo trục Y

Thuộc tính tách riêng: rotate: angle

2. Nghiêng

- skew(x, y) --> Nghiêng theo trục x và y
- skewX(value) --> Nghiêng theo trục x
- skewY(value) --> Nghiêng theo trục y

3. Phóng to / Thu nhỏ

- scale(x, y) --> phóng to / thu nhỏ theo trục x, y
- scaleX(value) --> phóng to / thu nhỏ theo trục x
- scaleY(value) --> phóng to / thu nhỏ theo trục y

Thuộc tính tách riêng: scale: x y;

4. Dịch chuyển

- translate(x, y) --> Dịch chuyển theo trục x, y (Không thay đổi bố cục ban đầu)
- translateX(value) --> Dịch chuyển theo trục X
- translateY(value) --> Dịch chuyển theo trục Y

Thuộc tính tách riêng: translate: x y

## Responsive Web Design

- Thiết kế web thích ứng
- Đảm bảo giao diện tương thích với tất cả thiết bị
- Nhận diện thiết bị thông qua kích thước màn hình (Chiều rộng)

- Hình thức khác để tạo giao diện trên thiết bị khác: Adaptive

1. Breakpoint

- Điểm tọa độ màn hình mà tại điểm đó giao diện sẽ bị thay đổi
- Không có các breakpoint cố định cho mọi dự án, mà chỉ có breakpoint phổ biến
- Các breakpoint phổ biến

* 1400px
* 1200px
* 992px -->
* 768px -->
* 576px

2. Meta Viewport

Thẻ meta được thêm thẻ head để xác định tỷ lệ của các phiên bản màn hình

3. Media Queries

- At-rule của CSS cho phép áp dụng các khối CSS với breakpoint chỉ định
- Cú pháp:

```css
@media sreen and (max-width: breakpoint) {
  selector {
    thuoctinh: giatri;
  }
}
```

Ví dụ:

```css
@media sreen and (min-width: 400px) and (max-width: 800px) {
  body {
    color: red;
  }
}
```

Áp dụng các breakpoint vào media queries

```css
@media screen and (max-width: 1399px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 1199.98px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 991.98px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 787.98px) {
  Selector {
    thuoctinh: giatri;
  }
}

@media screen and (max-width: 575.98px) {
  Selector {
    thuoctinh: giatri;
  }
}
```
