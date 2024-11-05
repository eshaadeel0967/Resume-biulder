// TypeScript for Dynamic Resume Builder
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContent = document.getElementById("resume-content");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Capture form inputs
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var institution = document.getElementById("education-institution").value;
        var degree = document.getElementById("education-degree").value;
        var eduDates = document.getElementById("education-dates").value;
        var position = document.getElementById("work-position").value;
        var company = document.getElementById("work-company").value;
        var workDates = document.getElementById("work-dates").value;
        var workDescription = document.getElementById("work-description").value;
        var skills = document.getElementById("skills").value.split(",");
        // Populate resume content
        resumeContent.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <hr>\n        <h3>Education</h3>\n        <p><strong>").concat(degree, "</strong> at ").concat(institution, " (").concat(eduDates, ")</p>\n        <hr>\n        <h3>Work Experience</h3>\n        <p><strong>").concat(position, "</strong> at ").concat(company, " (").concat(workDates, ")</p>\n        <p>").concat(workDescription, "</p>\n        <hr>\n        <h3>Skills</h3>\n        <ul>\n          ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "\n        </ul>\n      ");
    });
});
