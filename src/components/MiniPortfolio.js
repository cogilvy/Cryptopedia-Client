import React, { Component } from 'react';
import { Table, Header } from 'semantic-ui-react'
import MiniPurchase from './MiniPurchase'
import { connect } from 'react-redux'

import { fetchPurchasesForPortfolio } from '../redux/actions'

class MiniPortfolio extends Component {

  componentDidMount() {
    this.props.fetchPurchasesForPortfolio(this.props.portfolio.id)
  }

  render() {
    return (
      <div style={{display: "block", margin: "auto", position: "fixed"}}>
      <Header style={{textDecoration: 'underline'}}>Current Portfolio:</Header>
        <Table textAlign="left" style={{border: "double", borderRadius: "2px"}} inverted celled selectable striped collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Total Value</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              this.props.purchases.map(purchase => {
                return <MiniPurchase purchase={purchase} />
              })
            }
          </Table.Body>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(MiniPortfolio);
