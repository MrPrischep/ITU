// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";
import axios from 'axios';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'

export const DELETE_NEWS_SUCCESS = 'DELETE_NEWS_SUCCESS'
export const DELETE_NEWS_FAILED = 'DELETE_NEWS_FAILED'

export const CREATE_NEWS_SUCCESS = 'CREATE_NEWS_SUCCESS'
export const CREATE_NEWS_FAILED = 'CREATE_NEWS_FAILED'

const api = new Api();


export function fetchNews() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/news', method: 'GET'}).then(res => {
                    dispatch({type: FETCH_NEWS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_NEWS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function fetchNewsById(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/news/' + id , method: 'GET'}).then(res => {
                    dispatch({type: FETCH_NEWS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_NEWS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteNews(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/news/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_NEWS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        console.log(res)

                        dispatch({type: DELETE_NEWS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_NEWS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createNews(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/news', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_NEWS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_NEWS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_NEWS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}