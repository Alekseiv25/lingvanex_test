export function createTabsWithContent(data) {
  const tabsContainer = document.querySelector(".product-info__tabs-container");
  const navContainer = createNavContainer();
  let activeTabIndex = 0;

  data.forEach((item, index) => {
    const button = createButton(item.title);
    button.addEventListener("click", () => {
      activeTabIndex = index;
      updateTabButtons(navContainer.querySelectorAll("button"), activeTabIndex);
      updateTabs(
        tabsContainer.querySelectorAll(".product-info__tabs-container__tab"),
        activeTabIndex
      );
    });

    navContainer.appendChild(button);
  });

  tabsContainer.appendChild(navContainer);

  data.forEach((item, index) => {
    const tab = createTab(index, item.title, item.imgLink, item.items);
    tabsContainer.appendChild(tab);
  });

  const buttons = navContainer.querySelectorAll("button");
  buttons[activeTabIndex].classList.add(
    "product-info__tabs-container__tabs-nav__tab--active"
  );
}

function createNavContainer() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("product-info__tabs-container__tabs-nav");
  return navContainer;
}

function createButton(title) {
  const button = document.createElement("button");
  button.classList.add("button", "product-info__tabs-container__tabs-nav__tab");
  button.textContent = title;
  return button;
}

function updateTabButtons(buttons, activeTabIndex) {
  buttons.forEach((btn, btnIndex) => {
    if (btnIndex === activeTabIndex) {
      btn.classList.add("product-info__tabs-container__tabs-nav__tab--active");
    } else {
      btn.classList.remove(
        "product-info__tabs-container__tabs-nav__tab--active"
      );
    }
  });
}

function updateTabs(tabs, activeTabIndex) {
  tabs.forEach((tab, tabIndex) => {
    if (tabIndex === activeTabIndex) {
      tab.style.transform = `translateY(0)`;
      tab.style.zIndex = `2`;
      tab.style.width = "100%";
    } else {
      const distance = (tabIndex - activeTabIndex) * 20;
      tab.style.transform = `translateY(${distance}px)`;
      tab.style.zIndex = `${2 - Math.abs(tabIndex - activeTabIndex)}`;
      const width = 100 - Math.abs(tabIndex - activeTabIndex) * 15;
      tab.style.width = `${width}%`;
    }
  });
}

function createTab(index, title, imgLink, items) {
  const tab = document.createElement("div");
  tab.classList.add("product-info__tabs-container__tab");
  const distance = index * 20;
  tab.style.transform = `translateY(${distance}px)`;
  tab.style.zIndex = `${2 - index}`;
  const width = 100 - index * 15;
  tab.style.width = `${width}%`;

  const tabContent = document.createElement("div");
  tabContent.classList.add("product-info__tabs-container__tab__content");

  const tabTitle = document.createElement("h3");
  tabTitle.classList.add("title", "title--l");
  tabTitle.textContent = title;
  tabContent.appendChild(tabTitle);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add(
    "product-info__tabs-container__tab__img-container"
  );

  const img = document.createElement("img");
  img.src = imgLink;
  imgContainer.appendChild(img);

  const list = document.createElement("ul");
  list.classList.add("product-info__tabs-container__tab__content__list");
  items.forEach((liText) => {
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
  return tab;
}
