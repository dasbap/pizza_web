import { render, createElement, reactive } from "./framework/core.js";
import { PizzaList } from "./components/pizzaList.js";
import { Navigation } from "./components/navigation.js";

const pizzasDatas = [
  {name: "Pizza spéciale", price: 2.1},
  {name: "Pizza reine", price: 1.1},
  {name: "Pizza chorizo", price: 1.8},
  {name: "Pizza 4 fromages", price: 2.5},
  {name: "Pizza poulet", price: 2.0},
  {name: "Pizza montagnarde", price: 2.2}
];

const state = reactive(
  {
    title: "pizza world!",
    pizzaCount: 0,
    pizzaSelection: [],
  },
  renderApp
);

function removePizza(pizzaName) {
  // Créer un nouveau tableau avec la première occurrence de pizza supprimée
  state.pizzaSelection = state.pizzaSelection.filter((pizza, index) => 
    index !== state.pizzaSelection.indexOf(pizzaName)
  );
  state.pizzaCount = state.pizzaSelection.length; // Mettre à jour le nombre de pizzas
}

function renderApp() {
  const totalPrice = state.pizzaSelection.reduce((total, pizzaName) => {
    const pizza = pizzasDatas.find((p) => p.name === pizzaName);
    return total + (pizza ? pizza.price : 0);
  }, 0);

  const app = createElement(
    "app",
    null,
    Navigation,
    createElement("h1", null, `Hello ${state.title}`),
    createElement("p", null, "Carte des pizzas :"),
    PizzaList(state, pizzasDatas),
    createElement("p", null, `Total de la commande : ${totalPrice.toFixed(2)} €`),
    createElement("p", null, `Votre sélection (${state.pizzaCount}) :`),
    createElement(
      "ul",
      null,
      ...state.pizzaSelection.map((pizza) =>
        createElement("li", null, 
          pizza,
          createElement("button", {
            onclick: () => removePizza(pizza), // Appel de la fonction pour supprimer la première occurrence
          }, "-") // Bouton pour supprimer la pizza
      )),
    ),
    createElement(
      "button",
      {
        onclick: () => console.log(state.pizzaSelection),
      },
      "Voir sélection"
    )
  );

  document.querySelector("#root").innerHTML = "";
  render(app, document.querySelector("#root"));
}

renderApp();
