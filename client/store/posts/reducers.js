// Author: Pastushenko Vladislav
// Login: xpastu04

import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILED,
} from "./actions";

function posts(state = {
    posts: [],
}, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return Object.assign({}, state, {posts: action.data});
        case FETCH_POSTS_FAILED:
            return Object.assign({}, state, {error: action.error});
        default:
            return Object.assign({}, state);
    }
}

export default posts
