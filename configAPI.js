import { BASE_API } from './endpoint.js';

export const getKanbanBacklog = {
    method: 'get', 
    url: `${BASE_API}/kanban_backlog/`,
    id: null,
    params: {project_name: 'test'},
    body: null,
    headders: null
}

export const patchCardFile = {
    method: 'patch', 
    url: `${BASE_API}/card_files/9/`,
    id: null,
    params: null,
    body: {set_cover: true},
    headders: null
}

export const createQuestion = {
    method: 'post', 
    url: `${BASE_API}/inspection_question/`,
    id: null,
    params: null,
    body: {
        document_id: 95,
        question: "what",
        description: "test postman.",
        section_order: 3,
        section_title: "holy.",
        subsection: 0,
        type: 4,
        custom_type: null,
        result: "shit",
        pdf_result: null,
        comment: "wtf",
        responder: 1
    },
    headders: null
}