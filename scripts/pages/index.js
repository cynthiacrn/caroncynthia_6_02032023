// Récupération des données //
async function getPhotographers() {
  const response = await fetch("/data/photographers.json");
  const photographers = await response.json();
  return photographers;
}

// Cible l'endroit où faire apparaître les données dans le DOM //
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  // Récupère les données pour chaque photographe //
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Récupère les datas des photographes //
async function init() {
  const { photographers } = await getPhotographers(); // Récupère le tableau du des données //
  displayData(photographers);
}

init();
