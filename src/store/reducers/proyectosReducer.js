import TYPES from '../types/types';

let initialState = {
    proyectoslist: [],
    proyectosid:[],
}

export const proyectosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.proyectosGetAll:
            return {
                ...state,
                proyectoslist: payload
            }
        case TYPES.proyectosGetById:
            return {
                ...state,
                proyectosid: payload
            }
        default:
            return state;
    }
}