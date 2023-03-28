import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getProyectos = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/proyectos/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.proyectosGetAll, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}
export const getProyectosById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/proyectos/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.proyectosGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}