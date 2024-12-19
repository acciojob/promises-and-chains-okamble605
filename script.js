//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name").value.trim();
  const ageInput = parseInt(document.getElementById("age").value.trim(), 10);

  if (!nameInput || isNaN(ageInput)) {
    alert("Both fields are required.");
    return;
  }

  validateAge(nameInput, ageInput)
    .then((message) => {
      alert(message);
    })
    .catch((error) => {
      alert(error);
    });
});

function validateAge(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  });
}
