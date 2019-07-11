import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfileFetch, logoutUser} from './redux/actions';
import NewsContainer from './containers/NewsContainer';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import ShowCrypto from './components/ShowCrypto';
import LoginSignupContainer from './containers/LoginSignupContainer';
import CryptoContainer from './containers/CryptoContainer';
import SimulatorContainer from './containers/SimulatorContainer';
import './App.css'
import { Route, Switch } from 'react-router-dom'


class App extends Component {

  state = {
    openLogin: false
  }

  openLoginContainer = () => {
    this.setState({
      openLogin: !this.state.openLogin
    })
  }

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  handleLogout = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
  }

  render() {
    return (
      <div className="App">
        <img className="source-image" src="https://images.unsplash.com/photo-1518544648563-3d99717dbe95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"></img>
        <NavBar handleLogout={this.handleLogout} openLoginContainer={this.openLoginContainer}/>
        {
          this.state.openLogin ?
          <LoginSignupContainer openLoginContainer={this.openLoginContainer}/>
          :
          null
        }
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/news" component={NewsContainer} />
          <Route
            exact path='/cryptos'
            render={(props) => <CryptoContainer {...props} />}
          />
          <Route
            path='/cryptos/:id'
            render={(props) => <ShowCrypto {...props} />}
          />
          <Route
            path='/simulator'
            render={(props) => <SimulatorContainer {...props} openLogin={this.state.openLogin} openLoginContainer={this.openLoginContainer} />}
          />
          <Route
            path='/portfolio'
            render={(props) => <Portfolio {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.usersReducer.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
