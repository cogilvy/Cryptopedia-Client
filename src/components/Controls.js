import React from 'react'
import {connect} from 'react-redux';
import { fetchNewsArticles } from '../redux/actions'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class Controls extends React.Component {
  render(){
    return (
      <div className="controls">
        <button>
          <NavLink className="controls-link" to="/simulator">
            <img className="button-icon" src="https://image.flaticon.com/icons/svg/1875/1875035.svg" alt="icon"/><br/>
            Simulator
          </NavLink>
        </button>
        <button>
          <NavLink onClick={() => this.props.fetchNewsArticles()} className="controls-link" to="/news">
            <img className="button-icon" src="https://image.flaticon.com/icons/svg/784/784685.svg" alt="icon"/><br/>
            News
          </NavLink>
        </button>
        <button>
          <NavLink className="controls-link" to="/cryptos">
            <img className="button-icon" src="https://cdn3.iconfinder.com/data/icons/bitcoin-cryptocurrency-mining/100/bitcoin-07-512.png" alt="icon"/><br/>
            Cryptos
          </NavLink>
        </button>
        {
          this.props.currentUser.username ?
          <button>
            <img className="button-icon" src="https://image.flaticon.com/icons/png/128/126/126486.png" alt="icon"/><br/>
            <Dropdown text={this.props.currentUser.name}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.props.handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </button>
          :
          <button onClick={() => this.props.openLoginContainer()}>
            <img className="button-icon" src="https://image.flaticon.com/icons/png/128/126/126486.png" alt="icon"/><br/>
            Signup/Login
          </button>
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  currentUser: state.usersReducer.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
