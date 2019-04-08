import React from 'react';
import { connect } from "react-redux";
import { getNews } from './../actions/news.actions';
import NewsComponent from '../components/news.component';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNews({
            language: this.props.defaultLanguage
        });
    }

    render() {
        let news = {};

        const newsState = this.props.news;

        if (newsState.loaded === true) {
            news = newsState.data;
        }

        console.log(`HomeContainer state updated`);
        console.log(newsState);
        console.log(`---`);

        return (
            <div id="home-container" className="container">
                <div className="text-center">
                    <h1>Welcome in newsletter!</h1>
                </div>

                <div>
                    {
                        newsState.loaded === true ? <NewsComponent news={news} /> : <span>Loading...</span>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    defaultLanguage: 'pl',
    news: state.news
});

const mapDisptachToProps = (dispatch, props) => ({
    getNews: ({ language }) => {
        return dispatch(getNews({ language }));
    }
});

export default connect(mapStateToProps, mapDisptachToProps)(HomeContainer);