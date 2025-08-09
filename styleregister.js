
    function register() {
      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const dob = document.getElementById("dob").value;
      const pet = document.getElementById("pet").value.trim();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const msg = document.getElementById("regMsg");

      if (!name || !mobile || !dob || !pet || !username || !password) {
        msg.style.color = "red";
        msg.textContent = "Please fill all fields.";
        return;
      }

   
      const userData = {
        name,
        mobile,
        dob,
        pet,
        username,
        password
      };

     
      localStorage.setItem("registeredUser", JSON.stringify(userData));

      msg.style.color = "green";
      msg.textContent = "Registered successfully! Redirecting to login...";
      setTimeout(() => {
        window.location.href = "suclogin.html";
      }, 2000);
    }
  
    const newUser = {
  username: form.username.value,
  password: form.password.value,
  name: form.name.value,
  mobile: form.mobile.value,
  dob: form.dob.value,
  pet: form.pet.value
};

let users = JSON.parse(localStorage.getItem('users')) || [];
users.push(newUser);
localStorage.setItem('users', JSON.stringify(users));

