export default class User {
  constructor(name, email, birthdate, role = "student", active = true) {
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.role = role;
    this.active = active;
  }

  showInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Birthdate: ${this.birthdate}, Role: ${this.role}, Active: ${this.active}`;
  }
}

// let user = new User("John", "john@gmail.com", "01/01/1990");

// console.log(user);
// console.log(user.showInfo());

// console.log(User.prototype.isPrototypeOf(user)); // True
