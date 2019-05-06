import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import SelectionList from './../components/selection-list.component';
import { LANGUAGES } from './../api/news.api';
import { setLanguage } from './../actions/news.actions';

class SummaryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    componentDidMount() {
    }

    mapLanguagesToOptions(languages) {
        const array = [];

        for (let index = 0; index < languages.length; index++) {
            const lang = languages[index];
            array.push({
                id: lang.id,
                value: lang.name
            })
        }

        return array;
    }

    onLanguageChange(sender) {
        const { value } = sender.target;
        console.log(`On language change - ${value}`);
        this.props.setLanguage({ language: value })
    }

    render() {
        const state = this.props.news;
        return (
            <div className="row">
                <div className="col-md-6">
                    <p>Selected language: <strong>{state.selectedLanguage}</strong></p>
                </div>
                <div className="col-md-6">
                    <SelectionList items={this.mapLanguagesToOptions(this.props.languages)} onChangeCallback={this.onLanguageChange} />
                </div>
            </div>
        );
    }
}

SummaryContainer.propTypes = {
    news: PropTypes.shape({
        loaded: PropTypes.bool.isRequired,
        data: PropTypes.shape({
            articles: PropTypes.array
        })
    })
}

const mapStateToProps = (state, props) => ({
    news: state.news,
    languages: LANGUAGES
});

const mapDisptachToProps = (dispatch, props) => ({
    setLanguage: ({ language }) => {
        return dispatch(setLanguage({ language }));
    }
});

export default connect(mapStateToProps, mapDisptachToProps)(SummaryContainer);