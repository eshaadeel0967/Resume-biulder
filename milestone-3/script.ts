// TypeScript for Dynamic Resume Builder
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeContent = document.getElementById("resume-content") as HTMLElement;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Capture form inputs
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const address = (document.getElementById("address") as HTMLInputElement).value;
      const institution = (document.getElementById("education-institution") as HTMLInputElement).value;
      const degree = (document.getElementById("education-degree") as HTMLInputElement).value;
      const eduDates = (document.getElementById("education-dates") as HTMLInputElement).value;
      const position = (document.getElementById("work-position") as HTMLInputElement).value;
      const company = (document.getElementById("work-company") as HTMLInputElement).value;
      const workDates = (document.getElementById("work-dates") as HTMLInputElement).value;
      const workDescription = (document.getElementById("work-description") as HTMLInputElement).value;
      const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
  
      // Populate resume content
      resumeContent.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h3>Education</h3>
        <p><strong>${degree}</strong> at ${institution} (${eduDates})</p>
        <hr>
        <h3>Work Experience</h3>
        <p><strong>${position}</strong> at ${company} (${workDates})</p>
        <p>${workDescription}</p>
        <hr>
        <h3>Skills</h3>
        <ul>
          ${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}
        </ul>
      `;
    });
  });
  