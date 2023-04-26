import TYPES from '../types/types';

let initialState = {
    convocatoriaslist: [],
    convocatoriasid:[],
}

export const convocatoriasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.convocatoriasGetAll:
            return {
                ...state,
                convocatoriaslist: payload
            }
        case TYPES.convocatoriasGetById:
            return {
                ...state,
                convocatoriasid: payload
            }
        default:
            return state;
    }
}