import { URL_AUTH } from './endpoint.js';
import axios from 'axios';
// const axios = require('axios');

const USER_NAME = 'kenkent122@gmail.com';
const PASSWORD = 12345678;
const GRANT_TYPE = 'password';
const CLIENT_ID = 'Ii42L0k8Oz886Lx5fb4No1DBaJgVp76uobb9DGw1';
const CLIENT_SECRET = 'lWeOmsDJFmOX9UtFH6UFBF8AM69eKr0i8ZTJtQF9o7t6TIQmLa9rHjpONIMK0EqfwkhmRfiXNCbhStnxrNwGem9v4cqTJ2CJyRAJB9gXxZFsnH9lut16DX7Q835yLIBY';

export class authenApi {

    constructor(url = URL_AUTH, username = USER_NAME, password = PASSWORD, grant_type = GRANT_TYPE, client_id = CLIENT_ID, client_secret = CLIENT_SECRET) {
        this.url = url;
        this.username = username;
        this.password = password;
        this.grant_type = grant_type;
        this.client_id = client_id;
        this.client_secret = client_secret;
    }

    parseQurystring = (obj) => { return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&'); }

    post = (body, params, id, headers) => {
        this.body = body ? body : {
            username: this.username,
            password: this.password,
            grant_type: this.grant_type,
            client_id: this.client_id,
            client_secret: this.client_secret
        };
        
        this.params = params ? params : null;

        if(id) this.url = `${this.url}${id}`;

        this.headders = headers ? headers : {
            'Content-Type' : 'application/x-www-form-urlencoded'
        }

        return axios({
            method: 'post',
            url: this.url,
            headers: this.headders, 
            data: this.parseQurystring(this.body),
            params: this.params
        });
    }
}

// let auth = new authenApi();

// auth.post();

// var data = {
//     username: USER_NAME,
//     password: PASSWORD,
//     grant_type: GRANT_TYPE,
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET
// }
// // console.log(typeof data)
// // console.log(data)
// // console.log(JSON.stringify(data))
// var queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
// console.log(`check data params: ${queryString}`)
// // var dataString = JSON.stringify(data);
// axios({
//     method: 'post',
//     url: 'http://localhost:8000/api/o/token/',
//     headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded'
//         },
//     data: queryString, 
//     // params: {
//     //     username: USER_NAME,
//     //     password: PASSWORD,
//     //     grant_type: GRANT_TYPE,
//     //     client_id: CLIENT_ID,
//     //     client_secret: CLIENT_SECRET
//     // }
//   }).then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });