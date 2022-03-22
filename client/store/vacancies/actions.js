// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";
import axios from 'axios';

export const FETCH_VACANCIES_SUCCESS = 'FETCH_VACANCIES_SUCCESS'
export const FETCH_VACANCIES_FAILED = 'FETCH_VACANCIES_FAILED'

export const DELETE_VACANCIES_SUCCESS = 'DELETE_VACANCIES_SUCCESS'
export const DELETE_VACANCIES_FAILED = 'DELETE_VACANCIES_FAILED'

export const CREATE_VACANCIES_SUCCESS = 'CREATE_VACANCIES_SUCCESS'
export const CREATE_VACANCIES_FAILED = 'CREATE_VACANCIES_FAILED'

const api = new Api();


export function fetchVacancies() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/vacancies', method: 'GET'}).then(res => {
                    if (res !== "User doesn't have rights to access this route") {
                        dispatch({type: FETCH_VACANCIES_SUCCESS, data: res});
                        resolve(res);
                    } else {
                        dispatch({type: FETCH_VACANCIES_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: FETCH_VACANCIES_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteVacancy(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/vacancies/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_VACANCIES_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        console.log(res)

                        dispatch({type: DELETE_VACANCIES_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_VACANCIES_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function createVacancy(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/vacancies', method: 'POST', data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_VACANCIES_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        dispatch({type: CREATE_VACANCIES_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_VACANCIES_FAILED, error: error});
                    reject(error);
                }
            })
    };
}