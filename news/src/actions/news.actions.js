import NewsAPI from './../api/news.api';

export const NewsTypes = {
    RECIVE_NEWS: 'NewsTypes.RECIVE_NEWS'
}


function reciveNews(data) {
    return {
        type: NewsTypes.RECIVE_NEWS,
        data
    }
}

export const getNews = ({
    language
}) => {
    return async (dispatch, getState) => {
        console.log('getNews action')
        const response = await NewsAPI.getNews({ language });
        dispatch(reciveNews(response.data));
    }
}