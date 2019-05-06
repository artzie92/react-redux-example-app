import axios from 'axios';

const API_KEY = '1c9d57ad60764233ac98b5b54c271bc0';
const API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`

export default {
    getNews: ({ language }) => {
        const url = `${API_URL}&country=${language}`;
        console.log('getNews api - request url:' + url);
        return axios.get(url)
    }
}

export const LANGUAGES = [
    {
        id: 'pl',
        name: 'polish'
    },
    {
        id: 'us',
        name: 'english'
    }
];