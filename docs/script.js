const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Troca o ícone 🌙 <-> ☀️
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
