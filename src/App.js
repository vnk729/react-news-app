import React from 'react';
import { Add } from './components/Add';
import { News } from './components/News';
import './App.css';

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (!Array.isArray(state.news)) {
      return null;
    }

    const nextFilteredNews = [...state.news];
    nextFilteredNews.forEach((item) => {
      if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
        item.bigText = 'СПАМ';
      }
    });

    return { filteredNews: nextFilteredNews };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3000/data/newsData.json')
      .then((res) => res.json())
      .then((data) => setTimeout(() => {
        this.setState({ news: data, isLoading: false });
      }, 1000));
  }

  handleAddNews = (data) => {
    const { news } = this.state;
    const nextNews = [data, ...news];
    this.setState({ news: nextNews });
  }

  render() {
    const { news, isLoading } = this.state;

    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
      </React.Fragment>
    );
  }
}

export default App;
