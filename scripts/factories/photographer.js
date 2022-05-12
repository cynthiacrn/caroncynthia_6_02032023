// PAGE PROFIL DU PHOTOGRAPHE //
function photographerFactoryInfo(data) {
  const { name, portrait, country, city, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;
  function getUserMediaCardDOM() {
    const section = document.createElement("section");
    section.className = "infos_container";

    const info = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("aria-label", name);
    h2.className = "photographer_profil_name";

    const address = document.createElement("h3");
    address.textContent = city + ", " + country;
    address.className = "photographer_profil_address";

    const quote = document.createElement("h4");
    quote.textContent = tagline;
    quote.className = "photographer_profil_quote";

    info.appendChild(h2);
    info.appendChild(address);
    info.appendChild(quote);

    const button = document.createElement("div");
    button.innerHTML = `<button class="contact_button" tabindex="2" aria-label = "contacter le photographe" onclick="displayModal()">Contactez-moi</button>`;

    const imgContainer = document.createElement("div");
    imgContainer.classList = "photo";
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.className = "picture";
    img.setAttribute("alt", "Photo de profil de " + name);

    section.appendChild(info);
    section.appendChild(button);
    section.appendChild(imgContainer);
    imgContainer.appendChild(img);

    return section;
  }
  return { getUserMediaCardDOM };
}
