import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../redux/actions';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    this.props.openLoginContainer()
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png' /> Log-in to your account
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
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
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Button size="small" className="hover" onClick={this.props.changeLoginSignup}>{this.props.loginButtonText}</Button>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);
