//boolean
let isDone: boolean = false;
isDone = true;

//string
let names: string = "masai";
let names1: string = "school";
let names2: string = `${names}_${names1}`;

//number
let age: number = 21;

//array num.
let arr: number[] = [1, 2, 3, 4];

//array string
let arr1: string[] = ["masai", "school"];
arr1.push("Banglore");

//object
type address = {
  houseNumber: number;
  street: string;
  city: string;
  state: string;
  postalcode: number;
  country: string;
};

let Address: address = {
  houseNumber: 34,
  street: "Chipgi",
  city: "Sirsi",
  state: "Karnataka",
  postalcode: 5814402,
  country: "India",
};

//tuple
let tuple: [string,boolean]

tuple = ["Job", false]

//enum 
enum User{
    Users, SuperUser, Admin, SuperAdmin
}

let U : User = User.Users
console.log(U)


//functions

function xyz(a:number,b:number){
    return a*b
}

console.log(xyz(5,4))

function abc(a:number,b:number){
    return a/b
}

console.log(abc(5,4))


