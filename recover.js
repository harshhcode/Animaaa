let currentUserIndex = -1;

document.getElementById('verifyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const pet = document.getElementById('pet').value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || [];

  currentUserIndex = users.findIndex(user =>
    user.username === username &&
    user.dob === dob &&
    user.pet.toLowerCase() === pet.toLowerCase()
  );

  const msg = document.getElementById('message');

  if (currentUserIndex !== -1) {
    msg.style.color = 'green';
    msg.innerText = 'Verified! Please enter your new password.';
    document.getElementById('resetForm').style.display = 'block';
    document.getElementById('verifyForm').style.display = 'none';
  } else {
    msg.style.color = 'red';
    msg.innerText = 'Recovery information is incorrect!';
  }
});

document.getElementById('resetForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const newPassword = document.getElementById('newPassword').value.trim();

  let users = JSON.parse(localStorage.getItem('users'));
  users[currentUserIndex].password = newPassword;
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('message').style.color = 'green';
  document.getElementById('message').innerText = 'Password reset successfully! You can now login.';
  document.getElementById('resetForm').reset();
});
