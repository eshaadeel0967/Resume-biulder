// TypeScript Interfaces for Resume Sections
interface PersonalInfo {
    name: string;
    title: string;
    address: string;
    phone: string;
    email: string;
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
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      
      // Collect form data using the defined interfaces
      const personalInfo: PersonalInfo = {
        name: getInputValue("name"),
        title: getInputValue("title"),
        address: getInputValue("address"),
        phone: getInputValue("phone"),
        email: getInputValue("email"),
      };
  
      const skills: string[] = getInputValue("skills").split(",").map(skill => skill.trim());
  
      const workExperience: WorkExperience = {
        position: getInputValue("work-position"),
        company: getInputValue("work-company"),
        dates: getInputValue("work-dates"),
        description: getInputValue("work-description"),
      };
  
      const education: Education = {
        degree: getInputValue("education-degree"),
        institution: getInputValue("education-institution"),
        dates: getInputValue("education-dates"),
      };
  
      const reference: Reference = {
        name: getInputValue("reference-name"),
        phone: getInputValue("reference-phone"),
        email: getInputValue("reference-email"),
      };
  
      // Generate resume content
      resumePreview.innerHTML = `
        <div class="resume-header">
          <img src="https://via.placeholder.com/80" alt="Profile Picture">
          <div>
            <h2>${personalInfo.name}</h2>
            <p>${personalInfo.title}</p>
            <p>${personalInfo.address}</p>
            <p>${personalInfo.phone} | <a href="mailto:${personalInfo.email}">${personalInfo.email}</a></p>
          </div>
        </div>
        
        <div class="resume-section">
          <h3>Skills</h3>
          <ul class="skills-list">
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
        
        <div class="resume-section">
          <h3>Profile</h3>
          <p>Hardworking ${personalInfo.title} seeking opportunities to leverage skills in ${skills.join(", ")}.</p>
        </div>
        
        <div class="resume-section">
          <h3>Employment History</h3>
          <p><strong>${workExperience.position}</strong>, ${workExperience.company}</p>
          <p>${workExperience.dates}</p>
          <p>${workExperience.description}</p>
        </div>
        
        <div class="resume-section">
          <h3>Education</h3>
          <p><strong>${education.degree}</strong>, ${education.institution}</p>
          <p>${education.dates}</p>
        </div>
        
        <div class="resume-section">
          <h3>References</h3>
          <p><strong>${reference.name}</strong></p>
          <p>${reference.phone}</p>
          <p><a href="mailto:${reference.email}">${reference.email}</a></p>
        </div>
      `;
    });
  });
  