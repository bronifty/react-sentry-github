// Create a type for JSON serializable values
export type JSONValue =
  | string
  | number
  | boolean
  | { [key: string]: JSONValue }
  | Array<JSONValue>;

// Now let's declare MyData which is a valid JSON value
export interface MyInterface {
  foo: JSONValue;
}

class MyClass implements MyInterface {
  foo: JSONValue;
  constructor(foo: JSONValue) {
    this.foo = foo;
  }
}
const myClass = new MyClass("foobar");
const thisAssignmentIsValid = myClass;
console.log(thisAssignmentIsValid.foo);

// This does not pass, but we want to define JSONValue so that
// it would

// const thisAssignmentIsValid: JSONValue = null! as MyData;
