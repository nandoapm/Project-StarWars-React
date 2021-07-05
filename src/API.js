
import * as axios from 'axios';
require('dotenv/config');

let API = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    responseType: "json"
});

let CHARACTERS = axios.create({
    baseURL: process.env.REACT_APP_API_CHARACTERS,
    responseType: "json"
});

export {
    API,
    CHARACTERS
};
