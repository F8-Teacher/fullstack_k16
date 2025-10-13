## Bài 1

Cho trước mảng sau:

```js
const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];
```

Yêu cầu:

- In ra tên của tất cả người dùng.

- Tìm người có tuổi lớn nhất.

- Tính tuổi trung bình của tất cả người dùng.

## Bài 2

Cho trước mảng sau:

```js
const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];
```

Yêu cầu:

- Tạo mảng mới chỉ chứa tên sản phẩm.

- Tính tổng giá trị tất cả sản phẩm.

- Lọc ra sản phẩm có giá lớn hơn 1 triệu.

## Bài 3

Cho trước mảng sau

```js
const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];
```

Yêu cầu:

- Tính điểm trung bình của từng học sinh.

- Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).

- Sắp xếp học sinh theo điểm trung bình giảm dần.

## Bài 4

Cho trước mảng sau:

```js
const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];
```

Yêu cầu:

- In ra tất cả title kèm số lượng comments của từng bài viết.

- Tạo mảng mới chứa tất cả tags (không trùng lặp).

- Tìm tất cả các bình luận của user "An".
