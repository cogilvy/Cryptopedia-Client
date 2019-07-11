import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../redux/actions';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


class Signup extends Component {

  state = {
    username: "",
    password: "",
    name: "",
    premium: false,
    wins: 0
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
    this.props.openLoginContainer()
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png' /> Create an account
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input
                onChange={this.handleChange}
                fluid
                icon='user'
                iconPosition='left'
                name="name"
                placeholder='Full Name'
              />
              <Form.Input
                onChange={this.handleChange}
                fluid
                icon='at'
                iconPosition='left'
                name="username"
                placeholder='Username'
              />
              <Form.Input
                onChange={this.handleChange}
                fluid
                icon='lock'
                iconPosition='left'
                name="password"
                placeholder='Password'
                type='password'
              />
              <Button color='teal' fluid size='large'>
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Button size="small" className="hover" onClick={this.props.changeLoginSignup}>{this.props.loginButtonText}</Button>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: (userInfo) => {
    dispatch(userPostFetch(userInfo))
  }
})

export default connect(null, mapDispatchToProps)(Signup);
