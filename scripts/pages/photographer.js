//Mettre le code JavaScript lié à la page photographer.html

let str = window.location.href;
let url = new URL(str);
let photographerId = url.searchParams.get("id");
console.log(photographerId);
const menuSelect = document.querySelector(".choice");

// HEADER + MEDIAS //

// Récupération des données //
async function getPhotographers() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  console.log(data);
  return data;
}

// Header de la page photographe //
function displayData(photographers) {
  const photographerHeader = document.querySelector(".photograph_header");
  let insertPrice = 0;

  // Récupérer les données de tous les photographes, pour chque photographe //
  photographers.forEach((photographer) => {
    if (photographer.id == photographerId) {
      // Si l'id du photographe correspond à l'Id de photographerId dans les médias //
      const photographerModel = photographerFactoryInfo(photographer); // const qui insert la fonction afin d'afficher un photographe //
      const userCardDOM = photographerModel.getUserMediaCardDOM(); // const qui regroupe les deux fonctions //
      photographerHeader.appendChild(userCardDOM);

      insertPrice = photographer.price;
    }
  });
  const insert_price = document.getElementById("price"); //cible le bandeau au niveau du prix
  insert_price.textContent = insertPrice + "€ / jour"; //insere le prix plus le texte
}

// Body de la page photographe + Lightbox //

function displayMediaData(medias) {
  const photographerMedias = document.querySelector(".medias_card");

  medias.forEach((media) => {
    if (media.photographerId == photographerId) {
      const mediaModel = mediaFactory(media);
      const photographerMediaDOM = mediaModel.getPhotographerMediaDOM();
      photographerMedias.appendChild(photographerMediaDOM);
      createMediaLightboxDom(media);
    }
  });

  let mediaArticle = document.querySelector(".medias_card");
  console.log(mediaArticle.childNodes);
  for (let i = 0; i < mediaArticle.childNodes.length; i++) {
    mediaArticle.addEventListener("click", function () {
      openLightbox();
      createIconeLightboxDom();
      mediaLocal(i + 1);
    });
    //EVENEMENT AU CLAVIER SUR LA PHOTO
    mediaArticle.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        mediaLocal(i + 1);
        openLightbox();
        createIconeLightboxDom();
      }
    });
  }
}

async function init() {
  const { photographers, media } = await getPhotographers(); //créat de la const qui doit récupérer les données json  via la f. fetch
  displayData(photographers);
  displayMediaData(media);
}
init();
