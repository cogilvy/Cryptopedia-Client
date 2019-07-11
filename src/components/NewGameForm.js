import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react'
import { createGameFetch, fetchAllGames } from '../redux/actions'
import { connect } from 'react-redux'

class NewGameForm extends Component {

  state = {
    title: "",
    start: "",
    end: "",
    budget: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event, gameObj) => {
    event.preventDefault()
    this.props.createGameFetch(gameObj)
  }
  render() {
    return (
      <div className="new-game-form">
        <Form onSubmit={(event) => this.handleSubmit(event, this.state)}>
          <Header style={{textAlign: "center", textDecoration: "underline"}}>Create A New Competition</Header>
          <Form.Field>
            <label>Competition Title</label>
            <input onChange={this.handleChange} placeholder='Title' name='title' />
          </Form.Field>
          <Form.Field>
            <label>Starting Budget($$$)</label>
            <input onChange={this.handleChange} type="number" placeholder='Budget' name='budget'/>
          </Form.Field>
          <Form.Field>
            <label>Start Date</label>
            <input onChange={this.handleChange} type="date" name='start'/>
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <input onChange={this.handleChange} type="date" name='end'/>
          </Form.Field>
          <Button fluid color="green" type='submit'>Create Competition</Button>
        </Form>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  createGameFetch: (gameObj) => dispatch(createGameFetch(gameObj)),
  fetchAllGames: () => dispatch(fetchAllGames())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewGameForm);
