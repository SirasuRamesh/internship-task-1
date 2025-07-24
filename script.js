function showGreeting() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name 😊");
  } else {
    alert(`Hi ${name}! 👋 Welcome to my first interactive webpage 🎉`);
  }
}
