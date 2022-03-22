// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import {

FETCH_FAQS_SUCCESS,
FETCH_FAQS_FAILED,

DELETE_FAQS_SUCCESS,
DELETE_FAQS_FAILED,

CREATE_FAQS_SUCCESS,
CREATE_FAQS_FAILED,
} from "./actions";

function FAQs(state = {
    faqs: [],
    res: null,
}, action) {
    switch (action.type) {
        case FETCH_FAQS_SUCCESS:
        case DELETE_FAQS_SUCCESS:
            return Object.assign({}, state, {faqs: action.data});
        case CREATE_FAQS_SUCCESS:
            return Object.assign({}, state, {faqs: action.res});
        case FETCH_FAQS_FAILED:
        case DELETE_FAQS_FAILED:
        case CREATE_FAQS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default FAQs
