class Person {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }
  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname), (this.year = year);
  }
  showFullName(midleName) {
    return `${this.name}  ${this.surname} ${midleName}`;
  }
  showCourse(year) {
    let course = new Date().getFullYear() - this.year;

    if (course >= 1 && course <= 6) {
      return course;
    } else if (course > 6) {
      return "You are graduted.";
    } else {
      return "Year was not provided.";
    }
  }
}

const stud1 = new Student("Petro", "Petrenko", 2017);

console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
