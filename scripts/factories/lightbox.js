// Création des éléments du DOM pour la lightbox //

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
document.body.appendChild(lightbox);

// Boutons lightbox //
function createIconeLightboxDom() {
  const previousIcon = document.createElement("i");
  previousIcon.className = "fa-solid fa-chevron-left";
  previousIcon.id = "previous";
  previousIcon.setAttribute("onclick", "mediaNav(-1)");
  previousIcon.setAttribute("aria-label", "image précédente");
  lightbox.appendChild(previousIcon);

  const nextIcon = document.createElement("i");
  nextIcon.className = "fa-solid fa-chevron-right";
  nextIcon.setAttribute("onclick", "mediaNav(1)");
  nextIcon.id = "next";
  nextIcon.setAttribute("aria-label", "image suivante");
  lightbox.appendChild(nextIcon);

  const closeIcon = document.createElement("i");
  closeIcon.className = "fas fa-times";
  closeIcon.id = "close";
  closeIcon.setAttribute("aria-label", "fermer la lightbox");
  lightbox.appendChild(closeIcon);
  closeIcon.addEventListener("click", closeLightbox);
}

// Images et titre de la lightbox //
function createMediaLightboxDom(data) {
  const mediaLightbox = document.createElement("div");
  mediaLightbox.className = "lightbox-media";
  const link = document.createElement("a");

  const { title, image, video } = data;

  if ("video" in data) {
    const photoVideo = document.createElement("video");
    const mp4 = `assets/photographers/${video}`;
    const source = document.createElement("source");

    photoVideo.setAttribute("controls", "");
    link.setAttribute("href", mp4);
    source.setAttribute("src", mp4);
    source.setAttribute("alt", title);
    source.setAttribute("type", "video/mp4");
    photoVideo.appendChild(source);
    link.appendChild(photoVideo);
    mediaLightbox.appendChild(link);
  } else {
    const img = document.createElement("img");
    const photo = `assets/photographers/${image}`;
    link.setAttribute("href", photo);
    img.setAttribute("src", photo);
    img.setAttribute("alt", "photo " + title);
    link.appendChild(img);
    mediaLightbox.appendChild(link);
  }

  const photoLightboxTitle = document.createElement("h3");
  photoLightboxTitle.className = "lightbox-title";
  photoLightboxTitle.textContent = title;

  lightbox.appendChild(mediaLightbox);
  mediaLightbox.appendChild(photoLightboxTitle);
}
