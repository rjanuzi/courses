export default class ProtectedUser {
  #name;
  constructor(name, email, birthdate, role = "student", active = true) {
    this.#name = name; // Private attribute, can't be modified from outside of the module (IMPORTANT: #name and name are different attributes)
    this.email = email;
    this.birthdate = birthdate;
    this.role = role;
    this.active = active;
  }

  #somePrivateMethod() {
    console.log(
      "This is a private method and only can be called from inside of the class"
    );
  }

  showInfo() {
    return `Name: ${this.#name}, Email: ${this.email}, Birthdate: ${
      this.birthdate
    }, Role: ${this.role}, Active: ${this.active}`;
  }
}

// let user = new User("John", "john@gmail.com", "01/01/1990");

// console.log(user);
// console.log(user.showInfo());

// console.log(User.prototype.isPrototypeOf(user)); // True
