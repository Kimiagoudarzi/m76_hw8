//1

// function Site (siteName, bookName){
//     this.siteName = siteName,
//     this.bookName = bookName
// };
// Site.prototype = {
//     get fullName() {
//         return `Welcome to ${this.siteName},${this.bookName}`;
//     },
// set fullName(name) {
//     let names = name.split(" ");
//     this.siteName = names[0];
//     this.bookName = names[1];
// }
// };
// let a = new Site();
// a.fullName = "W3Docs JavascriptBook";
// // console.log(a.fullName);

// let site = {
//     siteName: "W3Docs",
//     bookName: "Javascript book",
//     get fullName() {
//       return `Welcome to ${this.siteName},${this.bookName}`;
//     }
//   };
//   console.log(site.fullName);


// 2

// let site = {
//     siteName: "W3Docs",
//     bookName: "Javascript",
//     get fullName() {
//       return `${this.siteName}, ${this.bookName}`;
//     },
//     set fullName(value) {
//     //   [this.siteName, this.bookName] = value.split(" ");
//         let names = value.split(" ");
//         this.siteName = names[0];
//         this.bookName = names[1];
//     }
//   };
//   site.fullName = "W3 CSS";
//   console.log(site.siteName);
//   console.log(site.bookName);

// // 3

// function Site(siteName, bookName) {
//     this.siteName = siteName,
//     this.bookName = bookName
  
//     Object.defineProperty(this, "fullName", {
//       set: function (value) {[
//         this.siteName,
//         this.bookName,
//       ] = value.split(" ");
//   },
//       get: function () {
//         return `${this.siteName} ${this.bookName}`;
//       },
//     });
// }
  
// let a = new Site();
// a.fullName = "W3Docs Javascript book";
// console.log(a.fullName);