import React, { Component } from 'react';
import { Grid, Message, Menu, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ActiveGamesContainer from './ActiveGamesContainer'
import PastGamesContainer from './PastGamesContainer'
import ResourcesContainer from './ResourcesContainer'
import InstructionsContainer from './InstructionsContainer'
import TipsContainer from './TipsContainer'
import BuySellContainer from './BuySellContainer'
import LoginSignupContainer from './LoginSignupContainer'
import NewGameForm from '../components/NewGameForm'
import {getProfileFetch, fetchAllPortfolios} from '../redux/actions';

class SimulatorContainer extends Component {

  state = { activeItem: 'Welcome' }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  renderComponent = (activeItem) => {
    switch (activeItem) {
      case "Active Competitions":
        return <ActiveGamesContainer history={this.props.history}/>
      case "Welcome":
        return <InstructionsContainer />
      case "Past Competitions":
        return <PastGamesContainer />
      case "Trading Tips":
        return <TipsContainer />
      default:
        return <p>How did you get here....</p>
    }
  }

  componentDidMount() {
    this.props.getProfileFetch()
    this.props.fetchAllPortfolios()
  }

  renderSideComp = (activeItem) => {
    switch (activeItem) {
      case "Active Competitions":
        return <NewGameForm />
      case "Welcome":
        return <ResourcesContainer />
      case "Trading Tips":
        return <ResourcesContainer />
      default:
        return <p></p>
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      this.props.currentUser.username ?
      <Grid className="apply-container">
        <Grid.Row>
          <Grid.Column width={3}>
            <div className="sidebar">
              <Menu size="large" vertical>
                <Menu.Item name='Welcome' active={activeItem === 'Welcome'} onClick={this.handleItemClick}>
                  <Header color="black">Welcome</Header>
                </Menu.Item>

                <Menu.Item name='Active Competitions' active={activeItem === 'Active Competitions'} onClick={this.handleItemClick}>
                  <Header color="black">Active Competitions</Header>
                </Menu.Item>

                <Menu.Item name='Past Competitions' active={activeItem === 'Past Competitions'} onClick={this.handleItemClick}>
                  <Header color="black">Past Competitions</Header>
                </Menu.Item>

                <Menu.Item name='Trading Tips' active={activeItem === 'Trading Tips'} onClick={this.handleItemClick}>
                  <Header color="black">Trading Tips</Header>
                </Menu.Item>
              </Menu>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{marginBottom: "1%"}}></div>
            <Header style={{textDecoration: "underline"}}>{this.state.activeItem === "Welcome" ? "Welcome To The Cryptopedia Simulator" : this.state.activeItem}</Header>
            {this.renderComponent(this.state.activeItem)}
          </Grid.Column>
            <Grid.Column width={5}>
              {this.renderSideComp(this.state.activeItem)}
            </Grid.Column>
          }
        </Grid.Row>
      </Grid>
      :
      <div className="sim-container">
        <Message style={{textAlign: "center", marginTop: "2%", marginBottom: "2%"}}>You must be signed in to use the simulator!</Message>
        {
          this.props.openLogin ?
          <LoginSignupContainer openLoginContainer={this.props.openLoginContainer}/>
          :
          null
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.usersReducer.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  fetchAllPortfolios: () => dispatch(fetchAllPortfolios())
})

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorContainer);
