import React, { Component } from 'react';
import Purchase from '../components/Purchase'
import Crypto from '../components/Crypto'
import { fetchPurchasesForPortfolio } from '../redux/actions'
import { connect } from 'react-redux'
import { Table, Message, Header } from 'semantic-ui-react'
import { groupBy} from 'lodash'

class PurchaseContainer extends Component {

  componentDidMount() {
    this.props.fetchPurchasesForPortfolio(this.props.portfolio.id)
  }

  groupBy = (array, key) => {
    const grouped = groupBy(array, element => element.key)
    return grouped
  }

  round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  totalValueOfPortfolio = (purchaseArray) => {
    const purchaseValueArray = []
    let sum = 0
    purchaseArray.map(purchase => {
      purchaseValueArray.push(purchase.quantity * purchase.crypto.price)
    })
    for (let i=0; i < purchaseArray.length; i++) {
      sum += purchaseValueArray[i]
    }
    return this.round(sum, 2)
  }

  render() {
    return (
      <div style={{display: "block", margin: "auto auto"}}>
        <Table textAlign="left" style={{border: "double", borderRadius: "2px"}} inverted celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Current Price</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Total Value</Table.HeaderCell>
              <Table.HeaderCell>Change (24hr)</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.purchases.length > 0 ?
              this.props.purchases.sort().map(purchase => {
                return <Purchase selling={this.props.selling} openSellingContainer={this.props.openSellingContainer} purchase={purchase}/>
              })
              :
              null
            }
          </Table.Body>
        </Table>
          {
            this.props.purchases.length > 0 ?
            <Message color="black">
              <Header inverted>Total Portfolio Value: ${this.numberWithCommas(this.totalValueOfPortfolio(this.props.purchases))}</Header>
            </Message>
            :
            <Message warning style={{textAlign: "center", marginTop: "2%", marginBottom: "2%"}}>
              <strong><p>Purchase cryptocurrencies to fill your portfolio!</p></strong>
            </Message>
          }
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  purchases: state.simulatorReducer.purchases
})

const mapDispatchToProps = (dispatch) => ({
  fetchPurchasesForPortfolio: (portID) => dispatch(fetchPurchasesForPortfolio(portID))
})

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseContainer);
