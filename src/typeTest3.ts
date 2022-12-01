export interface Employee {
  name: string;
  country: string;
}

const employee: Employee = {
  name: "James",
  country: "Germany",
};

let accessEmployee = (employee: { [key: string]: string }) => {
  return employee["country"];
};

// ✅ Works now
accessEmployee({ ...employee }); // 👉️ "Germany"
