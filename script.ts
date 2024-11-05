// Function to toggle visibility of sections
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-section");
  
    toggleButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Get the target section ID from data attribute
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId!);
  
        if (targetSection) {
          // Toggle the display property
          targetSection.style.display =
            targetSection.style.display === "none" ? "block" : "none";
        }
      });
    });
  });
  