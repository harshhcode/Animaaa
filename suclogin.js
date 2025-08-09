 function login() {
      const enteredUser = document.getElementById("loginUser").value.trim();
      const enteredPass = document.getElementById("loginPass").value.trim();
      const msg = document.getElementById("loginMsg");

      const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

      if (!savedUser) {
        msg.style.color = "red";
        msg.textContent = "No user registered yet. Please register first.";
        setTimeout(() => {
          window.location.href = "register.html";
        }, 2000);
        return;
      }

      if (enteredUser === savedUser.username && enteredPass === savedUser.password) {
        msg.style.color = "green";
        msg.textContent = "Successfully Logged In! Redirecting...";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
        
        }  
         else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password.";
      }
    }
    
