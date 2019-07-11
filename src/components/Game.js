import React, { Component, Fragment } from 'react';
import { Button, Header, Grid } from 'semantic-ui-react'
import Portfolio from './Portfolio'
import { connect } from 'react-redux'
import { createPortfolio, fetchAllPortfolios, fetchAllGames, determineProfileToView, deletePortfolio } from '../redux/actions'

class Game extends Component {

  state = {
    name: `Portfolio For: ${this.props.game.title}`,
    budget: this.props.game.budget,
    user_id: this.props.currentUser.id,
    game_id: this.props.game.id,
    openPortfolio: false,
    portfolioToView: {}
  }

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  joinGame = (event, portObj) => {
    event.preventDefault()
    this.props.createPortfolio(portObj)
    this.props.fetchAllGames()
  }

  componentDidMount() {
    this.props.fetchAllPortfolios()
  }

  openPortfolioContainer = () => {
    this.props.fetchAllGames()
    const portToView = this.props.game.portfolios.find(port => {
      return port.user.user_id === this.props.currentUser.id
    })
    this.props.determineProfileToView(portToView)
    this.props.history.push('/portfolio')
  }

  leaveGame = () => {
    const portToDelete = this.props.game.portfolios.find(port => {
      return port.user.user_id === this.props.currentUser.id
    })
    this.props.deletePortfolio(portToDelete)
    this.props.fetchAllGames()
  }

  render() {
    let startDate = new Date(this.props.game.start)
    let endDate = new Date(this.props.game.end)
    let now = new Date()
    return (
      <div className="game-card">
        {
          this.state.openPortfolio ?
          <Portfolio openPortfolioContainer={this.openPortfolioContainer} port={this.state.portfolioToView} />
          :
          <Grid>
            <Grid.Row>
              <Grid.Column width={9}>
                <div>
                  <Header size="huge">{this.props.game.title} </Header>
                  <h5 style={{margin: "0%"}}>Starting Budget: ${this.numberWithCommas(this.props.game.budget)}0</h5>
                  <span style={{fontSize: "100%", margin: "0%"}}>({startDate.toString().substring(0, 16)}-{endDate.toString().substring(0, 16)})</span>
                </div>
              </Grid.Column>
              <Grid.Column width={7}>
                <div>
                  <Header size="medium">Users in This Game</Header>
                  <ul>
                    {
                      this.props.game.users.length > 0 ?
                      this.props.game.users.map(user => {
                        return <li>{user.name}</li>
                      })
                      :
                      <p style={{color: "red"}}>There arent any users yet!</p>
                    }
                  </ul>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={3}>

              </Grid.Column>
              <Grid.Column width={6}>
                {
                  (this.props.game.users.find(user => {
                    return user.id === this.props.currentUser.id
                  })) !== undefined
                  ?
                  <div style={{display: "flex"}}>
                    <Button onClick={() => this.openPortfolioContainer()} color="grey">View Portfolio</Button>

                    <Button onClick={this.leaveGame} color="red">Leave Game</Button>
                  </div>
                  :
                  <Button size="large" onClick={(event) => this.joinGame(event, {name: this.state.name, budget: this.state.budget, user_id: this.state.user_id, game_id: this.state.game_id})} color="green">Join Game</Button>
                }
              </Grid.Column>
              <Grid.Column width={7}></Grid.Column>
            </Grid.Row>
          </Grid>
        }

      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.usersReducer.currentUser,
  portfolios: state.simulatorReducer.portfolios
})

const mapDispatchToProps = (dispatch) => ({
  createPortfolio: (data) => dispatch(createPortfolio(data)),
  deletePortfolio: (data) => dispatch(deletePortfolio(data)),
  fetchAllPortfolios: () => dispatch(fetchAllPortfolios()),
  fetchAllGames: () => dispatch(fetchAllGames()),
  determineProfileToView: (portfolioObj) => dispatch(determineProfileToView(portfolioObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
