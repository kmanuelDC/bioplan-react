import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getCargo = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/cargo/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.cargoGetAll, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}
export const getCargoById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/cargo/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.cargoGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}