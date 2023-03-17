import CONFIG from '../config';
import CONSTANTS from '../constants/consumerConst';

export const ConsumerAPI = async (api, type, body = null) => {
    return await consumerRestApi(CONFIG.API, api, type, body);
}

async function consumerRestApi(baseUrl, api, type, body = null) {
    let response = await fetch(`${baseUrl}${api}`, setHeaders(type, body))
    return await response.json();
}

function setHeaders(type, body) {
    switch (type) {
        case CONSTANTS.HTTP.GET:
            return { method: type, headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
        case CONSTANTS.HTTP.POST:
            return {
                method: type,
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
        case CONSTANTS.HTTP.PUT:
            return {
                method: type,
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
        case CONSTANTS.HTTP.DELETE:
            return {
                method: type,
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
        default:
            break;
    }
}
