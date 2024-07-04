document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // Open the modal
    openModalBtn.onclick = function() {
        modal.style.display = "flex";
    }

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Handle form submission
    const form = document.getElementById("modalForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    form.onsubmit = function(event) {
        event.preventDefault();

        let valid = true;
        
        // Validate name
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        } else {
            nameError.textContent = "";
        }

        // Validate email
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        if (valid) {
            alert("Form submitted!");
            modal.style.display = "none";
            form.reset();
        }
    }
});
