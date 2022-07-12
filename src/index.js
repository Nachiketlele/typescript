//boolean
var isDone = false;
isDone = true;
//string
var names = "masai";
var names1 = "school";
var names2 = "".concat(names, "_").concat(names1);
//number
var age = 21;
//array num.
var arr = [1, 2, 3, 4];
//array string
var arr1 = ["masai", "school"];
arr1.push("Banglore");
var Address = {
    houseNumber: 34,
    street: "Chipgi",
    city: "Sirsi",
    state: "Karnataka",
    postalcode: 5814402,
    country: "India"
};
//tuple
var tuple;
tuple = ["Job", false];
//enum 
var User;
(function (User) {
    User[User["Users"] = 0] = "Users";
    User[User["SuperUser"] = 1] = "SuperUser";
    User[User["Admin"] = 2] = "Admin";
    User[User["SuperAdmin"] = 3] = "SuperAdmin";
})(User || (User = {}));
var U = User.Users;
console.log(U);
//functions
function xyz(a, b) {
    return a * b;
}
console.log(xyz(5, 4));
function abc(a, b) {
    return a / b;
}
console.log(abc(5, 4));
