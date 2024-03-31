// // // console.log('hello');

// // // function user(name, friend){
// // //     if(new.target){
// // //         console.log("called with new() method");
// // //     }
// // //     this.name = name;
// // //     this.friend = friend;
// // //     this.city = "mumbai";

// // //     this.walk = function(){
// // //         console.log(this.name + " " + this.friend + "are walking");
// // //     }
// // // }
// // // console.log(typeof user);

// // // let u = new user('subhash', 'anjali');

// // // console.log(u);
// // // console.log(u.walk());

// // // console.log('user function prototype is ' + user.prototype);

// // // const userPrototype = Object.getOwnPropertyNames(user.prototype);
// // // console.log(userPrototype + " " + userPrototype[0]);

// // // // class is same as function

// // // class person{
// // //     constructor(name){
// // //         this.name = name;
// // //     }

// // //     callName = function(){
// // //         console.log("name is " + this.name);
// // //     }
// // // }

// // // let p = new person("sam");
// // // console.log(p.callName() + " " + p instanceof person);


// // // function user(name){
// // //     this.name = name;
// // //     this.friend = "anjali";

// // //     this.talk = function(){
// // //         console.log("talking")
// // //     }
// // // }

// // // let x = user("subhash")
// // // console.log("x is " + x);

// // // let obj = new user("ram")
// // // obj.talk();

// // // class User {
// // //     constructor(name) { this.name = name; }
// // //     sayHi() { alert(this.name); }
// // // }


// // // console.log(Object.prototype)
// // // console.log(typeof user.prototype)

// // // Object.prototype.city = "mumbai";

// // // function user(name){
// // //     this.name = name;
// // // }
// // // console.log(Object.prototype);

// // // let obj = {
// // //     name : 'subhash'
// // // }
// // // console.log(obj.prototype)
// // // console.log(obj.name + " " + obj.city)

// // // console.log(obj.city)


// // // Creating a simple object
// // let person = {
// //     name: 'John',
// //     age: 30,
// //     greet: function() {
// //       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// //     }
// //   };
  
// //   // Creating a new object with 'person' as its prototype
// //   let anotherPerson = Object.create(person); // = person.prototype
// //   console.log(anotherPerson + " " + anotherPerson.name + " " + anotherPerson.greet())

// //   let u = Object.getPrototypeOf(person);
// //   console.log(u + " " + u.name)
// // // console.log(Object.getPrototypeOf(person))
  

// let animal = {
//     eats: true
//   };
  
//   class Rabbit {
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log("hi");
//     }
//   }

//   function x(name){
//     this.name = name;
//     this.sayhi = function(){
//         console.log('hi')
//     }
//   }

//   let y = new x('fsd');

// //   console.log(Rabbit.prototype)
// //   console.log(Object.getPrototypeOf(Rabbit))
// //   console.log(Rabbit.__proto__)
// //   console.log(Rabbit.prototype.sayHi == function sayHi(){
// //     console.log("hi");
// // })


  
// //   Rabbit.prototype = animal;
  
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// for (pro in y){
//     console.log(pro)
// }
// //   console.log(rabbit.sayHi())
// //   console.log(rabbit.eats);

// //   Rabbit.prototype = {
// //     eats : false
// //   }

// //   let rab = new Rabbit("anja");

// //   console.log(rab.eats)
// //   console.log(rabbit.eats)

// class Button {
//     constructor(value) {
//       this.value = value;
//     }
  
//     click() {
//       console.log(this.value);
//     }

//     click1 = () => {
//         alert(this.value);
//       }
//   }
  
//   let button = new Button("hello");

// //   console.log(button.click == Button.prototype.click)
  
// //   setTimeout(Button.prototype.click, 1000); // undefined
//   setTimeout(function() {
//     console.log(this.value);
//   }, 1000)

//   button.click();

// //   console.log(Button.prototype)
// //   console.log(Object.getOwnPropertyNames(Button.prototype))


function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }

  class Duplicate{
    constructor({ template }){
        this.template = template;
    }
    timer;
    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
      stop() {
        clearInterval(timer);
      };
    
      start() {
        render();
        timer = setInterval(render, 1000);
      };
  }
  
  let clock = new Clock({template: 'h:m:s'});
  let dep = new Duplicate({template: 'h:m:s'});

  clock.start();

console.log(Object.getOwnPropertyNames(Clock.prototype))
console.log(Object.getOwnPropertyNames(Duplicate.prototype))
