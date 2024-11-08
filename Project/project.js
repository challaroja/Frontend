document.addEventListener("DOMContentLoaded", () => {
    const attendanceScreen = document.getElementById("attendance-screen");
    const loginForm = document.getElementById("login-form");
    const attendanceForm = document.getElementById("attendance-form");
    const successMessage = document.getElementById("success-message");
  
    // Show the "Attendance" screen for (2000 ms) and then show login form
    setTimeout(() => {
      attendanceScreen.style.display = "none";
      loginForm.style.display = "block";
    }, 2000);
  
    // Handle login form submission
    document.getElementById("login").addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Fetch and validate login credentials from data.json
      const response = await fetch("data.json");
      const data = await response.json();
      const user = data.users.find((u) => u.username === username && u.password === password);
  
      if (user) {
        loginForm.style.display = "none";
        attendanceForm.style.display = "block";
      } else {
        alert("Invalid username or password");
      }
    });
  
    // Handle attendance form submission
    document.getElementById("attendance").addEventListener("submit", async (event) => {
      event.preventDefault();
      const date = document.getElementById("date").value;
      const course = document.getElementById("course").value;
      const name = document.getElementById("name").value;
  
      // Add attendance data to JSON file (mocked in this example)
      const attendanceRecord = { date, course, name };
      console.log("Attendance Recorded:", attendanceRecord);
  
      // Display success message and clear form fields
      successMessage.style.display = "block";
      document.getElementById("attendance").reset();
  
      // Mock saving to JSON (real application would save to server)
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    });
  });
  