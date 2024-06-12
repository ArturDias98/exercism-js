/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * @param {number | undefined} timer
 */
export function cookingStatus(timer = undefined) {
    if (timer === undefined) {
        return 'You forgot to set the timer.'
    }
    return timer === 0
        ? 'Lasagna is done.'
        : 'Not done, please wait.'
}

/**
 * @param {string[]} layers
 * @param {number} time
 */
export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

/**
 * @param {string[]} layers
 */
export function quantities(layers) {
    let countNoodles = 0;
    let countSauce = 0;

    for (let index = 0; index < layers.length; index++) {
        const element = layers[index];
        if (element === 'noodles') {
            countNoodles += 50;
        }
        if (element === 'sauce') {
            countSauce += 0.2;
        }
    }

    return {
        noodles: countNoodles,
        sauce: countSauce
    };
}

/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portions = 2) {
    let twoPortions = portions / 2;
    let convertRecipe = {};

    for(let prop in recipe){
        convertRecipe[prop] = recipe[prop] * twoPortions;
    }
    return convertRecipe;
}