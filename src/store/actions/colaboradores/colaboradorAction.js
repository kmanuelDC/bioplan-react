import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getColaboradores = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/colaboradores/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.colaboradoresGetList, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}

export const getColaboradorById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/colaboradores/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.colaboradoresGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}