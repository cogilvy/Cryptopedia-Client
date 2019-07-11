import React, { Component } from 'react';
import { Message, Form, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sellCrypto, fetchPurchasesForPortfolio, getPortfolioBudget } from '../redux/actions'

class SellCryptoForm extends Component {

  state = {
    quantity: 0,
    dollarAmt: 0,
    success: false
  }

  componentDidMount() {
    const portfolioID = this.props.purchaseToSell.portfolio.portfolio_id
    this.props.fetchPurchasesForPortfolio(portfolioID)
    this.props.getPortfolioBudget(portfolioID)
  }

  handleChange = (event) => {
    if (event.target.name === "quantity") {
      this.setState({
        quantity: event.target.value,
        dollarAmt: (this.props.purchaseToSell.crypto.price * event.target.value)
      });
    } else if (event.target.name === "dollar") {
      this.setState({
        quantity: (event.target.value / this.props.purchaseToSell.crypto.price),
        dollarAmt: event.target.value
      });
    }
  }

  selectAll = () => {
    this.setState({
      quantity: this.props.purchaseToSell.quantity,
      dollarAmt: (this.props.purchaseToSell.crypto.price * this.props.purchaseToSell.quantity)
    })
  }

  handleSubmit = (event, purchaseObj) => {
    const portfolioID = purchaseObj.purchase.portfolio.portfolio_id
    event.preventDefault()
    this.props.sellCrypto(purchaseObj)
    this.props.fetchPurchasesForPortfolio(portfolioID)
    this.setState({
      success: true
    })
  }

  render() {
    return (
      <div>
        {
          this.state.success ?
          <Message>Sale Successful</Message>
          :
          <Form size="small">
            <Header>Please select how much you would like to sell below.</Header>
            <Form.Field>
              <label>Quantity</label>
              <input onChange={this.handleChange} name="quantity" type="number" placeholder='Quantity' value={this.state.quantity} />
            </Form.Field>
            <Form.Field>
              <label>Dollar Amount</label>
              <input onChange={this.handleChange} name="dollar" type="number" placeholder='USD' value={this.state.dollarAmt} />
            </Form.Field>
            <Button onClick={this.selectAll}>Sell All '{this.props.purchaseToSell.crypto.name}'</Button>
            <Button onClick={(event) => this.handleSubmit(event, {budget: this.props.budgetForPortfolio, purchase: this.props.purchaseToSell, quantityToTakeAway: this.state.quantity, dollarAmtToTakeAwway: this.state.dollarAmt})} color="red">
              Confirm Sale
            </Button>
            <br></br>
          </Form>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  budgetForPortfolio: state.simulatorReducer.budgetForPortfolio
})

const mapDispatchToProps = (dispatch) => ({
  sellCrypto: (purchaseObj) => dispatch(sellCrypto(purchaseObj)),
  fetchPurchasesForPortfolio: (purchaseObj) => dispatch(fetchPurchasesForPortfolio(purchaseObj)),
  getPortfolioBudget: (portID) => dispatch(getPortfolioBudget(portID))
})

export default connect(mapStateToProps, mapDispatchToProps)(SellCryptoForm);
