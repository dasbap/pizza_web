import { createElement } from "../framework/core.js";

export const Navigation = createElement(
  "nav",
  null,
  createElement(
    "a",
    {
      href: "#accueil",
      class: "beautiful-link",
    },
    "Accueil"
  ),
  createElement(
    "a",
    {
      href: "#panier",
      class: "beautiful-link",
    },
    "Panier"
  )
);
