// function createLogger (namespace) {
//   function logger(message) {
//     console.log(`[${namespace}] ${message} `)
//   }
//   return logger
// }

// // =============== App ================

// //Register.js

// const infoLogger = createLogger('Info')

// infoLogger('Bắt đầu gửi mail')
// infoLogger('Gửi mail lỗi lần 1, thử gửi lại...')
// infoLogger('Gửi mail thành công cho user xxx')

// //FogotPassword.js

// const errorLogger = createLogger('Error')

// errorLogger('Email không tồn tại trong DB')

//====================================

// function createStorage(key) {
//   let store = JSON.parse(localStorage.getItem(key)) ?? {};

//   const save = () => {
//     localStorage.setItem(key, JSON.stringify(store));
//   };

//   const storage = {
//     get(key) {
//       return store[key];
//     },
//     set(key, value) {
//       store[key] = value;
//       save(key);
//     },
//     remove(key) {
//       delete store[key];
//       save();
//     },
//   };
//   return storage;
// }

// //Profile.js

// const profileSetting = createStorage("profile_setting");

// console.log(profileSetting.get("fullName"));

// profileSetting.set("fullName", "Son Dang");
// profileSetting.set("age", 20);
// profileSetting.set("address", "Ha Noi");

// const themeSetting = createStorage("theme_setting");

// themeSetting.set("dark", "#000");
// themeSetting.set("light", "#fff");

// themeSetting.remove("light");

// console.log(themeSetting.get);

//================================

// function createApp() {
//   const cars = [];

//   return {
//     add(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars);
//     },
//   };
// }

// const app = createApp();

// app.add("honda");
// app.add("mer");
// app.add("bmw");
// app.show();

//================================

// function createCounter() {
//   let count = 0;

//   function childCounter() {
//     count++;
//   }
//   return childCounter;
// }

// const newCounter = createCounter();

// newCounter();
// newCounter();
// newCounter();
