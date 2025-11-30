document.addEventListener("DOMContentLoaded", function () {

    // --- Form Selection implementation ---
    const form = document.getElementById("registration-form");

    // --- Feedback Div Selection ---
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // --- Retrieve User Inputs implementation ---
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let messages = [];       // --- error messages implementation ---
        let isValid = true;

        // ---------------------------------------------------------
        //          VALIDATION CHECKS
        // ---------------------------------------------------------

        // --- Username validation ---
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // --- Email validation ---
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        } else {
            const atPos = email.indexOf("@");
            const dotPos = email.lastIndexOf(".");
            if (atPos < 1 || dotPos < atPos + 2 || dotPos === email.length - 1) {
                isValid = false;
                messages.push("Please enter a valid email address.");
            }
        }

        // --- Password validation ---
        if (password.length < 6) {
            isValid = false;
            messages.push("Password must be at least 6 characters long.");
        }

        // ---------------------------------------------------------
        //          FEEDBACK DISPLAY LOGIC
        // ---------------------------------------------------------
        feedbackDiv.style.display = "block"; // Make visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red error
        }

    });

});
