// Async function to fetch user data from API
async function fetchUserData() {
    // API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Show loading message
        dataContainer.textContent = 'Loading user data...';

        // Fetch the data
        const response = await fetch(apiUrl);

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response JSON
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through users and add each name to <li>
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
