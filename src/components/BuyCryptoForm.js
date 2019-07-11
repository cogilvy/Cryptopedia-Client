import React, { Component, Fragment } from 'react';
import { updatePortfolioBudget, fetchAllGames, getPortfolioBudget } from '../redux/actions'
import { connect } from 'react-redux'
import { Message, Form, Button, Header } from 'semantic-ui-react'

class BuyCryptoForm extends Component {

  state = {
    quantity: 0,
    dollarAmt: 0,
    crypto_id: this.props.crypto.id,
    portfolio_id: this.props.portfolio.id,
    moneyRemaining: this.props.budgetForPortfolio,
    success: false
  }

  componentDidMount() {
    this.props.getPortfolioBudget(this.props.portfolio.id)
  }

  handleChange = (event) => {
    this.props.fetchAllGames()
    this.props.getPortfolioBudget(this.props.portfolio.id)
    if (event.target.name === "quantity") {
      this.setState({
        quantity: event.target.value,
        dollarAmt: (this.props.crypto.price * event.target.value),
        success: false
      });
    } else if (event.target.name === "dollar") {
      this.setState({
        quantity: (event.target.value / this.props.crypto.price),
        dollarAmt: event.target.value,
        success: false
      });
    }
  }

  handleSubmit = (event, purchaseObj) => {
    event.preventDefault()
    this.props.updatePortfolioBudget(purchaseObj)
    this.props.getPortfolioBudget(this.props.portfolio.id)
    this.setState({
      success: true
    })
  }

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    const moneyRemaining = this.props.budgetForPortfolio - (this.props.crypto.price * this.state.quantity)
    return (
      <div>
        {
          this.state.success ?
            <Message positive>
              <p>
                Purchase Successful
              </p>
            </Message>
          :
          <Fragment>
            <Header style={{marginBottom: "1%", fontFamily: "monospace"}} size="small">Money Remaining:</Header>
            <Header style={{margin: "0%", fontFamily: "monospace"}} size="tiny" color="green">${this.props.budgetForPortfolio ? this.numberWithCommas(parseFloat(moneyRemaining).toFixed(4)) : null}</Header>
            <hr></hr>
            <Form onSubmit={(event) => this.handleSubmit(event, this.state)}>
              <Header size="small">Current Price: ${parseFloat(this.props.crypto.price).toFixed(4)} / {this.props.crypto.symbol}</Header>
              <br></br>
              <Form.Field>
                <label>Quantity</label>
                <input onChange={this.handleChange} name="quantity" type="number" placeholder='Quantity' value={this.state.quantity} />
              </Form.Field>
              <Form.Field>
                <label>Dollar Amount</label>
                <input onChange={this.handleChange} name="dollar" type="number" placeholder='USD' value={this.state.dollarAmt} />
              </Form.Field>
              <Header size="small">Total Purchase Price: ${this.state.dollarAmt}</Header>
              <br></br>
              {
                  moneyRemaining >= 0 ?
                    <Button color="green" type='submit'>Buy</Button>
                  :
                    <Message negative>
                      <p>
                        You don't have enough money!
                      </p>
                    </Message>
              }
            </Form>
          </Fragment>
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
  fetchAllGames: () => dispatch(fetchAllGames()),
  updatePortfolioBudget: (purchaseObj) => dispatch(updatePortfolioBudget(purchaseObj)),
  getPortfolioBudget: (purchaseObj) => dispatch(getPortfolioBudget(purchaseObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyCryptoForm);
