const pngPathTravels = new URL("../assets/img/travels.png", import.meta.url)
  .href;
const pngPathOrganization = new URL(
  "../assets/img/organization.png",
  import.meta.url
).href;
const pngPathEmployees = new URL("../assets/img/employees.png", import.meta.url)
  .href;

export const accordionData = [
  {
    title: "For travelers",
    items: [
      "Highlight one word in the text on the page.",
      "Word meaning, pronunciation, synonyms, hypernyms, hyponyms  . and more.",
      "Highlight one word in the text on the page.",
      "Word meaning, pronunciation, synonyms, hypernyms, hyponyms  . and more.",
    ],
    imgLink: pngPathTravels,
  },
  {
    title: "For travel organization",
    items: [
      "Highlight one word in the text on the page.",
      "Word meaning, pronunciation, synonyms, hypernyms, hyponyms  . and more.",
      "Highlight one word in the text on the page.",
      "Word meaning, pronunciation, synonyms, hypernyms, hyponyms  . and more.",
    ],
    imgLink: pngPathOrganization,
  },
  {
    title: "For employees",
    items: [
      "Highlight one word in the text on the page.",
      "Word meaning, pronunciation, synonyms, hypernyms, hyponyms  . and more.",
      "Highlight one word in the text on the page.",
    ],
    imgLink: pngPathEmployees,
  },
];

const svgPathTranslation = new URL(
  "../assets/svg/translation.svg",
  import.meta.url
).href;
const svgPathListening = new URL("../assets/svg/listening.svg", import.meta.url)
  .href;
const svgPathGeneration = new URL(
  "../assets/svg/generation.svg",
  import.meta.url
).href;

export const cardsData = [
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
