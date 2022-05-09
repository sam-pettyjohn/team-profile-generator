const Employee = require("../lib/Employee");

test("Initialize Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Get Employee name", () => {
    const name = "Karina";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Get Employee id", () => {
    const testId = 2295;
    const employee = new Employee("Karina", testId);
    expect(employee.id).toBe(testId);
});

test("Get Employee email", () => {
    const testEmail = "kbp@gmail.com";
    const employee = new Employee("Karina", 2295, testEmail);
    expect(employee.email).toBe(testEmail);
});

test("Get Employee role", () => {
    const testRole = "Employee";
    const employee = new Employee("Karina", 2295, "kbp@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});