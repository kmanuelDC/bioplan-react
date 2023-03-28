import TYPES from '../types/types';

let initialState = {
    contactoslist: [],
    contactosid:[],
}

export const contactosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.contactosGetAll:
            return {
                ...state,
                contactoslist: payload
            }
        case TYPES.contactosGetById:
            return {
                ...state,
                contactosid: payload
            }
        default:
            return state;
    }
}