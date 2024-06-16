/// <reference path="./global.d.ts" />
//
// @ts-check

const PRODUCT_PRICES = {
  "Margherita": 7,
  "Caprese": 9,
  "Formaggio": 10,
  "ExtraSauce": 1,
  "ExtraToppings": 2,
}
/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  return pizzaRecursion([pizza, ...extras], 0);
}
function pizzaRecursion(products, price) {
  if (products.length === 0)
    return price;
  const product = products.pop();
  price += PRODUCT_PRICES[product];
  return pizzaRecursion(products, price);
}
/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;
  for (const order of pizzaOrders) {
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }
  return totalPrice;
}
