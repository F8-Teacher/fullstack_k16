//Bài 1

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
//   { id: 2, name: "Phone", category: "Electronics", price: 800 },
//   { id: 3, name: "Shirt", category: "Clothing", price: 40 },
//   { id: 4, name: "Shoes", category: "Clothing", price: 60 },
//   { id: 5, name: "Headphones", category: "Electronics", price: 150 },
// ];

//1.

// const filterProducts = (products, category) => {
//   return products.filter((product) => {
//     return product.category === category;
//   });
// };
// console.log(filterProducts(products, "Clothing"));

//2.
// const totalProducts = (products, category) => {
//   return filterProducts(products, category).reduce((acc, cur) => {
//     return acc + cur.price;
//   }, 0);
// };
// console.log(totalProducts(products, "Clothing"));

//3.
// const groupedByCategory = (products) => {
//   return products.reduce((acc, cur) => {
//     acc[cur.category] = acc[cur.category] || [];
//     acc[cur.category].push(cur);
//     return acc;
//   }, {});
// };
// console.log(groupedByCategory(products));

//Bài 2:

// const students = [
//   { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
//   { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
//   { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
// ];

//1.
// const avgScores = (students) => {
//   return students.map((student) => {
//     const scores = Object.values(student.scores);
//     const avg =
//       scores.reduce((acc, cur) => {
//         return acc + cur;
//       }, 0) / scores.length;
//     return Object.assign({}, student, { avg });
//   });
// };
// console.log(avgScores(students));

//2.
// const topStudent = (students) => {
//   return avgScores(students).reduce((acc, cur) => {
//     return cur.avg > acc.avg ? cur : acc;
//   });
// };
// console.log(topStudent(students));

//3.
// const sortedStudents = (students) => {
//   return avgScores(students).sort((a, b) => {
//     return b.avg - a.avg;
//   });
// };
// console.log(sortedStudents(students));

//Bài 3

// const orders = [
//   {
//     orderId: 101,
//     customer: "John",
//     items: [{ name: "Laptop", price: 1000, quantity: 1 }],
//   },
//   {
//     orderId: 102,
//     customer: "Alice",
//     items: [
//       { name: "Phone", price: 500, quantity: 2 },
//       { name: "Charger", price: 50, quantity: 3 },
//     ],
//   },
//   {
//     orderId: 103,
//     customer: "Bob",
//     items: [{ name: "Headphones", price: 200, quantity: 2 }],
//   },
// ];

//1.
// const getOrderTotal = (orders) => {
//   return orders.map((order) => {
//     const total = order.items.reduce((acc, cur) => {
//       return acc + cur.price * cur.quantity;
//     }, 0);
//     return Object.assign({}, order, { total });
//   });
// };
// console.log(getOrderTotal(orders));

//2.
// const getTopOrder = (orders) => {
//   return getOrderTotal(orders).reduce((acc, cur) => {
//     return cur.total > acc.total ? cur : acc;
//   });
// };
// console.log(getTopOrder(orders));

//3.
// const groupedItems = (orders) => {
//   const mergedItems = orders
//     .map((order) => {
//       return order.items;
//     })
//     .flat(Infinity);
//   return mergedItems.reduce((acc, cur) => {
//     acc[cur.name] = (acc[cur.name] || 0) + cur.quantity;
//     return acc;
//   }, {});
// };
// console.log(groupedItems(orders));

//Bài 4

// const employees = [
//   { id: 1, name: "Mai", department: "IT", salary: 1200 },
//   { id: 2, name: "Nam", department: "HR", salary: 800 },
//   { id: 3, name: "Hà", department: "IT", salary: 1500 },
//   { id: 4, name: "Linh", department: "Marketing", salary: 900 },
//   { id: 5, name: "Phúc", department: "IT", salary: 1100 },
// ];

//1:
// const getTotalSalaryByDept = (employees) => {
//   return employees.reduce((acc, cur) => {
//     acc[cur.department] = (acc[cur.department] || 0) + cur.salary;
//     return acc;
//   }, {});
// };
// console.log(getTotalSalaryByDept(employees));

//2:
// const getTopSalary = (employees) => {
//   return employees.reduce((acc, cur) => {
//     if (!acc[cur.department] || cur.salary > acc[cur.department].salary) {
//       acc[cur.department] = cur;
//     }
//     return acc;
//   }, {});
// };
// console.log(employees);

// console.log(getTopSalary(employees));

//3:
// const groupedByDept = (employees) => {
//   return employees.reduce((acc, cur) => {
//     acc[cur.department] = acc[cur.department] || [];
//     acc[cur.department].push(cur);
//     return acc;
//   }, {});
// };
// console.log(groupedByDept(employees));

//Bài 5

const watchHistory = [
  { userId: 1, videoId: "A1", duration: 10 },
  { userId: 2, videoId: "B1", duration: 15 },
  { userId: 1, videoId: "A1", duration: 20 },
  { userId: 3, videoId: "C1", duration: 30 },
  { userId: 2, videoId: "B1", duration: 5 },
  { userId: 1, videoId: "A2", duration: 25 },
  { userId: 3, videoId: "C1", duration: 15 },
];

//1:
// const getTotalByVideo = (watchHistory) => {
//   return watchHistory.reduce((acc, cur) => {
//     acc[cur.videoId] = (acc[cur.videoId] || 0) + cur.duration;
//     return acc;
//   }, {});
// };
// console.log(getTotalByVideo(watchHistory));

//2:
// const mostVideo = (watchHistory) => {
//   return Object.entries(getTotalByVideo(watchHistory)).reduce(
//     (acc, cur) => {
//       const videoId = cur[0];
//       const duration = cur[1];
//       if (acc.duration < duration) {
//         return {
//           videoId,
//           duration,
//         };
//       }
//       return acc;
//     },
//     {
//       duration: 0,
//     }
//   );
// };
// console.log(mostVideo(watchHistory));

//3:
const groupedByUser = (watchHistory) => {
  return watchHistory.reduce((acc, cur) => {
    acc[cur.userId] = acc[cur.userId] || {};
    acc[cur.userId][cur.videoId] =
      (acc[cur.userId][cur.videoId] || 0) + cur.duration;
    return acc;
  }, {});
};
console.log(watchHistory);

console.log(groupedByUser(watchHistory));
