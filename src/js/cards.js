export function createCards(data) {
  const cards = data.map((item) => {
    return `
          <div class="solution-info__cards-list__card">
            <div class="solution-info__cards-list__card__content">
              <h3 class="title--m title">${item.title}</h3>
              <p class="text">${item.text}</p>
            </div>
            <div class="solution-info__cards-list__card__img-container">
              <img src="${item.imageUrl}" alt="img">
            </div>
          </div>
        `;
  });

  return cards.join("");
}
