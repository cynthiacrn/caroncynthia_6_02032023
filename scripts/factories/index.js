// PAGE D'ACCUEIL //

function photographerFactory(data) {
  const { name, portrait, country, city, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;
  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("title", "Informations du photographe");
    article.className = "photographer_container";

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "profil_picture";
    img.setAttribute("alt", "Photo de profil de " + name);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.className = "photographer_name";
    h2.setAttribute("aria-label", name);

    const address = document.createElement("h3");
    address.textContent = city + ", " + country;
    address.className = "photographer_address";

    const quote = document.createElement("h4");
    quote.textContent = tagline;
    quote.className = "photographer_quote";

    const tariff = document.createElement("h5");
    tariff.textContent = price + "€/jour";
    tariff.className = "photographer_profil_price";

    const photographerlink = document.createElement("a");
    photographerlink.setAttribute("href", "photographer.html?id=" + id);
    photographerlink.setAttribute(
      "aria-label",
      "Se rendre sur le profil du photographe"
    );

    article.appendChild(photographerlink);
    photographerlink.appendChild(img);
    photographerlink.appendChild(h2);
    article.appendChild(address);
    article.appendChild(quote);
    article.appendChild(tariff);

    return article;
  }
  return {
    getUserCardDOM,
  };
}
