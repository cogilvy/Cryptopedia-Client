import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAllGames } from '../redux/actions';
import Game from '../components/Game'

class ActiveGamesContainer extends Component {

  state = {
    games: []
  }

  componentDidMount() {
    this.props.fetchAllGames()
  }

  render() {
    const now = new Date()
    return (
      <div className="game-container">
        {
          this.props.games.length > 1 ?
          this.props.games.map(game => {
            if (new Date(game.end) > now) {
              return <Game history={this.props.history} key={game.id} game={game} />
            }
          })
          :
          null
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  games: state.simulatorReducer.games
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllGames: () => dispatch(fetchAllGames())
})

export default connect(mapStateToProps, mapDispatchToProps)(ActiveGamesContainer);
