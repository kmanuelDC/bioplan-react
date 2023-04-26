import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getNoticias = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/noticias/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.noticiasGetAll, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}
export const getNoticiasById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/noticias/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.noticiasGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}