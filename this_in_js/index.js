// "use strict";

// const iphone7 = {
//   // Thuộc tính - Property
//   name: "iphone 7",
//   color: "Pink",
//   weight: 300,

//   // Phương thức - Method
//   takePhoto() {
//     console.log(this);
//   },
//   objChild: {
//     name: "Son Dang",
//     methodChild() {
//       console.log(this);
//     },
//   },
// };

// console.log(iphone7.objChild.methodChild());

// function Car(name, color, weight) {
//   this.name = name;
//   this.color = color;
//   this.weight = weight;
//   this.run = function() {
//     console.log("Running...", this)
//   }
// }

// const mercedes = new Car("Mercedes", "#000", 1200);

// const button = document.querySelector("button");

// console.log(button.addEventListener("click", function() {
//   console.log(this);
// }));

// button.onclick = function() {
//   console.log(this);
// };

// function myFunc() {
//   console.log(this);
// }

// myFunc();

function Car(name, color) {
  this.name = name;
  this.color = color;

  // this.run = function () {
  //   console.log(this);
  // }
}

// Car.prototype.run = function() {
//   console.log(this);
// }

// Car.prototype.run = function () {
//   const test = () => {
//     console.log(this);
//   };
//   test();
// };

// const porsche = new Car("Porsche", "yellow");

// console.log(porsche.run());
