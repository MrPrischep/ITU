// Author: Kozhevnikov Dmitrii
// Login: xkozhe00

import Api from "../../Api";
import axios from 'axios';

export const FETCH_QUESTIONS_FROM_USERS_SUCCESS = 'FETCH_QUESTIONS_FROM_USERS_SUCCESS'
export const FETCH_QUESTIONS_FROM_USERS_FAILED = 'FETCH_QUESTIONS_FROM_USERS_FAILED'

export const DELETE_QUESTION_FROM_USER_SUCCESS = 'DELETE_QUESTION_FROM_USER_SUCCESS'
export const DELETE_QUESTION_FROM_USER_FAILED = 'DELETE_QUESTIONS_FROM_USER_FAILED'

export const CREATE_QUESTIONS_FROM_USER_SUCCESS = 'CREATE_QUESTIONS_FROM_USER_SUCCESS'
export const CREATE_QUESTIONS_FROM_USER_FAILED = 'CREATE_QUESTIONS_FROM_USER_FAILED'

const api = new Api();


export function fetchQuestionsFromUsers() {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/questions-from-users', method: 'GET'}).then(res => {
                    if (res !== "User doesn't have rights to access this route") {
                        dispatch({type: FETCH_QUESTIONS_FROM_USERS_SUCCESS, data: res});
                        resolve(res);
                    } else {
                        dispatch({type: FETCH_QUESTIONS_FROM_USERS_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: FETCH_QUESTIONS_FROM_USERS_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

export function deleteQuestionFromUser(id) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/questions-from-users/' + id, method: 'DELETE'}).then(res => {
                    if (res === "OK") {
                        dispatch({type: DELETE_QUESTION_FROM_USER_SUCCESS, res: res});
                        resolve(res);
                    } else {
                        console.log(res)

                        dispatch({type: DELETE_QUESTION_FROM_USER_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: DELETE_QUESTION_FROM_USER_FAILED, error: error});
                    reject(error);
                }
            })
    };
}



export function createQuestionFromUser(data) {
    return async (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                api.call({url: '/questions-from-users', method: 'POST', data: data}).then(res => {
                    if (res === "OK") {
                        dispatch({type: CREATE_QUESTIONS_FROM_USER_SUCCESS, data: res});
                        resolve(res);
                    }
                    else {
                        dispatch({type: CREATE_QUESTIONS_FROM_USER_FAILED, error: res});
                        reject(res);
                    }
                })
            } catch (error) {
                    dispatch({type: CREATE_QUESTIONS_FROM_USER_FAILED, error: error});
                    reject(error);
                }
            })
    };
}

