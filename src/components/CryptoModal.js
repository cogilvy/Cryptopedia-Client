import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAllGames, getPortfolioBudget } from '../redux/actions'
import BuyCrypto from './BuyCrypto'
import BuyCryptoForm from './BuyCryptoForm'
import SellCryptoForm from './SellCryptoForm'
import { Modal, Image, Header, Button, Grid } from 'semantic-ui-react'

class CryptoModal extends Component {

  state = {
    open: false
  }

  openModal = () => {
    this.props.fetchAllGames()
    this.props.getPortfolioBudget(this.props.portfolio.id)
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Modal size="mini" trigger={<BuyCrypto openModal={this.openModal} crypto={this.props.crypto}/>} open={this.state.open} centered={false}>
        <Modal.Header>
          <Button size="tiny" style={{float: "right"}} color="red" onClick={this.openModal}>Close</Button>
          <br></br>
          <Header style={{fontFamily: "monospace"}} size="huge">{this.props.crypto.name} ({this.props.crypto.symbol})</Header>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}>

              </Grid.Column>
              <Grid.Column width={14}>
                <BuyCryptoForm budgetForPortfolio={this.props.budgetForPortfolio} openModal={this.openModal} portfolio={this.props.portfolio} crypto={this.props.crypto}/>
              </Grid.Column>

              <Grid.Column width={1}>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }

}

const mapStateToProps = (state) => ({
  budgetForPortfolio: state.simulatorReducer.budgetForPortfolio
})

const mapDispatchToProps = (dispatch) => ({
  fetchAllGames: () => dispatch(fetchAllGames()),
  getPortfolioBudget: (portID) => dispatch(getPortfolioBudget(portID))
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptoModal);
