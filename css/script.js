   // Predefined correct key
   const correctKey = "Therichclubvip";

   // Check if the user has already logged in
   if (localStorage.getItem("loggedIn") === "true") {
       // Redirect to another page (e.g., game/index.html) if already logged in
       window.location.href = "game.html";
   }

   // Login function
   function login() {
       const key = document.getElementById("key").value;
       const messageElement = document.getElementById("message");

       // Check if the key matches
       if (key === correctKey) {
           localStorage.setItem("loggedIn", "true"); // Set logged in status in localStorage
           // Redirect to another page (e.g., game/index.html)
           window.location.href = "game.html"; // Change this to the page you want to redirect to
       } else {
           messageElement.textContent = "Incorrect key. Please try again.";
       }
   }



