
/**
 * Increments (adds to) the counter by one
 * 
 * @typedef {object} Add
 * @prop {'ADD'} type
 */

/**
 * Decrements (subtracts from) the counter by one
 * 
 * @typedef {object} Subtract
 * @prop {'SUBTRACT'} type
 */

/**
 * Decrements (subtracts from) the counter by one
 * 
 * @typedef {object} Reset
 * @prop {'RESET'} type
 */

/**
 *@typedef {Add | Subtract | Reset} Action 
 */

 export const Action = {};

/**
 * 
 * @returns {Add}
 */
export const add = () => {
    return {
        type: 'ADD',

    };
};

/**
 * 
 * @returns {Subtract}
 */
export const subtract = () => {
    return {
        type: 'SUBTRACT',
    };
};

/**
 * 
 * @returns {Reset}
 */
export const reset = () => {
    return {
        type: 'RESET',
    };
};
