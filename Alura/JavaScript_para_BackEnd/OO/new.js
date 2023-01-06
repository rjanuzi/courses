function User(name, email) {
  this.name = name;
  this.email = email;

  this.showInfos = function () {
    return `Name: ${this.name}, Email: ${this.email}`;
  };
}

const user1 = new User("Rafael", "rjanuzi@gmail.com");
const user2 = new User("Rafael 2", "rjanuzi@ballcom");

console.log(user1.showInfos());
console.log(user2.showInfos());

function Admin(name, email, role) {
  User.call(this, name, email); // Set as inherited
  this.role = role || "admin"; // admin as default value
}

admin1 = new Admin("Rafael Adm", "rjanuzi@ballcom", "admin");
console.log(admin1.showInfos());
console.log(admin1.role);
