import axios from 'axios';

const URL = 'http://localhost:8000'

export default class Api {

    constructor() {
       this.baseUrl = URL;
    }

    call({url, method, data}) {
        return this.getToken().then(token => {
            if (!token) {
                throw 'Error while getting token';
            }
            return axios({
                url: this.baseUrl + url,
                validateStatus: false,
                method: method,
                /*headers: {
                    'Authorization': 'Bearer ' + token,
                },*/
                json: true,
                data: data,
                withCredentials: true,
            }).then(result => {
                return result.data;
            }).catch (error => {
                console.log(error);
            }) ;
        })
    }

    getToken() {
        return new Promise((resolve) => {
                //this.generateToken().then(token =>  {
                    //resolve(token);
                //});
                resolve(123);
        });
    }

    generateToken() {
        return axios({
            url: this.baseUrl  + '/token',
            validateStatus: false,
            method: 'GET',
            json: true,
            data: {},
            withCredentials:true,
        }).then(result => {
            return result.data.token;
        }).catch (error => {
            console.log(error);
        }) ;

    }


}
