interface Employee {
  name: string;
  country: string;
}

const employee: Employee = {
  name: "James",
  country: "Germany",
};

const accessEmployee = (employee: { [key: string]: string }) => {
  return employee["country"];
};

// ⛔️ Error: Index signature for type 'string'
// is missing in type 'Employee'.ts(2345)
accessEmployee(employee);
