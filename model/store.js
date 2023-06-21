import { Action } from "./actions.js";
import { reducer } from "./reducers.js";

export const payload = {};

/**
 * @typedef {object} State
 * @prop {'Add' | 'Subtract' | 'Reset' | 'Idle'} phase
 * @prop {number} count
 */

export const State = {};

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch 
 * @param {Action} action
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscription 
 * @param {State} prev
 * @param {State} next
 */

/**
 * @type {Array<Subscription>}
 */
let subscribers = [];

/**
 * @type {Array<State>}
 */
const states = [ {  
    phase: 'Idle',
    count: 0
    },
];

/**
 * @return {State}
 */
export const getState = () => {
    return Object.freeze({ ...states[0] })  //adds a new state to the front of array
}

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action);
    subscribers.forEach((item) => item(prev, next))
    
    states.unshift(next)
};

/**
 * 
 * @param {Subscription} subscription 
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item != subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler);
        subscribers = newSubscribers;
    }
    return unsubscribe
}

