import React, { Component } from 'react';
import Controls from './Controls'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <NavLink className="controls-link" to="/">
          <div className="logo-container">
            <img
              className="logo"
              src="https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png"
              alt="logo"
            />
          <h3 style={{margin: "0% 0% 0% 6%"}}>Cryptopedia</h3>
          </div>
        </NavLink>
        <Controls handleLogout={this.props.handleLogout} openLoginContainer={this.props.openLoginContainer}/>
      </div>
    );
  }

}

export default NavBar;
