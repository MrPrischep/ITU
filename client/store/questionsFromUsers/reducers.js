// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import {

FETCH_QUESTIONS_FROM_USERS_SUCCESS,
FETCH_QUESTIONS_FROM_USERS_FAILED,

DELETE_QUESTION_FROM_USER_SUCCESS,
DELETE_QUESTION_FROM_USER_FAILED,

CREATE_QUESTIONS_FROM_USER_SUCCESS,
CREATE_QUESTIONS_FROM_USER_FAILED,

} from "./actions";

function questionsFromUsers(state = {
    questionsFromUsers: [],
    res: null,
    error: null
}, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_FROM_USERS_SUCCESS:
        case DELETE_QUESTION_FROM_USER_SUCCESS:
            return Object.assign({}, state, {questionsFromUsers: action.data});
        case CREATE_QUESTIONS_FROM_USER_SUCCESS:
            return Object.assign({}, state, {res: action.data});
        case CREATE_QUESTIONS_FROM_USER_FAILED:
        case FETCH_QUESTIONS_FROM_USERS_FAILED:
        case DELETE_QUESTION_FROM_USER_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default questionsFromUsers
