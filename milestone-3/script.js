// Helper function to get input values safely
function getInputValue(id) {
    var inputElement = document.getElementById(id);
    return inputElement ? inputElement.value : "";
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumePreview = document.getElementById("resume-preview");
    var profileImageInput = document.getElementById("profile-image");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Image URL to be displayed
        var imageUrl = "";
        // Check if a file was selected
        if (profileImageInput.files && profileImageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Set the image URL once loaded
                generateResume(imageUrl); // Call function to generate resume
            };
            reader.readAsDataURL(profileImageInput.files[0]); // Read the image file as a data URL
        }
        else {
            // Generate resume without an image if no image is provided
            generateResume(imageUrl);
        }
    });
    function generateResume(imageUrl) {
        // Collect form data using the defined interfaces
        var personalInfo = {
            name: getInputValue("name"),
            title: getInputValue("title"),
            address: getInputValue("address"),
            phone: getInputValue("phone"),
            email: getInputValue("email"),
            imageUrl: imageUrl,
        };
        var skills = getInputValue("skills").split(",").map(function (skill) { return skill.trim(); });
        var workExperience = {
            position: getInputValue("work-position"),
            company: getInputValue("work-company"),
            dates: getInputValue("work-dates"),
            description: getInputValue("work-description"),
        };
        var education = {
            degree: getInputValue("education-degree"),
            institution: getInputValue("education-institution"),
            dates: getInputValue("education-dates"),
        };
        var reference = {
            name: getInputValue("reference-name"),
            phone: getInputValue("reference-phone"),
            email: getInputValue("reference-email"),
        };
        // Generate resume content
        resumePreview.innerHTML = "\n      <div class=\"resume-header\">\n        <img src=\"".concat(personalInfo.imageUrl ? personalInfo.imageUrl : 'https://via.placeholder.com/80', "\" alt=\"Profile Picture\">\n        <div>\n          <h2>").concat(personalInfo.name, "</h2>\n          <p>").concat(personalInfo.title, "</p>\n          <p>").concat(personalInfo.address, "</p>\n          <p>").concat(personalInfo.phone, " | <a href=\"mailto:").concat(personalInfo.email, "\">").concat(personalInfo.email, "</a></p>\n        </div>\n      </div>\n      \n      <div class=\"resume-section\">\n        <h3>Skills</h3>\n        <ul class=\"skills-list\">\n          ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n      </div>\n      \n      <div class=\"resume-section\">\n        <h3>Profile</h3>\n        <p>Hardworking ").concat(personalInfo.title, " seeking opportunities to leverage skills in ").concat(skills.join(", "), ".</p>\n      </div>\n      \n      <div class=\"resume-section\">\n        <h3>Employment History</h3>\n        <p><strong>").concat(workExperience.position, "</strong>, ").concat(workExperience.company, "</p>\n        <p>").concat(workExperience.dates, "</p>\n        <p>").concat(workExperience.description, "</p>\n      </div>\n      \n      <div class=\"resume-section\">\n        <h3>Education</h3>\n        <p><strong>").concat(education.degree, "</strong>, ").concat(education.institution, "</p>\n        <p>").concat(education.dates, "</p>\n      </div>\n      \n      <div class=\"resume-section\">\n        <h3>References</h3>\n        <p><strong>").concat(reference.name, "</strong></p>\n        <p>").concat(reference.phone, "</p>\n        <p><a href=\"mailto:").concat(reference.email, "\">").concat(reference.email, "</a></p>\n      </div>\n    ");
    }
});
