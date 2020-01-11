import React from 'react';
import PropTypes from 'prop-types';
import { Article } from './Article';

class News extends React.Component {
  renderNews = () => {
    const { data } = this.props;

    if (!data.length) {
      return <p>К сожалению новостей нет</p>;
    }
    return data.map((item) => <Article key={item.id} data={item} />);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={'news__count'}>
            Всего новостей: {data.length}
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
