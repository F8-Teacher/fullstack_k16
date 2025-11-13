//Bài 6

// const matches = [
//   { teamA: "A", teamB: "B", scoreA: 2, scoreB: 1 },
//   { teamA: "C", teamB: "D", scoreA: 1, scoreB: 3 },
//   { teamA: "A", teamB: "C", scoreA: 2, scoreB: 2 },
//   { teamA: "B", teamB: "D", scoreA: 0, scoreB: 1 },
//   { teamA: "A", teamB: "D", scoreA: 3, scoreB: 1 },
// ];

// //1:
// const getTeamResult = (matches) => {
//   const teams = {};
//   matches.forEach((match) => {
//     [match.teamA, match.teamB].forEach((item) => {
//       teams[item] = teams[item] || {
//         wins: 0, //Thắng
//         draws: 0, // Hòa
//         losses: 0, //Thua
//         points: 0, //Điểm
//         goals: 0, //Bàn thắng
//       };
//     });
//     teams[match.teamA].goals += match.scoreA;
//     teams[match.teamB].goals += match.scoreB;
//     if (match.scoreA > match.scoreB) {
//       teams[match.teamA].wins++;
//       teams[match.teamA].points += 3;
//       teams[match.teamB].losses++;
//     } else if (match.scoreA < match.scoreB) {
//       teams[match.teamB].wins++;
//       teams[match.teamB].points += 3;
//       teams[match.teamA].losses++;
//     } else {
//       teams[match.teamA].draws++;
//       teams[match.teamB].draws++;
//       teams[match.teamA].points++;
//       teams[match.teamB].points++;
//     }
//   });
//   return teams;
// };
// // console.log(getTeamResult(matches));

// //2:
// const getRanking = (matches) => {
//   const teams = getTeamResult(matches);
//   const teamsMap = Object.entries(teams).map((item) => {
//     return Object.assign(
//       {},
//       {
//         team: item[0],
//       },
//       item[1]
//     );
//   });
//   return teamsMap.sort((a, b) => {
//     return b.points - a.points;
//   });
// };

// console.log(getRanking(matches));

// //3.
// const getTopGoals = (matches) => {
//   return getRanking(matches).reduce((acc, cur) => {
//     return cur.goals > acc.goals ? cur : acc;
//   });
// };
// console.log(getTopGoals(matches));

//Bài 7:
const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

//1:
const groupedByProject = (employees) => {
  return employees.reduce((acc, cur) => {
    cur.projects.forEach((item) => {
      acc[item] = acc[item] || [];
      acc[item].push(cur.name);
    });
    return acc;
  }, {});
};
console.log(groupedByProject(employees));

// 2:
const getMaxProject = (employees) => {
  //   console.log(Object.entries(groupedByProject(employees)));
  return Object.entries(groupedByProject(employees)).reduce(
    (acc, cur) => {
      const projectName = cur[0];
      const list = cur[1];
      if (list.length > acc.count) {
        return {
          project: projectName,
          count: list.length,
        };
      }
      return acc;
    },
    {
      count: 0,
    }
  );
};
console.log(getMaxProject(employees));

//Bài 8:
// const reviews = [
//   { productId: "P1", userId: "U1", rating: 5 },
//   { productId: "P2", userId: "U2", rating: 4 },
//   { productId: "P1", userId: "U3", rating: 3 },
//   { productId: "P3", userId: "U1", rating: 4 },
//   { productId: "P2", userId: "U3", rating: 2 },
//   { productId: "P1", userId: "U2", rating: 4 },
// ];

// //1:
// const getReviewAvg = (reviews) => {
//   const grouped = reviews.reduce((acc, cur) => {
//     acc[cur.productId] = acc[cur.productId] || [];
//     acc[cur.productId].push(cur.rating);
//     return acc;
//   }, {});

