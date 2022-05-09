const Intern = require("../lib/Intern");

test("Can input school name", () => {
    const testSchool = "UTT";
    const intern = new Intern("Justin", 4994, "jmw@gmail.com", testSchool);
    expect(intern.school).toBe(testSchool);
});

test("Get School name", () => {
    const testSchool = "UTT";
    const intern = new Intern("Justin", 4994, "jmw@gmail.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
});

test("getRole() returns Intern", () => {
    const testRole = "Intern";
    const intern = new Intern("Justin", 4994, "jmw@gmail.com", "UTT");
    expect(intern.getRole()).toBe(testRole);
});