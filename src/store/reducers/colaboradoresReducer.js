import TYPES from '../types/types';

let initialState = {
    colaboradores: [],
}

export const colaboradoresReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.colaboradoresGetList:
            return {
                ...state,
                colaboradores: payload
            }
        default:
            return state;
    }
}