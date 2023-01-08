import User from "./User.js";

export default class Admin extends User {
  constructor(name, email, birthdate, role = "admin", active = true) {
    super(name, email, birthdate, role, active);
  }

  createCourse(courseName) {
    console.log(`Creating course ${courseName}...`);
  }
}

// let user = new User("John", "john@gmail.com", "01/01/1990");
// let admin = new Admin("Jane", "jane@gmail.com", "01/01/1990");

// console.log(user.showInfo());
// console.log(admin.showInfo());

// admin.createCourse("JavaScript");
