function displayModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  const header = document.getElementById("header");
  modal.style.display = "block";
  main.className = "bg_blur";
  header.className = "bg_blur";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  main.className = "blur_none";
  header.className = "blur_none";
}
