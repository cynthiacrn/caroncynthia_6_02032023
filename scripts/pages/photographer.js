//Mettre le code JavaScript lié à la page photographer.html

let str = window.location.href;
let url = new URL(str);
let photographerIdd = url.searchParams.get("id");
console.log(photographerIdd);

let photographerName;
let photographerCity;
let photographerCountry;
let photographerQuote;
let photographerPortrait;
let photographerId;
let photographerPrice;
let photographerMedias = [];

async function getPhotographerInfo() {
  const response = await fetch("./../../data/photographers.json");

  const data = await response.json();
  console.log(data);

  // INFOS PHOTOGRAPHE //
  for (let i = 0; i < data.photographers.length; i++) {
    if (data.photographers[i].id === photographerId) {
      photographerName = data.photographers[i].name;
      photographerCity = data.photographers[i].city;
      photographerCountry = data.photographers[i].country;
      photographerQuote = data.photographers[i].tagline;
      photographerPortrait = data.photographers[i].portrait;
      photographerId = data.photographers[i].id;
      photographerPrice = data.photographers[i].price;
    }
  }

  // MEDIA PHOTOGRAPHE //

  for (let x = 0; x < data.media.length; x++) {
    if (data.media[x].photographerId === photographerId) {
      photographerMedias.push(data.media[x]);
    }
  }
}
getPhotographerInfo();
