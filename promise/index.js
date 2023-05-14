// setTimeout(function() {
//   console.log(1);
// }, 1000)

// console.log(2);

// var promise = new Promise(function (resolve, reject) {
//Logic
//Thành công: resolve()
//Thất bại: reject()

//Fake call API
// resolve([
//   {
//     id: 1,
//     name: "Javascript",
//   },
// ]);
// resolve();
// reject("Not found 404"); // hàm reject or resolve return về giá trị gì thì hàm then, catch bên dưới nhận giá trị đó qua tham số res
// });

// promise
//   .then(function (res) {
//     // hàm resolve chạy thì trả về hàm then này
//     // console.log("Tải thành công khóa học:", res[0].name);
//     // return new Promise(function (resolve, reject) {
//     //   setTimeout(resolve, 3000);
//     // });

//     return new Promise(function (resolve) {
//       setTimeout(function() {
//         resolve([
//           1, 2, 3
//         ])
//       }, 3000);
//     });
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {
//     // hàm reject chạy thì trả lại hàm catch này
//     console.log("Tải thất bại error:", error);
//   })
//   .finally(function () {
//     // hàm resolve hay reject chạy thì đều trả về hàm finally này
//     console.log("Done");
//   });

// function sleep(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       return resolve([1, 2, 3]);
//     }, ms);
//   });
// }

// sleep(3000)
//   .then(function (res) {
//     {
//       console.log(1);
//       return sleep(1000);
//     }
//   })
//   .then(() => {
//     console.log(2);
//     return new Promise(function (resolve, reject) {
//       return reject("404");
//     });
//   })
//   .then(() => {
//     console.log(3);
//     return sleep(1000);
//   })
//   .catch((error) => {
//     return console.log("catch:", error);
//   });

// Promise.resolve
// Promise.reject
// Promise.all

// var promise = new Promise(function (resolve, reject) {
//   // resolve("Success");
//   reject("404");
// });

// var promise = Promise.resolve("ok");

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// var promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     return resolve([1]);
//   }, 2000);
// });

// var promise2 = new Promise(function (resolve) {
//   setTimeout(function () {
//     return resolve([2, 3]);
//   }, 5000);
// });

// var promise3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     return reject("Loi 404");
//   }, 6000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then(function (res) {
//     console.log("🚀 ~ file: index.js:119 ~ res:", res)
//     console.log(res[0].concat(res[1]));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//============================

// var users = [
//   {
//     id: 1,
//     name: "Kien Dam",
//   },
//   {
//     id: 2,
//     name: "Son Dang",
//   },
//   {
//     id: 3,
//     name: "Hung Dam",
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     userId: 1,
//     content: "Chưa ra video a ơi",
//   },
//   {
//     id: 2,
//     userId: 2,
//     content: "Vừa ra xong e ơi",
//   },
// ];

// Fake API

// function getComments() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (comments) {
//         return resolve(comments);
//       } else {
//         return reject("Lỗi");
//       }
//     }, 1000);
//   });
// }

// function getUsersByIds(userIds) {
//   return new Promise(function (resolve) {
//     var result = users.filter((user) => {
//       return userIds.includes(user.id);
//     });
//     setTimeout(function () {
//       resolve(result);
//     }, 1000);
//   });
// }

// getComments()
//   .then((comments) => {
//     var userIds = comments.map((comment) => comment.userId);
//     return getUsersByIds(userIds).then((users) => {
//       return {
//         users,
//         comments,
//       };
//     });
//   })
//   .then((data) => {
//     var commentBlock = document.getElementById("comment-block");
//     var html = "";
//     data.comments.forEach(function (comment) {
//       var user = data.users.find((user) => user.id === comment.userId);
//       html += `<li> ${user.name}: ${comment.content} </li>`;
//     });
//     commentBlock.innerHTML = html;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts?_expand=user")
//   .then((res) => res.json())
//   .then((postList) => {
//     var postContainer = document.querySelector(".post-container");

//     var html = postList.map((item) => {
//       return `<div class="post-item" >
//         <div class="post-item__title" style="color: yellow; font-size: 28px">${item.user.name} </div>
//         <div class="post-item__title" style="color: red; font-size: 24px">${item.title} </div>
//         <div class="post-item__content">${item.body} </div>
//      </div>`;
//     });
//     console.log("🚀 ~ file: index.js:216 ~ html ~ html:", html)

//     postContainer.innerHTML = html.join(" ");
//   });

// const getNewTodo = async () => {
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/100000"
//   );
//   if (response.status !== 200) {
//     throw new Error(`Something error: ${response.status}`); // reject
//   }
//   let data = await response.json();
//   return data; // resolve
// };

// const getNewTodo = async () => {
//   try {
//     let response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/100000"
//     );

//     if (response.status !== 200) {
//       throw new Error(`Something error: ${response.status}`); // reject
//     }

//     let data = await response.json();
//     return data; // resolve
//   } catch (error) {
//     return error;
//   }
// };

// getNewTodo()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const currentPromise = new Promise((resolve, reject) => {
  var posts = fetch("https://jsonplaceholder.typicode.com/posts");
  resolve(posts);
});

const currentPromise2 = new Promise((resolve, reject) => {
  var users = fetch("https://jsonplaceholder.typicode.com/users");
  resolve(users);
});

const executeAsync = async () => {
  try {
    const response = await currentPromise;
    const postList = await response.json();
    const response2 = await currentPromise2;
    const userList = await response2.json();
  } catch (err) {
    console.log(err);
  }
};

// currentPromise
//   .then((posts) => {
//     if (posts.status !== 200) {
//       throw new Error("Không lấy được posts");
//     } else {
//       return currentPromise2;
//     }
//   })
//   .then(async (users) => {
//     if (users.status !== 200) {
//       throw new Error("Không lấy được users");
//     } else {
//       return users.json();
//     }
//   })
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err.message));

executeAsync();
