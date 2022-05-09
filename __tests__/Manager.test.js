const Manager = require("../lib/Manager");

test("Input office number", () => {
    const testOffice = 47;
    const manager = new Manager("Haley", 12693, "heb@gmail.com", testOffice);
    expect(manager.officeNumber).toBe(testOffice);
});

test("getOfficeNumber() returns office number", () => {
    const testOffice = 47;
    const manager = new Manager("Haley", 12693, "heb@gmail.com", testOffice);
    expect(manager.getOfficeNumber()).toBe(testOffice);
});

test("getRole() returns Manager", () => {
    const testRole = "Manager";
    const manager = new Manager("Haley", 12693, "heb@gmail.com", 47);
    expect(manager.getRole()).toBe(testRole);
});