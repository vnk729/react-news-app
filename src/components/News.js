import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';
import { uniqueId } from 'lodash';

class News extends React.Component {
  renderNews = () => {
    const { data } = this.props;

    if (!data.length) {
      return <p>No news</p>;
    }

    return data.map((item) => {
      if (!item.author) {
        item.author = 'no name';
      }
      return <Article key={uniqueId()} data={item} />
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={'news__count'}>
            Total news: {data.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
};

export { News };
