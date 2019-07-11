import React, { Component } from 'react';
import { Form, Button} from 'semantic-ui-react'

class SearchBarNews extends Component {

  render() {
    return (
      <div className="search-bar">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.props.handleChange} fluid placeholder='Search for topics, locations, & sources of news' name="filterInput" value={this.props.filterInput}/>
            <Button type='submit'>Search</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }

}

export default SearchBarNews;
