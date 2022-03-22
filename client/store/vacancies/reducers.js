// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import {

FETCH_VACANCIES_SUCCESS,
FETCH_VACANCIES_FAILED,

DELETE_VACANCIES_SUCCESS,
DELETE_VACANCIES_FAILED,

CREATE_VACANCIES_SUCCESS,
CREATE_VACANCIES_FAILED,
} from "./actions";

function vacancies(state = {
    vacancies: [],
    res: null,
}, action) {
    switch (action.type) {
        case FETCH_VACANCIES_SUCCESS:
        case DELETE_VACANCIES_SUCCESS:
            return Object.assign({}, state, {vacancies: action.data});
        case CREATE_VACANCIES_SUCCESS:
            return Object.assign({}, state, {vacancies: action.res});
        case FETCH_VACANCIES_FAILED:
        case DELETE_VACANCIES_FAILED:
        case CREATE_VACANCIES_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default vacancies
