import React from 'react';
import { connect } from "react-redux";
import { getNews, setLanguage } from './../actions/news.actions';
import NewsComponent from '../components/news.component';
import SummaryContainer from './summary.container';
import PropTypes from 'prop-types';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getNews = this.getNews.bind(this);
    }

    componentDidMount() {
        this.getNews();
        this.props.setLanguage({ language: this.props.defaultLanguage })
    }

    getNews() {
        this.props.getNews({
            language: this.props.news.selectedLanguage ? this.props.news.selectedLanguage : this.props.defaultLanguage
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
                <div className="row">
                    <div className="text-center col-md-12">
                        <h1>Welcome in newsletter!    <button onClick={this.getNews} className="btn btn-danger">Update news</button></h1>
                    </div>
                    <div className="col-md-12">
                        <SummaryContainer />
                    </div>
                    <div className="col-md-12">
                        {
                            newsState.loaded === true ? <NewsComponent news={news} /> : <span>Loading...</span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    defaultLanguage: PropTypes.string.isRequired,
    news: PropTypes.shape({
        loaded: PropTypes.bool.isRequired,
        data: PropTypes.shape({
            articles: PropTypes.array
        })
    })
}

const mapStateToProps = (state, props) => ({
    defaultLanguage: 'pl',
    news: state.news
});

const mapDisptachToProps = (dispatch, props) => ({
    getNews: ({ language }) => {
        return dispatch(getNews({ language }));
    },
    setLanguage: ({ language }) => {
        return dispatch(setLanguage({ language }));
    }
});

export default connect(mapStateToProps, mapDisptachToProps)(HomeContainer);