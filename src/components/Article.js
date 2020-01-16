import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  state = {
    visible: false,
  }

  handleReadMoreClick = (e) => {
    e.preventDefault();
    this.setState({ visible: true });
  }

  render() {
    const { data: { author, title, description } } = this.props;
    const { visible } = this.state;

    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{title}</p>
        {!visible && <a onClick={this.handleReadMoreClick} href="#readmore" className="news__readmore">Read more</a>}
        {visible && <p className="news__big-text">{description}</p>}
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export { Article };
