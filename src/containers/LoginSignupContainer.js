import React, { Component } from 'react';
import Signup from '../components/Signup'
import Login from '../components/Login'


class LoginSignupContainer extends Component {

  state = {
    loginButtonText: "Sign-Up",
    loginMessage: "New to us?",
    loginSignup: false
  }

  changeLoginSignup = () => {
    if (this.state.loginButtonText === "Login") {
      this.setState({
        loginSignup: !this.state.loginSignup,
        loginButtonText: "Sign-Up",
        loginMessage: "Already have any account?"
      })
    } else {
      this.setState({
        loginSignup: !this.state.loginSignup,
        loginButtonText: "Login",
        loginMessage: "Already have any account?"
      })
    }
  }

  render() {
    return (
      <div className="login-signup">
        {
          this.state.loginSignup ?
          <Signup
            loginButtonText={this.state.loginButtonText}
            loginMessage={this.state.loginMessage}
            changeLoginSignup={this.changeLoginSignup}
            openLoginContainer={this.props.openLoginContainer}
          />
          :
          <Login
            loginButtonText={this.state.loginButtonText}
            loginMessage={this.state.loginMessage}
            changeLoginSignup={this.changeLoginSignup}
            openLoginContainer={this.props.openLoginContainer}
          />
        }
      </div>
    );
  }

}


export default LoginSignupContainer;
