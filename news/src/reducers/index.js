import { combineReducers } from 'redux';
import NewsReducer from './news.reducer';

const ApplicationReducer = combineReducers({
    news: NewsReducer
});

export default ApplicationReducer;