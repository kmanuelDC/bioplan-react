import TYPES from '../types/types';

let initialState = {
    noticiaslist: [],
}

export const noticiasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.noticiasGetAll:
            return {
                ...state,
                noticiaslist: payload
            }
        default:
            return state;
    }
}