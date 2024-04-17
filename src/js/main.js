import { createCards } from "./cards";
import { createTabsWithContent } from "./tabs";
import { accordionData, cardsData } from "./constants";

const cardContainer = document.querySelector(".solution-info__cards-list");
cardContainer.innerHTML = createCards(cardsData);

createTabsWithContent(accordionData);
