## Bài tập 1

Viết một hệ thống quản lý nhân viên gồm:

- Class Employee có các thuộc tính: name, age, salary và phương thức getInfo().
- Class Developer kế thừa từ Employee, thêm thuộc tính programmingLanguage.
- Class Manager kế thừa từ Employee, thêm thuộc tính employees (mảng các nhân viên mà họ quản lý).
- Manager có phương thức addEmployee(employee) để thêm nhân viên vào danh sách.

```js
class Employee {
  // Viết code ở đây
}

class Developer extends Employee {
  // Viết code ở đây
}

class Manager extends Employee {
  // Viết code ở đây
}

const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");

const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);

manager.getInfo();
// Output:
// Alice - Tuổi: 35 - Lương: 8000
// Quản lý nhân viên:
//  - John, Ngôn ngữ: JavaScript
//  - Jane, Ngôn ngữ: Python
```

## Bài tập 2

Viết một class Car và Bicycle, cả hai đều có phương thức move().
Sau đó, viết một hàm start(vehicle) chỉ nhận những object có phương thức move().

```js
class Car {
  // Viết code ở đây
}

class Bicycle {
  // Viết code ở đây
}

function start(vehicle) {
  if (typeof vehicle.move === "function") {
    vehicle.move();
  } else {
    console.log("Không thể di chuyển!");
  }
}

const car = new Car();
const bike = new Bicycle();

start(car); // Xe hơi đang chạy...
start(bike); // Xe đạp đang chạy...
start({}); // Không thể di chuyển!
```

## Bài tập 3

Cho trước mảng sau:

```js
const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 2.3",
    parent: 2,
  },
  {
    id: 7,
    title: "Menu 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    title: "Menu 2.2.2",
    parent: 5,
  },
];
```

Viết hàm đệ quy để chuyển mảng trên thành mảng sau:

```js
const nested = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
    children: [
      {
        id: 4,
        title: "Menu 2.1",
        parent: 2,
      },
      {
        id: 5,
        title: "Menu 2.2",
        parent: 2,
        children: [
          {
            id: 7,
            title: "Menu 2.2.1",
            parent: 5,
          },
          {
            id: 8,
            title: "Menu 2.2.2",
            parent: 5,
          },
        ],
      },
      {
        id: 6,
        title: "Menu 2.3",
        parent: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
];
```

Ví dụ:

```js
const result = getMenuTree(menus);
console.log(result); //Sẽ hiển thị mảng nested
```
