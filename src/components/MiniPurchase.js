import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class MiniPurchase extends Component {

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.purchase.crypto.name}</Table.Cell>
        <Table.Cell>{parseFloat(this.props.purchase.quantity).toFixed(5)}</Table.Cell>
        <Table.Cell>${this.numberWithCommas(parseFloat(this.props.purchase.crypto.price * this.props.purchase.quantity).toFixed(4))}</Table.Cell>
      </Table.Row>
    );
  }

}

export default MiniPurchase;
