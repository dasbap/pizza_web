import { createElement } from "../framework/core.js";


export function PizzaList(state, pizzasDatas) {
  const pizzas = pizzasDatas.map((pizza) =>
    createElement(
      "li",
      null,
      pizza.name, 
      " ",
      pizza.price, 
      " ",
      createElement(
        "button",
        {
          onclick: () => {
            state.pizzaCount++;
            state.pizzaSelection = [...state.pizzaSelection, pizza.name];
          },
        },
        "+"
      )
    )
  );

  return createElement("ul", null, ...pizzas);
}
