import TYPES from '../types/types';

let initialState = {
    colaboradores: [],
    colaboradorid: 0
}

export const colaboradoresReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.colaboradoresGetList:
            return {
                ...state,
                colaboradores: payload
            }
        case TYPES.colaboradorid:
            return {
                 ...state,
                coladoradorid: payload
                }
        default:
            return state;
    }
}