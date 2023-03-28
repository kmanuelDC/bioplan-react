import CONSTANTS from '../../../constants/consumerConst';
import { ConsumerAPI } from '../../../consumer/consumer';
import TYPES from '../../types/types';

export const getContactos = () => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/contactos/get/all`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.contactosGetList, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}

export const getContactoById = (id) => {
    return async (dispatch) => {
        try {
            const res = await ConsumerAPI(`/bioplan/contactos/get/:${id}`, CONSTANTS.HTTP.GET, {});
            //console.log(res)
            dispatch({ type: TYPES.contactosGetById, payload: res.data });
        } catch (err) {
            console.log('Profile actions:', err);
        };
    }
}