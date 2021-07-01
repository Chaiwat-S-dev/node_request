import { requestApi } from './requestApi.js';
import './configAPI.js';
import { createQuestion } from './configAPI.js';

const rest = new requestApi();
let index = 125;
const limit_loop = 130;

let callAPI = () => {
    console.log(`check index: ${index}`);
    index += 1;
    let { question , section_order } = createQuestion.body;
    question = `what ${index}`
    section_order = index
    createQuestion.body.question = question;
    createQuestion.body.section_order = section_order;
    console.log(`check new body question: ${createQuestion.body.question}`);

    rest.request(createQuestion)
    .then((res) => {
        console.log(`resquest api get response ${index}: ${res.status}`);
        // console.log(res.status);
        // let result = res.data;
        // console.log(result);
        // let i;
        // for(i in result) {
        //     console.log(result[i]);
        // }
    }).catch((error) => {
        console.log(`resquest api error : ${error}`);
        console.log(error.response.data);
    });

    if (index >= limit_loop) {
        console.log(`Cancel interval time call API`);
        clearInterval(callApiInterval);
    }
}

let callApiInterval = setInterval(callAPI, 1000);
callAPI();


// for(let i = 11; i < 14; i++)
//     callAPI(i);
// const auth = new authenApi()

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

