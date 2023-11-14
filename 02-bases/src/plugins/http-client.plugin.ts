//const axios = require('axios');
import axios from 'axios';

export const httpClientPlugin = { //Patron adaptador para el fetch api
    get: async (url: string) => {
        const { data } = await axios(url);
        return data;
        
        //return await response.json();

    },

    post: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async(url: string) => {
        throw new Error('Not implemented');
    },



};

// module.exports = {
//     http: httpClientPlugin,
// };