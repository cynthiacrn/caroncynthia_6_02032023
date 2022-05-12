function displayModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  modal.style.display = "block";
  main.className = "bg_blur";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
