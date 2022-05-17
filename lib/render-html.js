const fs = require("fs");
const path = require("path");

const tempDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];
    console.log(employees);
    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => rendMgr(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => rendEng(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => rendIntern(intern))
    );

    return rendMain(html.join(""));
};

const updatePlaceholder = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

const rendMain = html => {
    const template = fs.readFileSync(path.resolve(tempDir, "index.html"), "UTF-8");
    return updatePlaceholder(template, "team", html);
};

const rendMgr = manager => {
    let template = fs.readFileSync(path.resolve(tempDir, "manager.html"), "UTF-8");
    template = updatePlaceholder(template, "name", manager.getName());
    template = updatePlaceholder(template, "role", manager.getRole());
    template = updatePlaceholder(template, "email", manager.getEmail());
    template = updatePlaceholder(template, "id", manager.getId());
    template = updatePlaceholder(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const rendEng = engineer => {
    let template = fs.readFileSync(path.resolve(tempDir, "engineer.html"), "UTF-8");
    template = updatePlaceholder(template, "name", engineer.getName());
    template = updatePlaceholder(template, "role", engineer.getRole());
    template = updatePlaceholder(template, "email", engineer.getEmail());
    template = updatePlaceholder(template, "id", engineer.getId());
    template = updatePlaceholder(template, "github", engineer.getGithub());
    return template;
};

const rendIntern = intern => {
    let template = fs.readFileSync(path.resolve(tempDir, "intern.html"), "UTF-8");
    template = updatePlaceholder(template, "name", intern.getName());
    template = updatePlaceholder(template, "role", intern.getRole());
    template = updatePlaceholder(template, "email", intern.getEmail());
    template = updatePlaceholder(template, "id", intern.getId());
    template = updatePlaceholder(template, "school", intern.getSchool());
    return template;
};

module.exports = render;