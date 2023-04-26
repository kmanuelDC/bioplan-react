import TYPES from '../types/types';

let initialState = {
    noticiaslist: [],
    noticiasid:[],
}

export const noticiasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.noticiasGetAll:
            return {
                ...state,
                noticiaslist: payload
            }
        case TYPES.noticiasGetById:
            return {
                ...state,
                noticiasid: payload
            }
        default:
            return state;
    }
}