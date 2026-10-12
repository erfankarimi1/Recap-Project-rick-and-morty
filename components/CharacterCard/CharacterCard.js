export function createCharacterCard(data) {
  const li = document.createElement("li");
  li.classList.add("card");
  const card = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${data.image}"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title"> ${data.name} </h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${data.status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${data.type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${data.id}</dd>
            </dl>
          </div>
    `;
  li.innerHTML = card;
  return li;
}
