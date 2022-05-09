const Engineer = require("../lib/Engineer");

test("Can input GitHub account", () => {
    const testGithub = "GitHubUsername";
    const engineer = new Engineer("Sam", 10194, "smp@gmail.com", testGithub);
    expect(engineer.github).toBe(testGithub);
});

test("getGithub() return GitHub username", () => {
    const testGithub = "GitHubUsername";
    const engineer = new Engineer("Sam", 10194, "smp@gmail.com", testGithub);
    expect(engineer.getGithub()).toBe(testGithub);
})

test("getRole() returns Engineer", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Sam", 10194, "smp@gmail.com", "sam-pettyjohn");
    expect(engineer.getRole()).toBe(testRole);
});