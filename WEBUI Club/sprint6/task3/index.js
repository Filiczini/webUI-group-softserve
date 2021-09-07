class Worker {
  constructor(fullName, dayRate, workingDays) {
    (this.fullName = fullName),
      (this.dayRate = dayRate),
      (this.workingDays = workingDays);
  }
  #experiance = 1.2;
  get showExp() {
    return this.#experiance;
  }
  set setExp(value) {
    this.#experiance = value;
  }

  showSalary() {
    let showSalary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${showSalary}`);
    return showSalary;
  }
  showSalaryWithExperience() {
    let salaryExp = this.dayRate * this.workingDays * this.#experiance;
    console.log(`${this.fullName} salary: ${salaryExp}`);
    return salaryExp;
  }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log(`New experience: ${worker1.showExp}`);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log(`New experience: ${worker2.showExp}`);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log(`New experience: ${worker2.showExp}`);
worker2.showSalaryWithExperience();

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log(`New experience: ${worker3.showExp}`);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log(`New experience: ${worker3.showExp}`);
worker3.showSalaryWithExperience();

let JohnJohnson = worker1.showSalaryWithExperience();
let AndyAnder = worker2.showSalaryWithExperience();
let TomTomson = worker3.showSalaryWithExperience();

function filter() {
  let newArr = [];
  newArr.push(JohnJohnson, AndyAnder, TomTomson);
  newArr.sort(function (a, b) {
    return a - b;
  });
  console.log(`Sorted salary:
    John Johnson: ${newArr[0]}
    Andy Ander: ${newArr[1]}
    Tom Tomson: ${newArr[2]}`);
}
filter();
