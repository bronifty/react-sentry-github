// Create a type for JSON serializable values
type JSONValue =
  | string
  | number
  | boolean
  | { [key: string]: string }
  | Array<JSONValue>;

// Now let's declare MyData which is a valid JSON value
export interface MyData {
  getEmployee: () => JSONValue;
  // getEmployee: () => { [key: string]: string };
}

class Employee implements MyData {
  getEmployee() {
    return { name: "John", country: "USA" };
  }
}

// create an instance of Employee class
let emp = new Employee() as MyData;
console.log(emp.getEmployee());
const thisAssignmentIsValid: JSONValue = null! as unknown as MyData;
console.log(thisAssignmentIsValid.getEmployee());
