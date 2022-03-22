// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import {
    FETCH_STOPS_SUCCESS,
    FETCH_STOPS_FAILED,

    CREATE_STOP_SUCCESS,
    CREATE_STOP_FAILED,

    DELETE_STOP_SUCCESS,
    DELETE_STOP_FAILED,
} from "./actions";

function stops(state = {
    stops: [],
}, action) {
    switch (action.type) {
        case FETCH_STOPS_SUCCESS:
            return Object.assign({}, state, {stops: action.data});
        case FETCH_STOPS_FAILED:
            return Object.assign({}, state, {error: action.error});
        case CREATE_STOP_SUCCESS:
        case DELETE_STOP_SUCCESS:
            return Object.assign({}, state, {stops: action.res});
        case CREATE_STOP_FAILED:
        case DELETE_STOP_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default stops
