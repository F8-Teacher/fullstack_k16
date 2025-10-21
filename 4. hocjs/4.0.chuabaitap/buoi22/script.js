//Bài 1:

// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   getInfo() {
//     console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
//   }
// }

// class Developer extends Employee {
//   constructor(name, age, salary, programmingLanguage) {
//     super(name, age, salary);
//     this.programmingLanguage = programmingLanguage;
//   }
//   getInfo() {
//     console.log(`${this.name}, Ngôn ngữ: ${this.programmingLanguage}`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, age, salary) {
//     super(name, age, salary);
//     this.employees = [];
//   }
//   addEmployee(employee) {
//     this.employees.push(employee);
//   }
//   getInfo() {
//     super.getInfo();
//     console.log("Quản lý nhân viên:");
//     this.employees.forEach((item) => {
//       console.log(` - ${item.name}, Ngôn ngữ: ${item.programmingLanguage}`);
//     });
//   }
// }

// const dev1 = new Developer("John", 28, 5000, "JavaScript");
// const dev2 = new Developer("Jane", 30, 5500, "Python");

// const manager = new Manager("Alice", 35, 8000);
// manager.addEmployee(dev1);
// manager.addEmployee(dev2);
// manager.getInfo();

// //Bài 2:
// class Car {
//   move() {
//     console.log("Xe hơi đang chạy...");
//   }
// }

// class Bicycle {
//   move() {
//     console.log("Xe đạp đang chạy...");
//   }
// }

// const start = (vehicle) => {
//   if (typeof vehicle.move === "function") {
//     vehicle.move();
//   } else {
//     console.log("Không thể di chuyển!");
//   }
// };

// const car = new Car();
// const bike = new Bicycle();
// start(car);
// start(bike);
// start({});

//Bài 3:
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
console.log(menus);

// const getMenuTree = (menus, parent = 0) => {
//   const result = [];
//   menus.forEach((menu) => {
//     if (menu.parent === parent) {
//       result.push(menu);
//       const children = getMenuTree(menus, menu.id);
//       if (children.length > 0) {
//         menu.children = children;
//       }
//     }
//   });
//   return result;
// };
const getMenuTree = (menus, parent = 0) => {
  return menus
    .filter((item) => item.parent === parent)
    .map((item) => {
      const children = getMenuTree(menus, item.id);
      if (children.length > 0) {
        // return Object.assign({}, item, { children });
        return { ...item, children };
      }
      //   return Object.assign({}, item);
      return { ...item };
    });
};
const nested = getMenuTree(menus);
console.log(nested);
