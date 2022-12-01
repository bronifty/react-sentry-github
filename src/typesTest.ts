//

interface Task {
  name: String; //property
  run(arg: any): void; //method
}

class MyTask implements Task {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
  run(arg: any): void {
    console.log(`running: ${this.name}, arg: ${arg}`);
  }
}

let myTask: Task = new MyTask("someTask");
myTask.run("test");


type Person = {
  name: string;
  age: number;
};

const person: Person {
	named: 'Rex'
  	age: 23
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}

type Cow = {
  name: string;
  moo: () => void;
};

type Dog = {
  name: string;
  bark: () => void;
};

type Cat = {
  name: string;
  meow: () => void;
};

// union type
type Animals = Cow | Dog | Cat;

/*
TypeScript allows us to use more than one data type for a variable 
or a function parameter. This is called union type.
*/
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error

// Create a type for JSON serializable values
type JSONValue = string | number | boolean | { [key: string]: JSONValue } |  Array<JSONValue>;
let functionArg: JSONValue;
functionArg = "a string";
functionArg = 123;
functionArg = true;
functionArg = {["123abc"]: true}
functionArg = ['some tuple', 123, false, {["key"]: "value"}, ["a multidimensional array", "hey im a matrix", 100, false]]