//   return Object.entries(grouped).map((item) => {
//     const productId = item[0];
//     const ratingList = item[1];
//     return {
//       productId,
//       avg:
//         ratingList.reduce((acc, cur) => {
//           return acc + cur;
//         }, 0) / ratingList.length,
//     };
//   });
// };
// // console.log(getReviewAvg(reviews));

// //2:
// const getTopProduct = (reviews) => {
//   return getReviewAvg(reviews).reduce((acc, cur) => {
//     if (cur.avg > acc.avg) {
//       return cur;
//     }
//     return acc;
//   });
// };
// console.log(getTopProduct(reviews));

// //3:
// const getGroupedByProduct = (reviews) => {
//   return reviews.reduce((acc, cur) => {
//     acc[cur.productId] = acc[cur.productId] || [];
//     acc[cur.productId].push({
//       user: cur.userId,
//       rating: cur.rating,
//     });
//     return acc;
//   }, {});
// };
// console.log(getGroupedByProduct(reviews));

//Bài 9:
// const transactions = [
//   { id: 1, account: "A", type: "deposit", amount: 1000 },
//   { id: 2, account: "B", type: "withdraw", amount: 200 },
//   { id: 3, account: "A", type: "withdraw", amount: 500 },
//   { id: 4, account: "C", type: "deposit", amount: 700 },
//   { id: 5, account: "B", type: "deposit", amount: 300 },
// ];

// //1:
// const getBalance = (transactions) => {
//   return transactions.reduce((acc, cur) => {
//     acc[cur.account] = acc[cur.account] || 0;
//     acc[cur.account] += cur.type === "deposit" ? cur.amount : -cur.amount;
//     return acc;
//   }, {});
// };
// console.log(getBalance(transactions));

// //2:
// const getMaxAccount = (transactions) => {
//   return Object.entries(getBalance(transactions)).reduce(
//     (acc, cur) => {
//       const accountName = cur[0];
//       const balance = cur[1];
//       if (balance > acc.balance) {
//         return {
//           account: accountName,
//           balance,
//         };
//       }
//       return acc;
//     },
//     {
//       balance: 0,
//     }
//   );
// };
// console.log(getMaxAccount(transactions));

// //3:
// const getGroupedTransaction = (transactions) => {
//   return transactions.reduce((acc, cur) => {
//     acc[cur.account] = acc[cur.account] || [];
//     acc[cur.account].push(cur);
//     return acc;
//   }, {});
// };
// console.log(getGroupedTransaction(transactions));

//Bài 10
// const inventory = [
//   { item: "Laptop", type: "import", quantity: 10 },
//   { item: "Mouse", type: "import", quantity: 50 },
//   { item: "Laptop", type: "export", quantity: 4 },
//   { item: "Keyboard", type: "import", quantity: 20 },
//   { item: "Mouse", type: "export", quantity: 10 },
// ];

//1:
// const getStock = (inventory) => {
//   return inventory.reduce((acc, cur) => {
//     acc[cur.item] = acc[cur.item] || 0;
//     acc[cur.item] += cur.type === "import" ? cur.quantity : -cur.quantity;
//     return acc;
//   }, {});
// };
// console.log(getStock(inventory));

//2:
// const getMaxStock = (inventory) => {
//   return Object.entries(getStock(inventory)).reduce(
//     (acc, cur) => {
//       const item = cur[0];
//       const quantity = cur[1];
//       if (quantity > acc.quantity) {
//         return {
//           item,
//           quantity,
//         };
//       }
//       return acc;
//     },
//     { quantity: 0 }
//   );
// };
// console.log(getMaxStock(inventory));

//3:
// const getHistoryByItem = (inventory) => {
//   return inventory.reduce((acc, cur) => {
//     acc[cur.item] = acc[cur.item] || [];
//     acc[cur.item].push({
//       type: cur.type,
//       quantity: cur.quantity,
//     });
//     return acc;
//   }, {});
// };
// console.log(getHistoryByItem(inventory));
