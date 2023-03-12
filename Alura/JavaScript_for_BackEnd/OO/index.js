import User from "./user.js";
import Admin from "./Admin.js";
import ProtectedUser from "./ProtectedUser.js";

const user = new User("John", "john@gmail.com", "1991-01-01");

console.log(user.showInfo());
user.name = "John Doe"; // Que can change the attibute from outside of the module
console.log(user.showInfo());

const protectedUser = new ProtectedUser("John", "john@gmail.com", "1991-01-01");
console.log(protectedUser.showInfo());

// SyntaxError: Private field '#name' must be declared in an enclosing class
//protectedUser.#name = "John Doe"; // Can't change the attribute from outside of the module

// SyntaxError: Private field '#somePrivateMethod' must be declared in an enclosing class
// protectedUser.#somePrivateMethod(); // Can't call the method from outside of the module

const admin = new Admin("Jane", "jane@gmail.com", "1991-01-01");

console.log(user.showInfo());
console.log(admin.showInfo()); // Polymorphism = Same call, but different behavior
