//Make HTTP Request
// - XHR
// - Fetch

//fetch(url, options): Trả về promise

const baseUrl = "http://localhost:3000";
// fetch(`${baseUrl}/users`)
//   .then((response) => {
//     return response.json(); //Tự động parse từ json phía server về array, object
//     // return response.text(); //Trả về nguyên bản dữ liệu từ server
//   })
//   .then((data) => {
//     // const users = JSON.parse(data);
//     // console.log(users);
//     console.log(data);
//   });

// const getUsers = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/users`);
//     if (!response.ok) {
//       throw new Error("Fetch to failed");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUsers();

const createUser = async (data) => {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //chuyển object data thành json
  });
  const user = await response.json();
  console.log(user);
};

createUser({
  name: "Sơn",
  email: "son@gmail.com",
});
