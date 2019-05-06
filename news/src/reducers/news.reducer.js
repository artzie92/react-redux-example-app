import { NewsTypes } from './../actions/news.actions';

const defaultState = {
    loaded: false,
    data: {},
    selectedLanguage: null
};

export default (state = defaultState, action) => {

    switch (action.type) {
        case NewsTypes.RECIVE_NEWS:
            console.log('News reducer - RECIVE_NEWS');
            return {
                ...state,
                loaded: true,
                data: action.data
            }
        case NewsTypes.SET_LANGUAGE:
            return {
                ...state,
                selectedLanguage: action.language
            }
    }

    return state;
};