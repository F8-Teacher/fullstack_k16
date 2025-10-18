## Bài 1

```js
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Lọc ra các sản phẩm thuộc danh mục "Electronics".
- Tính tổng giá của tất cả sản phẩm trong danh mục "Electronics".
- Chuyển đổi mảng sản phẩm thành một object, trong đó key là category, value là mảng các sản phẩm thuộc danh mục đó.

## Bài 2

```js
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính điểm trung bình của từng học viên.
- Tìm học viên có điểm trung bình cao nhất.
- Sắp xếp danh sách học viên theo điểm trung bình giảm dần.

## Bài 3

```js
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng tiền của từng đơn hàng.
- Tìm khách hàng có đơn hàng có tổng tiền cao nhất.
- Gộp danh sách tất cả các sản phẩm từ các đơn hàng, nhóm theo tên sản phẩm và tính tổng số lượng của mỗi sản phẩm.

## Bài 4

```js
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng lương của từng phòng ban.
- Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
- Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.

## Bài 5

```js
const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính tổng thời gian xem của từng video.
- Tìm video được xem nhiều nhất (dựa trên tổng thời gian).
- Nhóm lịch sử xem theo userId, trong đó mỗi userId sẽ chứa danh sách các video mà họ đã xem và tổng thời gian xem mỗi video.

## Bài 6

```js
const matches = [
  { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
  { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
  { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
  { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
  { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính số trận thắng, hòa, thua của mỗi đội.
- Xếp hạng các đội bóng theo số điểm, với quy tắc:

* Thắng: +3 điểm
* Hòa: +1 điểm
* Thua: +0 điểm

- Tìm đội có số bàn thắng nhiều nhất.

## Bài 7

```js
const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.
- Tìm dự án có nhiều nhân viên tham gia nhất.
- Chuyển đổi dữ liệu về dạng object, trong đó key là projectId, value là danh sách nhân viên thuộc dự án đó.

## Bài 8

```js
const reviews = [
  { productId: "P1", userId: "U1", rating: 5 },
  { productId: "P2", userId: "U2", rating: 4 },
  { productId: "P1", userId: "U3", rating: 3 },
  { productId: "P3", userId: "U1", rating: 4 },
  { productId: "P2", userId: "U3", rating: 2 },
  { productId: "P1", userId: "U2", rating: 4 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính điểm trung bình đánh giá của mỗi sản phẩm.
- Tìm sản phẩm có điểm trung bình cao nhất.
- Nhóm danh sách đánh giá theo productId, trong đó mỗi sản phẩm có danh sách đánh giá của từng người dùng.

## Bài 9

```js
const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính số dư cuối cùng của từng tài khoản.
- Tìm tài khoản có số dư cao nhất.
- Nhóm các giao dịch theo tài khoản, trong đó mỗi tài khoản có danh sách giao dịch của riêng nó.

## Bài 10

```js
const inventory = [
  { item: "Laptop", type: "import", quantity: 10 },
  { item: "Mouse", type: "import", quantity: 50 },
  { item: "Laptop", type: "export", quantity: 4 },
  { item: "Keyboard", type: "import", quantity: 20 },
  { item: "Mouse", type: "export", quantity: 10 },
];
```

Viết các hàm thực hiện các yêu cầu sau:

- Tính số lượng tồn kho của từng sản phẩm.
- Tìm sản phẩm có số lượng tồn kho cao nhất.
- Nhóm danh sách nhập xuất theo sản phẩm, trong đó mỗi sản phẩm có lịch sử nhập xuất riêng.
