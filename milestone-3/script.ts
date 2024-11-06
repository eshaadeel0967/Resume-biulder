// TypeScript Interfaces for Resume Sections
interface PersonalInfo {
  name: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  imageUrl: string | ArrayBuffer | null | undefined ;
}

interface WorkExperience {
  position: string;
  company: string;
  dates: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  dates: string;
}

interface Reference {
  name: string;
  phone: string;
  email: string;
}

// Helper function to get input values safely
function getInputValue(id: string): string {
  const inputElement = document.getElementById(id) as HTMLInputElement;
  return inputElement ? inputElement.value : "";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumePreview = document.getElementById("resume-preview") as HTMLElement;
  const profileImageInput = document.getElementById("profile-image") as HTMLInputElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Image URL to be displayed
    let imageUrl: string | ArrayBuffer | null | undefined = "";

    // Check if a file was selected
    if (profileImageInput.files && profileImageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageUrl = e.target?.result; // Set the image URL once loaded
        generateResume(imageUrl);    // Call function to generate resume
      };
      reader.readAsDataURL(profileImageInput.files[0]); // Read the image file as a data URL
    } else {
      // Generate resume without an image if no image is provided
      generateResume(imageUrl);
    }
  });

  function generateResume(imageUrl?: string | ArrayBuffer | null | undefined ) {
    // Collect form data using the defined interfaces
    const personalInfo: PersonalInfo = {
      name: getInputValue("name"),
      title: getInputValue("title"),
      address: getInputValue("address"),
      phone: getInputValue("phone"),
      email: getInputValue("email"),
      imageUrl: imageUrl 
    };

    const skills: string[] = getInputValue("skills").split(",").map(skill => skill.trim());

    const workExperience: WorkExperience = {
      position: getInputValue("work-position"),
      company: getInputValue("work-company"),
      dates: getInputValue("work-dates"),
      description: getInputValue("work-description")
    };

    const education: Education = {
      degree: getInputValue("education-degree"),
      institution: getInputValue("education-institution"),
      dates: getInputValue("education-dates")
    };

    const reference: Reference = {
      name: getInputValue("reference-name"),
      phone: getInputValue("reference-phone"),
      email: getInputValue("reference-email")
    };
    // Generate resume content
    resumePreview.innerHTML = `
    <div class="resume-header">
      ${personalInfo.imageUrl ? `<img src="${personalInfo.imageUrl}" alt="Profile Picture">` : ""}
      <div>
        <h2 contenteditable="true" class="editable" data-field="name">${personalInfo.name}</h2>
        <p contenteditable="true" class="editable" data-field="title">${personalInfo.title}</p>
        <p contenteditable="true" class="editable" data-field="address">${personalInfo.address}</p>
        <p contenteditable="true" class="editable" data-field="phone">${personalInfo.phone} | <a href="mailto:${personalInfo.email}" contenteditable="true" data-field="email">${personalInfo.email}</a></p>
      </div>
    </div>
    
    <div class="resume-section">
      <h3>Skills</h3>
      <ul class="skills-list">
        ${skills.map(skill => `<li contenteditable="true" class="editable" data-field="skills">${skill}</li>`).join('')}
      </ul>
    </div>
    
    <div class="resume-section">
      <h3>Profile</h3>
      <p contenteditable="true" class="editable" data-field="profile">Hardworking ${personalInfo.title} seeking opportunities to leverage skills in ${skills.join(", ")}.</p>
    </div>
    
    <div class="resume-section">
      <h3>Employment History</h3>
      <p><strong contenteditable="true" class="editable" data-field="work-position">${workExperience.position}</strong>, <span contenteditable="true" class="editable" data-field="work-company">${workExperience.company}</span></p>
      <p contenteditable="true" class="editable" data-field="work-dates">${workExperience.dates}</p>
      <p contenteditable="true" class="editable" data-field="work-description">${workExperience.description}</p>
    </div>
    
    <div class="resume-section">
      <h3>Education</h3>
      <p><strong contenteditable="true" class="editable" data-field="education-degree">${education.degree}</strong>, <span contenteditable="true" class="editable" data-field="education-institution">${education.institution}</span></p>
      <p contenteditable="true" class="editable" data-field="education-dates">${education.dates}</p>
    </div>
    
    <div class="resume-section">
      <h3>References</h3>
      <p><strong contenteditable="true" class="editable" data-field="reference-name">${reference.name}</strong></p>
      <p contenteditable="true" class="editable" data-field="reference-phone">${reference.phone}</p>
      <p><a href="mailto:${reference.email}" contenteditable="true" data-field="reference-email">${reference.email}</a></p>
    </div>
  `;
  const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
      element.addEventListener("input", (e) => {
        const target = e.target as HTMLElement;
        const field = target.dataset.field;
        if (field) {
          updateField(field, target.innerText);
        }
      });
    });
  }
  function updateField(field: string, value: string) {
    console.log(`Field ${field} updated to: ${value}`);
}
});
