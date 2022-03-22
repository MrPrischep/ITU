// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";
import axios from 'axios';

export const FETCH_FAQS_SUCCESS = 'FETCH_FAQS_SUCCESS'
export const FETCH_FAQS_FAILED = 'FETCH_FAQS_FAILED'

export const DELETE_FAQS_SUCCESS = 'DELETE_FAQS_SUCCESS'
export const DELETE_FAQS_FAILED = 'DELETE_FAQS_FAILED'

export const CREATE_FAQS_SUCCESS = 'CREATE_FAQS_SUCCESS'
export const CREATE_FAQS_FAILED = 'CREATE_FAQS_FAILED'

const api = new Api();


export function fetchFAQs() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/faqs', method: 'GET'}).then(res => {
                    if (res !== "User doesn't have rights to access this route") {
                        dispatch({type: FETCH_FAQS_SUCCESS, data: res});
                        resolve(res);
                    } else {
                        dispatch({type: FETCH_FAQS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: FETCH_FAQS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteFAQs(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/faqs/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_FAQS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        console.log(res)

                        dispatch({type: DELETE_FAQS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_FAQS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createFAQs(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/faqs', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_FAQS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_FAQS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_FAQS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}