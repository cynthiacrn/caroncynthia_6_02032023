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

// remove error message
function removeError(idElem) {
  document.getElementById(idElem).setAttribute("data-error-visible", false);
  document.getElementById(idElem).setAttribute("data-error", "");
}

// show error message
function showError(idElem, msgError) {
  document.getElementById(idElem).setAttribute("data-error-visible", true);
  document.getElementById(idElem).setAttribute("data-error", msgError);
}
document.getElementById("form").addEventListener("click", (e) => {
  console.log(e);
  validate(e);
});

function validate(e) {
  console.log("salut");
  e.preventDefault();

  let first = document.getElementById("firstname").value;
  let last = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("text").value;

  let nbError = 0;

  // CHECK FIRSTNAME //
  if (first.length != 0) {
    console.log("error");
    removeError("error-first");
    if (first.length < 2) {
      nbError = nbError + 1;
      showError(
        "error-first",
        "Le champ prénom doit contenir au moins 2 caractères"
      );
    } else {
      removeError("error-first");
    }
  } else {
    nbError = nbError + 1;
    showError("error-first", "Le champ prénom ne doit pas être vide");
  }

  // CHECK LASTNAME //
  if (last.length != 0) {
    removeError("error-last");
    if (last.length < 2) {
      nbError = nbError + 1;
      showError(
        "error-last",
        "Le champ nom doit contenir au moins 2 caractères"
      );
    } else {
      removeError("error-last");
    }
  } else {
    nbError = nbError + 1;
    showError("error-last", "Le champ nom ne doit pas être vide");
  }

  // CHECK EMAIL //
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = regexEmail.test(email);
  if (checkEmail == false) {
    nbError = nbError + 1;
    showError("error-email", "L'adresse email est invalide");
  } else {
    removeError("error-email");
  }

  // CHECK MESSAGE //

  if (message.length != 0) {
    removeError("error-message");
    if (message.length < 2) {
      nbError = nbError + 1;
      showError(
        "error-message",
        "Le champ message doit contenir au moins 2 caractères"
      );
    } else {
      removeError("error-message");
    }
  } else {
    nbError = nbError + 1;
    showError("error-message", "Le champ message ne doit pas être vide");
  }
  if (nbError == 0) {
    document.getElementById("contact_modal").style.display = "none";
  }
}
