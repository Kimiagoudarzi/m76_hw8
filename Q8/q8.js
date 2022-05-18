function Student(name, genderField) {
    this.name = name;
    this.genderField = genderField;
}

//1
const obj = new Student ("kimia", "female");
Student.prototype.age = 19;
console.log(obj);
console.log(obj.age);

//2
Student.prototype = { age : 20 };
const studObj1 = new Student("mia", "female");
console.log(studObj1);
console.log(studObj1.age);