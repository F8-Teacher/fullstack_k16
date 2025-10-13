//Bài 1
// const users = [
//   { name: "An", age: 25 },
//   { name: "Bình", age: 30 },
//   { name: "Chi", age: 22 },
// ];

// //1.
// users.forEach((user) => {
//   console.log(user.name);
// });

// //2.
// const oldest = users.reduce((acc, cur) => {
//   if (acc.age < cur.age) {
//     return cur;
//   }
//   return acc;
// });
// console.log(oldest);

// //3.
// const avgAge =
//   users.reduce((acc, cur) => {
//     return acc + cur.age;
//   }, 0) / users.length;
// console.log(avgAge);

//Bài 2:
// const products = [
//   { name: "Laptop", price: 15000000 },
//   { name: "Mouse", price: 250000 },
//   { name: "Keyboard", price: 800000 },
// ];
// //1:
// const names = products.map((product) => {
//   return product.name;
// });
// console.log(names);

// //2:
// const total = products.reduce((total, product) => {
//   return total + product.price;
// }, 0);
// console.log(total);

// //3:
// const result = products.filter((product) => {
//   return product.price > 1000000;
// });
// console.log(result);

//Bài 3:
// const students = [
//   { name: "Lan", scores: [8, 9, 7] },
//   { name: "Huy", scores: [6, 5, 7] },
//   { name: "Minh", scores: [9, 8, 10] },
// ];
// //1:
// const withAvg = students.map((student) => {
//   student = Object.assign({}, student);
//   student.avg =
//     student.scores.reduce((acc, cur) => {
//       return acc + cur;
//     }, 0) / student.scores.length;
//   return student;
// });
// console.log(withAvg);

// //2:
// const good = withAvg.filter((item) => {
//   return item.avg >= 8;
// });
// console.log(good);

// //3:
// const sorted = withAvg.slice(0).sort((a, b) => {
//   return b.avg - a.avg;
// });
// console.log(sorted);

//Bài 4:
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
    comments: [
      { user: "Chi", text: "Cảm ơn chia sẻ" },
      { user: "An", text: "Ok chưa?" },
    ],
  },
];

//1:
posts.forEach((post) => {
  console.log(`${post.title} (${post.comments.length} comments)`);
});

//2:
const tags = [];
posts.forEach((post) => {
  post.tags.forEach((tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
    }
  });
});
console.log(tags);

//3:
const comments = [];
posts.forEach((post) => {
  post.comments.forEach((comment) => {
    if (comment.user === "An") {
      comments.push(comment);
    }
  });
});
console.log(comments);
