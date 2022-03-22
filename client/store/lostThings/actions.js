// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";
import axios from 'axios';

export const FETCH_LOST_THINGS_SUCCESS = 'FETCH_LOST_THINGS_SUCCESS'
export const FETCH_LOST_THINGS_FAILED = 'FETCH_LOST_THINGS_FAILED'

export const DELETE_LOST_THINGS_SUCCESS = 'DELETE_LOST_THINGS_SUCCESS'
export const DELETE_LOST_THINGS_FAILED = 'DELETE_LOST_THINGS_FAILED'

export const CREATE_LOST_THINGS_SUCCESS = 'CREATE_LOST_THINGS_SUCCESS'
export const CREATE_LOST_THINGS_FAILED = 'CREATE_LOST_THINGS_FAILED'

const api = new Api();


export function fetchLostThings() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/lost-things', method: 'GET'}).then(res => {
                    if (res !== "User doesn't have rights to access this route") {
                        dispatch({type: FETCH_LOST_THINGS_SUCCESS, data: res});
                        resolve(res);
                    } else {
                        dispatch({type: FETCH_LOST_THINGS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: FETCH_LOST_THINGS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteLostThings(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/lost-things/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_LOST_THINGS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        console.log(res)

                        dispatch({type: DELETE_LOST_THINGS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_LOST_THINGS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createLostThings(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/lost-things', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_LOST_THINGS_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_LOST_THINGS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_LOST_THINGS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}