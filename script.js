//complete this code
class Person {
	constructor() {
		this.name = "Navdesh"
	}
	get getname () {
		return (this.name);
	}
	set setage (){
		this.age = "20";
	}
}

class Student extends Person {
   study() {
	   console.log(`${this.name} is studying`);
   }	 
}

class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
