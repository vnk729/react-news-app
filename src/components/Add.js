import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Form, Button, Row, Col } from 'react-bootstrap';

class Add extends React.Component {
  state = {
    name: '',
    title: '',
    description: '',
    agree: false,
  }

  onBtnClickHandler = (e) => {
    e.preventDefault();
    const { name, title, description } = this.state;

    this.props.onAddNews({
      id: uniqueId(),
      author: name,
      title,
      description,
    });

    this.setState({ name: '', title: '', description: '' });
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  }

  handleCheckboxChange = (e) => {
    this.setState({ agree: e.currentTarget.checked });
  }

  validate = () => {
    const { name, title, agree } = this.state;
    return name.trim() && title.trim() && agree;
  }

  render() {
    const { name, title, description } = this.state;

    return (
      <Form>
        <Form.Group as={Row} controlId="name">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              onChange={this.handleChange}
              placeholder="Your name"
              value={name}
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" rows="2"
            id="title"
            onChange={this.handleChange}
            placeholder="Title news"
            value={title}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" rows="3"
            id="description"
            onChange={this.handleChange}
            placeholder="Description news"
            value={description}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formCheckbox">
          <Form.Check
            custom
            type="checkbox"
            onChange={this.handleCheckboxChange}
            label="I agree to terms"
          />
        </Form.Group>

        <Button onClick={this.onBtnClickHandler} disabled={!this.validate()}>
          Add news
        </Button>
      </Form>
    );
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired,
};

export { Add };
