// Function to toggle visibility of sections
document.addEventListener("DOMContentLoaded", function () {
    var toggleButtons = document.querySelectorAll(".toggle-section");
    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the target section ID from data attribute
            var targetId = button.getAttribute("data-target");
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Toggle the display property
                targetSection.style.display =
                    targetSection.style.display === "none" ? "block" : "none";
            }
        });
    });
});
