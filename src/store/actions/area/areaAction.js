import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getArea = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/area/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.areaGetAll, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}
export const getAreaById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/area/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.areaGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}