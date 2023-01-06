const user = {
  name: "Rafael",
  email: "rjanuzi@gmail.com",
  birthdate: "07/05/1991",
  role: "admin",
  active: true,
  showInfos: function () {
    console.log(
      `Name: ${this.name}, Email: ${this.email}, Birthdate: ${this.birthdate}, Role: ${this.role}, Active: ${this.active}`
    );
  },
};

const admin = {
  name: "Rafael 2",
  email: "rjanuzi@ballcom",
  birthdate: "07/05/1991",
  role: "admin",
  extraFld: "extra",
  createCourse: function (course) {
    console.log(`Course ${course} created successfully`);
  },
};

Object.setPrototypeOf(admin, user); // Make admin inherit from user
admin.createCourse("JavaScript");
admin.showInfos();

console.log(admin.extraFld);
console.log(user.extraFld); // undefined - Exists only in admin

console.log(admin.active); // true - Exists in user and is inherited
