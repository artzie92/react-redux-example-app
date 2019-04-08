import React from 'react';
import './news.component.scss';

export default class NewsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const news = this.props.news;
        console.log(news);

        return (
            <div className="news-component">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Source</td>
                            <td>Content</td>
                            <td>Thumb</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            news.articles.map((item, index) => renderRow(item, index))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const renderRow = (item, index) => {
    return (
        <tr key={index}>
            <td>{item.author}</td>
            <td>{item.source.name}</td>
            <td>{item.content}</td>
            <td><a className="thumb" href={item.urlToImage}><img src={item.urlToImage} /></a></td>
        </tr>
    )
}