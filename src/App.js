import React from 'react';
import { Add } from './components/Add';
import { News } from './components/News';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './App.css';

class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=189750e5489a40ce8a2c7b5f95ae1280')
      .then((res) => res.json())
      .then((data) => setTimeout(() => {
        console.log(data.articles);
        this.setState({ news: data.articles, isLoading: false });
      }, 1000));
  }

  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  }

  render() {
    const { news, isLoading } = this.state;

    return (
      <Container>
        <Add onAddNews={this.handleAddNews} />
        <Row>
          <h3>News</h3>
        </Row>
        <Row>
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
          {Array.isArray(news) && <News data={news} />}
        </Row>
      </Container>
    );
  }
}

export default App;
