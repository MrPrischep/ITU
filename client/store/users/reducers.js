// Author: Pastushenko Vladislav
// Login: xpastu04

import {
SIGNUP_SUCCESS,
SIGNUP_FAILED,

LOGIN_SUCCESS,
LOGIN_FAILED,

VERIFY_USER_SUCCESS,
VERIFY_USER_FAILED,

LOOKUP_USER_IN_STORAGE_SUCCESS,
LOOKUP_USER_IN_STORAGE_FAILED,

GET_LOGGED_USER_SUCCESS,
GET_LOGGED_USER_FAILED,

FETCH_USERS_SUCCESS,
FETCH_USERS_FAILED,


DELETE_USER_SUCCESS,
DELETE_USER_FAILED,

EDIT_USER_SUCCESS,
EDIT_USER_FAILED,

LOGOUT_SUCCESS,
LOGOUT_FAILED,

CREATE_USER_SUCCESS,
CREATE_USER_FAILED,

} from "./actions";

function users(state = {
    users: [],
    res: null,
    savedLocalStorageHash: null,
    loggedUser: null,
    error: null
}, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
        case LOGOUT_SUCCESS:
        case VERIFY_USER_SUCCESS:
        case EDIT_USER_SUCCESS:
            return Object.assign({}, state, {res: action.res});

        case SIGNUP_FAILED:
        case LOGIN_FAILED:
        case LOGOUT_FAILED:    
        case VERIFY_USER_FAILED:
        case GET_LOGGED_USER_FAILED:
        case EDIT_USER_FAILED:
            return Object.assign({}, state, {error: action.error});

        case LOOKUP_USER_IN_STORAGE_SUCCESS:
            return Object.assign({}, state, {savedLocalStorageHash: action.hash});
        case LOOKUP_USER_IN_STORAGE_FAILED:
            return Object.assign({}, state, {savedLocalStorageHash: null, error: action.error});

        case GET_LOGGED_USER_SUCCESS:
            return Object.assign({}, state, {loggedUser: action.loggedUser});
        case FETCH_USERS_SUCCESS:
        case DELETE_USER_SUCCESS:
        case CREATE_USER_SUCCESS:
            return Object.assign({}, state, {users: action.data});
        case FETCH_USERS_FAILED:
        case CREATE_USER_FAILED:
        case DELETE_USER_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default users
