// // // // 1. Create constructor function
// // // function User(name) {
// // //     this.name = name;
// // //     // this.sayHi = function() {
// // //     //     console.log(this.name);
// // //     //   };
// // //   }
// // //   // a function prototype has "constructor" property by default,
// // //   // so we don't need to create it

// // // //   let anjali = new User('Anjali');
// // // //   anjali.sayHi();
  
// // //   // 2. Add the method to prototype
// // //   User.prototype.sayHi = function() {
// // //     console.log(this.name);
// // //   };

// // //   User.prototype.age = 20;
  
// // //   // Usage:
// // // //   let user = new User("John");
// // // //   user.sayHi();

// // //   let anjali = new User('Anjali');
// // //   anjali.sayHi();
// // //   console.log(anjali.prototype);

// // //   // prototype
// // //   console.log(Object.getOwnPropertyNames(User.prototype))

// // function makeClass(phrase) {
// //     // declare a class and return it
// //     return class {
// //       sayHi() {
// //         console.log(phrase);
// //       }
// //     };
// //   }
  
// //   // Create a new class
// //   let User = makeClass("Hello");
  
// //   new User().sayHi(); // Hello

// //   class Hi{
// //     sayHi(phrase){
// //         console.log(phrase)
// //     }
// //   }

// //   let user = new Hi();
// //   user.sayHi("hello");

// class User {

//     constructor(name, age) {
//       // invokes the setter
//       this.name = name;
//       this.age = age;
//     }
  
//     get name() {
//         console.log('calling')
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }

//     get age(){
//         return this._age;
//     }

//     set age(age){
//         this._age = age;
//     }

//     sayHi(){
//         console.log("hi " + this.name)
//     }
  
//   }
  
// //   let user = new User("John");
// //   console.log(user.name); // John
// //   user.sayHi();
  
// //   user = new User(""); // Name is too short.

// //   console.log(Object.getOwnPropertyNames(User) + " " + User.length + " " + User.name)

// console.log(Object.getOwnPropertyNames(User.prototype))

// class Person{
    
//     constructor(name, age, school){
//         this.name = name;
//         this.age = age;
//         this.school = school;
//     }

//     get name() {
//         console.log('calling')
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }

//     get age(){
//         return this._age;
//     }

//     set age(age){
//         this._age = age;
//     }
// }

// let p = new Person('subhas', 22, 'imdf')

// console.log(Object.getOwnPropertyNames(Person.prototype))

// console.log(p.school)


class Button {
    name = 'subash';
    constructor(value) {
      this.value = value;
    }
  
    click = () => {
      console.log(this.value);
    }
  }
  
  let button = new Button("hello");
  button.click()

  const fun = button.click;
  console.log(fun);
  fun();
  
//   setTimeout(button.click, 1000); // undefined