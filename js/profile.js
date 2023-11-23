document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.querySelector('.profile_container');
  
    // Retrieve user data from localStorage
    const storedUsername = localStorage.getItem('username');
    // Additional profile details can be retrieved from the server or another source
  
    if (storedUsername) {
      // Display user details in the profile page
      profileContainer.innerHTML = `<h2>Welcome, ${storedUsername}!</h2>
                                    <p>Age: [User Age]</p>
                                    <p>DOB: [User DOB]</p>
                                    <p>Contact: [User Contact]</p>
                                    
                                    <!-- Add a form for updating additional details -->
                                    <h3>Update Additional Details</h3>
                                    <form id="updateForm">
                                      <label for="age">Age:</label>
                                      <input type="text" name="age"><br><br>
                                      <label for="dob">DOB:</label>
                                      <input type="text" name="dob"><br><br>
                                      <label for="contact">Contact:</label>
                                      <input type="text" name="contact"><br><br>
                                      <button type="submit" style="background-color: transparent; color: white; display:flex; cursor:pointer;">Update Profile</button>
                                    </form>`;
      
      const updateForm = document.getElementById('updateForm');
      
      updateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Handle the form submission to update additional details
        const age = document.querySelector('input[name="age"]').value;
        const dob = document.querySelector('input[name="dob"]').value;
        const contact = document.querySelector('input[name="contact"]').value;
  
        // Perform validation if needed
  
        // Update additional details in localStorage or send to the server
        console.log('Updated details:', { age, dob, contact });
      });
    } else {
      // Redirect to the login page if no user is found in localStorage
      window.location.href = 'login.html';
    }
  });  