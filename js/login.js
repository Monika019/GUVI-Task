document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const enteredUsername = document.getElementById('username').value;
      const enteredPassword = document.getElementById('password').value;
  
      // Retrieve user data from localStorage
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
  
      // Perform validation
      if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Successful login, redirect to profile page
        window.location.href = 'profile.html';
      } else {
        // Display an error message or handle the invalid login
        console.log('Invalid login credentials');
      }
    });
  });
  