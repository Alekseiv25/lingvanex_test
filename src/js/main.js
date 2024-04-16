function createCards() {
  const svgPathTranslation = new URL(
    "../assets/svg/translation.svg",
    import.meta.url
  ).href;
  const svgPathListening = new URL(
    "../assets/svg/listening.svg",
    import.meta.url
  ).href;
  const svgPathGeneration = new URL(
    "../assets/svg/generation.svg",
    import.meta.url
  ).href;

  const data = [
    {
      title: "Translation",
      text: "Unlimited and secure translation for fixed price. Translate billions of characters per day",
      imageUrl: svgPathTranslation,
    },
    {
      title: "Social listening",
      text: "Unlimited and secure translation for fixed price. Translate billions of characters per day",
      imageUrl: svgPathListening,
    },
    {
      title: "Content generation",
      text: "Unlimited and secure translation for fixed price. Translate billions of characters per day",
      imageUrl: svgPathGeneration,
    },
  ];

  const cards = data.map((item) => {
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

  return cards.join("");
}

const cardContainer = document.querySelector(".solution-info__cards-list");
cardContainer.innerHTML = createCards();

function createTabsWithContent() {
  const data = [
    {
      title: "For travelers",
      items: ["Item 1", "Item 2", "Item 3"],
      imgLink: "",
    },
    {
      title: "For travel organization",
      items: ["Item A", "Item B", "Item C"],
      imgLink: "",
    },
    {
      title: "For employees",
      items: ["Item X", "Item Y", "Item Z"],
      imgLink: "",
    },
  ];

  const tabsContainer = document.querySelector(".product-info__tabs-container");
  const navContainer = document.createElement("div");
  navContainer.classList.add("product-info__tabs-container__tabs-nav");

  data.forEach((item, index) => {
    const button = document.createElement("button");
    button.classList.add(
      "button",
      "product-info__tabs-container__tabs-nav__tab"
    );
    button.textContent = item.title;

    button.addEventListener("click", () => {
      const buttons = navContainer.querySelectorAll("button");
      const tabs = tabsContainer.querySelectorAll(
        ".product-info__tabs-container__tab"
      );
      buttons.forEach((btn) => btn.classList.remove("active"));
      tabs.forEach((tab) => tab.classList.remove("active"));

      button.classList.add("active");
      tabs[index].classList.add("active");
    });

    navContainer.appendChild(button);
  });

  tabsContainer.appendChild(navContainer);

  data.forEach((item) => {
    const tab = document.createElement("div");
    tab.classList.add("product-info__tabs-container__tab");

    const tabContent = document.createElement("div");
    tabContent.classList.add("product-info__tabs-container__tab__content");

    const tabTitle = document.createElement("h3");
    tabTitle.classList.add("product-info__tabs-container__tab__content__title");
    tabTitle.textContent = item.title;
    tabContent.appendChild(tabTitle);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add(
      "product-info__tabs-container__tab__img-container"
    );

    const img = document.createElement("img");
    img.src = item.imgLink;
    imgContainer.appendChild(img);

    const list = document.createElement("ul");
    list.classList.add("product-info__tabs-container__tab__content__list");
    item.items.forEach((liText) => {
      const listItem = document.createElement("li");
      listItem.classList.add(
        "product-info__tabs-container__tab__content__list__item"
      );
      listItem.textContent = liText;
      list.appendChild(listItem);
    });
    tabContent.appendChild(list);

    tab.appendChild(tabContent);
    tab.appendChild(imgContainer);
    tabsContainer.appendChild(tab);
  });

  const firstButton = navContainer.querySelector("button");
  const firstTab = tabsContainer.querySelector(
    ".product-info__tabs-container__tab"
  );
  firstButton.classList.add("active");
  firstTab.classList.add("active");
}

createTabsWithContent();
