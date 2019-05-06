import NewsAPI from './../api/news.api';

export const NewsTypes = {
    RECIVE_NEWS: 'NewsTypes.RECIVE_NEWS',
    SET_LANGUAGE: 'NewsTypes.SET_LANGUAGE'
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

export const setLanguage = ({
    language
}) => {
    return async (dispatch) => {
        dispatch({
            type: NewsTypes.SET_LANGUAGE,
            language
        });
    }
}