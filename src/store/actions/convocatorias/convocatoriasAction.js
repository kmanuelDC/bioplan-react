import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getConvocatorias = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/convocatorias/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.convocatoriasGetAll, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}
export const getConvocatoriasById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/convocatorias/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.convocatoriasGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}