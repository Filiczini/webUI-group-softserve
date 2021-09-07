class Student {
  constructor(fullname, direction) {
    (this.fullname = fullname), (this._direction = direction);
  }
  showFullName() {
    return this.fullname;
  }
  nameIncludes(data) {
    let name = this.showFullName().split(" ")[0];
    return name == data;
  }
  get direction() {
    return this._direction;
  }
  set direction(value) {
    if (value == "" || typeof value != "string") {
      return "Incorect value";
    }
    this._direction = value;
  }

  static studentBuilder() {
    return new Student("Ihor Kohut", "qc");
  }
}

let stud1 = new Student("Ivan Petrenko", "web");
let stud2 = new Student("Sergiy Koval", "python");
let stud3 = Student.studentBuilder();
console.log(stud1.nameIncludes("Ivan"));
console.log(stud1.nameIncludes("Kolya"));
console.log(stud1.showFullName());
