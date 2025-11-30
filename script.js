document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const feedback = document.getElementById("form-feedback");

    let message = "";

    // Validate username
    if (username.length < 3) {
        message = "Username must be at least 3 characters long.";
    }
    // Validate email structure
    else if (!email.includes("@") || !email.includes(".")) {
        message = "Email must contain '@' and '.' characters.";
    } 
    else {
        const atPos = email.indexOf("@");
        const dotPos = email.lastIndexOf(".");

        // Check basic ordering of @ and .
        if (atPos < 1 || dotPos < atPos + 2 || dotPos === email.length - 1) {
            message = "Please enter a valid email address.";
        }
    }

    // Validate password
    if (message === "" && password.length < 6) {
        message = "Password must be at least 6 characters long.";
    }

    // Display feedback
    if (message !== "") {
        feedback.style.display = "block";
        feedback.style.backgroundColor = "#ffbaba";
        feedback.style.color = "#d8000c";
        feedback.textContent = message;
    } else {
        feedback.style.display = "block";
        feedback.style.backgroundColor = "#d4edda";
        feedback.style.color = "#155724";
        feedback.textContent = "Registration successful!";
        
        // You can now submit the form or handle success logic.
        // this.submit();  // Uncomment to allow actual submission
    }
});
