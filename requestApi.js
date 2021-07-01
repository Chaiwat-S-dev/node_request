import { authenApi } from './auth.js';
import { BASE_API } from './endpoint.js';
import axios from 'axios';

const auth = new authenApi()

export class requestApi {

    constructor(url, id, params, body, headders) {
        this.id = id ? id : '';
        this.url = url ? url : null;
        this.body = body ? body : null;
        this.params = params ? params : null;
        this.headders = headders ? headders : null;
    }

    // request = async (method, url, id, params, body, headders) => {
        // const { method, url, id, params, body, headders } = param
    request = async (paramObj) => {
        const { method, url, id, params, body, headders } = paramObj
        if(!method)
            throw 'request error require parameter method';

        this.url = url ? url : this.url;
        this.body = body ? body : this.body;
        this.params = params ? params : this.params;

        if(id)
            this.url = `${url ? url : this.url}${id ? id : this.id}/`;

        const res = await auth.post().then((res) => {
            console.log('get res token: ', res.data.token.access_token);
            return {
                'Authorization': `Bearer ${res.data.token.access_token}`,
                'Content-type': 'application/json'
            }
            }).catch((error) => {
                console.log('[Authentication] error: ' + error.message)
                return null;
            });

        this.headders = headders ? headders : this.headders ? this.headders : res;
        // console.log('check headder: ', this.headders);
        // console.log('check method: ', method);
        // console.log('check this.url: ', this.url);
        // console.log('check this.body: ', this.body);
        return axios({
            method: method,
            url: this.url,
            headers: this.headders, 
            data: this.body,
            params: this.params
        });
    }

    // post = (url, id, params, body, headders) => {
    //     this.url = `${url ? url : this.url}/${id ? id : this.id}/`;
    //     this.body = body ? body : this.body;
    //     this.params = params ? params : this.params;
    //     this.headders = headders ? headders : this.headders;

    //     return axios({
    //         method: 'post',
    //         url: this.url,
    //         headers: this.headders, 
    //         data: this.body,
    //         params: this.params
    //       });
    // }

    // get = (url, id, params, body, headders) => {
    //     this.url = `${url ? url : this.url}/${id ? id : this.id}/`;
    //     this.body = body ? body : this.body;
    //     this.params = params ? params : this.params;
    //     this.headders = headders ? headders : this.headders;

    //     return axios({
    //         method: 'get',
    //         url: this.url,
    //         headers: this.headders, 
    //         data: this.body,
    //         params: this.params
    //       });
    // }
}

// let reqApi = async () => {

//     const res = await auth.post().then((res) => {
//                                     return res.data.token
//                                     }).catch(error => {
//                                         console.log('Some promise rejected: ' + error.message)
//                                         return null;
//                                     })

//     axios.get(`${BASE_API}/kanban/`, {
//         headers: {
//             'Authorization': `Bearer ${res.access_token}`,
//             'Content-type': 'application/json'
//         },
//         params: {
//             project_name: 'test'
//         }
//     }).then(res => {
//         console.log(`get response: `, res.data)
//     }).catch(error => {
//         console.log(`Found error: ${error.message}`)
//     })
// }

// reqApi();