document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('registerForm');
  
    registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform client-side validation if needed
  
      // Save user data to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
  
      // Redirect to login page
      window.location.href = 'login.html';
    });
  });  