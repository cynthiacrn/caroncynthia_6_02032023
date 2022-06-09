//Mettre le code JavaScript lié à la page photographer.html

let str = window.location.href;
let url = new URL(str);
let photographerId = url.searchParams.get("id");
console.log(photographerId);
const menuSelect = document.querySelector(".choice");
console.log(menuSelect);

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
  // Mise en place du tri //
  switch (menuSelect.value) {
    case "pop":
      medias.sort(function (a, b) {
        return b.likes - a.likes;
      });
      break;

    case "date":
      medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      break;

    case "titre":
      medias.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      break;
  }
  // Affichage du tri sur la page //
  const photographerMedias = document.querySelector(".medias_card");
  photographerMedias.innerHTML = "";

  // Affichage du tri sur la lightbox //

  const lightbox = document.querySelector(".lightbox");
  lightbox.innerHTML = "";

  let totalLikes = 0;
  let i = 0;

  medias.forEach((media) => {
    if (media.photographerId == photographerId) {
      const mediaModel = mediaFactory(media);
      const photographerMediaDOM = mediaModel.getPhotographerMediaDOM();
      photographerMedias.appendChild(photographerMediaDOM);
      createMediaLightboxDom(media);

      totalLikes += media.likes;
    }
  });

  ajoutLikes();

  let total_likes = document.getElementById("total_likes");
  total_likes.innerHTML = totalLikes; // textcontent = addition des likes de base du photographe

  let mediaArticle = document.querySelector(".medias_card");
  for (let i = 0; i < mediaArticle.childNodes.length; i++) {
    mediaArticle.childNodes[i].addEventListener("click", function (e) {
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

// Gestion des likes //

function ajoutLikes() {
  const hearts = document.querySelectorAll(".heart"); // je cible le span des coeurs
  console.log(hearts);
  hearts.forEach((e) => {
    //EVENEMENT AU CLICK
    e.addEventListener("click", function () {
      // au click sur l'element

      const nbreLike = e.parentElement.children[1]; //creation constante qui cible le nbre de like

      nbreLike.textContent++; // j'aoute 1 au nbre de like
      let totalLikes = document.getElementById("total_likes"); // je cible le total des likes dans le bandeau
      totalLikes.innerHTML++; // j'ajoute 1 a ce total
    });

    //EVENEMENT AU CLAVIER AVEC TOUCHE ENTREE
    e.addEventListener("keypress", function () {
      const nbreLike = e.parentElement.children[1];

      nbreLike.textContent++;
      let totalLikes = document.getElementById("total_likes");
      totalLikes.innerHTML++;
    });
  });
}

async function init() {
  const { photographers, media } = await getPhotographers(); //créat de la const qui doit récupérer les données json  via la f. fetch
  displayData(photographers);
  displayMediaData(media);

  menuSelect.onchange = function () {
    displayMediaData(media);
  };
}
init();
