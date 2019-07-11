import React, { Component, Fragment } from 'react';
import BuySellContainer from '../containers/BuySellContainer'
import MiniPortfolio from '../components/MiniPortfolio'
import SellCryptoForm from '../components/SellCryptoForm'
import PortfolioChart from '../components/PortfolioChart'
import PurchaseContainer from '../containers/PurchaseContainer'
import { Header, Grid, Button, Message } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { getPortfolioBudget, fetchPurchasesForPortfolio } from '../redux/actions'

class Portfolio extends Component {

  state = {
    openBuySellContainer: false,
    buttonText: "Buy Cryptos",
    selling: false,
    purchaseToSell: {}
  }

  componentDidMount() {
    this.props.getPortfolioBudget(this.props.portfolioToView.id)
  }

  openBuySellContainer = () => {
    if (this.state.buttonText === "Buy Cryptos") {
      this.setState({
        openBuySellContainer: !this.state.openBuySellContainer,
        buttonText: "Back To Portfolio"
      })
    } else {
      this.setState({
        openBuySellContainer: !this.state.openBuySellContainer,
        buttonText: "Buy Cryptos"
      })
    }
  }

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  backToGames = () => {
    this.props.history.push('/simulator')
  }

  openSellingContainer = (event, obj) => {
    event.preventDefault()
    if (this.state.selling === true) {
      this.setState({
        selling: !this.state.selling,
        purchaseToSell: obj
      })
    } else {
      this.setState({
        selling: !this.state.selling,
        purchaseToSell: obj
      })
    }
  }

  refreshPurchases = (portID) => {
    this.props.fetchPurchasesForPortfolio(portID)
  }

  render() {
    return (
      <div>
        {
          this.props.portfolioToView.budget ?
          <div className="portfolio-container">
            <Grid style={{marginTop: "5px"}} className="port-show">
              <Grid.Row>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={3}>
                  {
                    this.state.openBuySellContainer ?
                    <MiniPortfolio portfolio={this.props.portfolioToView}/>
                    :
                    null
                  }
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <Grid.Column width={6}>
                  {
                    this.state.openBuySellContainer ?
                    <BuySellContainer portfolio={this.props.portfolioToView}/>
                    :
                    <Fragment>
                      <Header style={{textDecoration: "underline"}} textAlign="center" size="huge">{this.props.portfolioToView.name}</Header>
                      <PurchaseContainer selling={this.state.selling} openSellingContainer={this.openSellingContainer} portfolio={this.props.portfolioToView} openBuySellContainer={this.openBuySellContainer}/>
                    </Fragment>
                  }
                </Grid.Column>

                <Grid.Column width={4}>
                  {
                    this.state.openBuySellContainer ?
                    <Message positive style={{textAlign: 'center'}}>Click on a cryptocurrency in the table to open the purchase form.</Message>
                    :
                    null
                  }
                  <div style={{display: "flex", marginLeft: "10%"}}>
                    <Button size="small" onClick={this.openBuySellContainer} color="green">{this.state.buttonText}</Button>
                    <Button size="small" onClick={this.backToGames} color="red" >X</Button>
                  </div>
                  <Header style={{marginLeft: "10%"}} color="black" size="medium">Money Remaining: ${this.props.budgetForPortfolio ? this.numberWithCommas(this.props.budgetForPortfolio) : 0.00}</Header>
                  {
                    this.state.selling && !this.state.openBuySellContainer ?
                    <SellCryptoForm refreshPurchases={this.refreshPurchases} purchaseToSell={this.state.purchaseToSell}/>
                    :
                    null
                  }
                </Grid.Column>
                <Grid.Column width={1}>

                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <PortfolioChart portfolio={this.props.portfolioToView} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          :
          <Message style={{textAlign: "center", marginTop: "2%", marginBottom: "2%", fontSize: "100%"}}>Visit The Simulator to Choose a Portfolio To View</Message>
        }


      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  portfolioToView: state.simulatorReducer.portfolioToView,
  budgetForPortfolio: state.simulatorReducer.budgetForPortfolio
})

const mapDispatchToProps = (dispatch) => ({
  getPortfolioBudget: (portID) => dispatch(getPortfolioBudget(portID)),
  fetchPurchasesForPortfolio: (portID) => dispatch(fetchPurchasesForPortfolio(portID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
