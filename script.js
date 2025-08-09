alert("Welcome to my first website")


// 📩 Handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form reload

  const speciesType = document.getElementById("speciesType").value;
  const animalType = document.getElementById("animalType").value;
  const animalOther = document.getElementById("animalOther").value;
  const birdType = document.getElementById("birdType").value;
  const birdOther = document.getElementById("birdOther").value;
  const queryType = document.getElementById("queryType").value;
  const queryOther = document.getElementById("queryOther").value;

  const user = JSON.parse(localStorage.getItem("registeredUser"));
  const formData = {
    speciesType,
    animalType,
    animalOther,
    birdType,
    birdOther,
    queryType,
    queryOther,
    submittedBy: user.username,
    submittedAt: new Date().toLocaleString()
  };

  // Store or update submissions list
  let queries = JSON.parse(localStorage.getItem("petQueries")) || [];
  queries.push(formData);
  localStorage.setItem("petQueries", JSON.stringify(queries));

  alert("Your query has been submitted successfully!");
  document.getElementById("petForm").reset(); // Clear form
}



 