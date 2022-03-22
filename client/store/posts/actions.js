// Author: Pastushenko Vladislav
// Login: xpastu04

import Api from "../../Api";
import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

const api = new Api();

export function fetchPosts() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/posts', method: 'GET'}).then(res => {
                    dispatch({type: FETCH_POSTS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_POSTS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

