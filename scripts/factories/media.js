function mediaFactory(data) {
  function getPhotographerMediaDOM() {
    const { image, video, title, likes, date, id } = data;

    const cardMedia = document.createElement("article");
    cardMedia.classList.add("card_media_container");
    cardMedia.setAttribute("title", "Permet d'ouvrir une lightbox");

    if ("video" in data) {
      const videoPicture = document.createElement("video");
      const mp4 = `assets/photographers/${video}`;
      const source = document.createElement("source");

      videoPicture.setAttribute("tabindex", "4");
      videoPicture.setAttribute("controls", " ");
      source.className = "mediaImg";
      source.setAttribute("src", mp4);
      source.setAttribute("alt", title);
      source.setAttribute("type", "video/mp4");

      cardMedia.appendChild(videoPicture);
      videoPicture.appendChild(source);
    } else {
      const img = document.createElement("img");
      const photo = `assets/photographers/${image}`;

      img.setAttribute("tabindex", "4");
      img.setAttribute("src", photo);
      img.setAttribute("alt", "photo" + " " + title);
      img.className = "mediaImg";

      cardMedia.appendChild(img);
    }
    const infoPhoto = document.createElement("div");
    infoPhoto.classList.add("info_photo");

    const h2 = document.createElement("h2");
    h2.textContent = title;

    infoPhoto.appendChild(h2);
    cardMedia.appendChild(infoPhoto);

    const nbreLike = document.createElement("span");
    nbreLike.textContent = likes;
    nbreLike.setAttribute("title", "nombre de like de la photo");

    const spanHeart = document.createElement("span");
    spanHeart.className = "heart";

    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    heart.setAttribute("aria-label", "icone coeur cliquable");
    heart.setAttribute("tabindex", "4");

    infoPhoto.appendChild(nbreLike);
    infoPhoto.appendChild(spanHeart);
    spanHeart.appendChild(heart);

    return cardMedia;
  }
  return { getPhotographerMediaDOM };
}

function insert() {
  const insertContainer = document.querySelector(".insert");

  const likesContainer = document.createElement("div");
  likesContainer.className = "likes_container";

  const insertLike = document.createElement("h4");
  insertLike.id = "total_likes";

  const insertHeart = document.createElement("i");
  insertHeart.className = "fas fa-heart";

  const insertPrice = document.createElement("h4");
  insertPrice.id = "price";

  likesContainer.appendChild(insertHeart);
  likesContainer.appendChild(insertLike);
  insertContainer.appendChild(likesContainer);
  insertContainer.appendChild(insertPrice);
  return insertContainer;
}

insert();
