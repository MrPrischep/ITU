// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";

export const FETCH_STOPS_SUCCESS = 'FETCH_STOPS_SUCCESS'
export const FETCH_STOPS_FAILED = 'FETCH_STOPS_FAILED'

export const CREATE_STOP_SUCCESS = 'CREATE_STOP_SUCCESS'
export const CREATE_STOP_FAILED = 'CREATE_STOP_FAILED'

export const DELETE_STOP_SUCCESS = 'DELETE_STOP_SUCCESS'
export const DELETE_STOP_FAILED = 'DELETE_STOP_FAILED'

const api = new Api();

export function fetchStops() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/stops', method: 'GET'}).then(res => {
                    dispatch({type: FETCH_STOPS_SUCCESS, data: res});
                    resolve(res);
                })
            } catch (error) {
                    dispatch({type: FETCH_STOPS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createStop(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/stops', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_STOP_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_STOP_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_STOP_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteStop(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/stops/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_STOP_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: DELETE_STOP_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_STOP_FAILED, error: error});
                    reject(error);
                }
            })
    };
}