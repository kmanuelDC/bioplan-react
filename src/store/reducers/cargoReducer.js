import TYPES from '../types/types';

let initialState = {
    cargoList: [],
    cargoid: 0
}

export const cargoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.cargoGetList:
            return {
                ...state,
                cargo: payload
            }
        case TYPES.cargoGetById:
            return {
                 ...state,
                 cargoid: payload
                }
        default:
            return state;
    }
}