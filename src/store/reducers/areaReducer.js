import TYPES from '../types/types';

let initialState = {
    areaList: [],
    areaid: 0
}

export const areaReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.areaGetList:
            return {
                ...state,
                area: payload
            }
        case TYPES.areaGetById:
            return {
                 ...state,
                 areaid: payload
                }
        default:
            return state;
    }
}