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
