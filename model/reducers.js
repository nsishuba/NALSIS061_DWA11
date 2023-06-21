import { State } from "./store.js";
import { Action } from "./actions.js";

/**
 * 
 * @param {State} state 
 * @param {Action} action 
 * @returns {State}
 */
export const reducer = (state, action) => {
    const num = state.count; 
    switch (action.type) {
        case "ADD": {
            return {
                ...state,
                phase: 'Add',
                count: num + 1
            }
        };

        case "SUBTRACT": {
            return {
                ...state,
                phase: 'Subtract',
                count: num - 1
            };
        };

        case "RESET": {
            return {
                ...state,
                phase: 'Reset',
                count: 0
            };
        };

        default: return state;
    
    };
};