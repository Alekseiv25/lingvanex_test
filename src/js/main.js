function createCards() {
    const svgPathTranslation = new URL('../assets/svg/translation.svg', import.meta.url).href;
    const svgPathListening = new URL('../assets/svg/listening.svg', import.meta.url).href;
    const svgPathGeneration = new URL('../assets/svg/generation.svg', import.meta.url).href;

    const data = [
      { title: 'Translation', text: 'Unlimited and secure translation for fixed price. Translate billions of characters per day', imageUrl: svgPathTranslation },
      { title: 'Social listening', text: 'Unlimited and secure translation for fixed price. Translate billions of characters per day', imageUrl: svgPathListening },
      { title: 'Content generation', text: 'Unlimited and secure translation for fixed price. Translate billions of characters per day', imageUrl: svgPathGeneration }
    ];
  
    const cards = data.map(item => {
      return `
        <div class="solution-info__cards-list__card">
          <div class="solution-info__cards-list__card__content">
            <h3 class="solution-info__cards-list__card__content__title">${item.title}</h3>
            <p class="solution-info__cards-list__card__content__text">${item.text}</p>
          </div>
          <div class="solution-info__cards-list__card__img-container">
            <img src="${item.imageUrl}" alt="img">
          </div>
        </div>
      `;
    });
  
    return cards.join('');
  }
  
  const cardContainer = document.querySelector('.solution-info__cards-list');
  cardContainer.innerHTML = createCards();