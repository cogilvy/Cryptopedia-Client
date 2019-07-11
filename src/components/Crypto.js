import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class Crypto extends Component {

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    return (
      <Table.Row onClick={() => this.props.openShowPage(this.props.crypto)}>
        <Table.Cell>{this.props.crypto.id}</Table.Cell>
        <Table.Cell>{this.props.crypto.symbol}</Table.Cell>
        <Table.Cell>{this.props.crypto.name}</Table.Cell>
        <Table.Cell>${this.numberWithCommas(this.props.crypto.market_cap)}</Table.Cell>
        <Table.Cell><a>${parseFloat(this.props.crypto.price).toFixed(4)}</a></Table.Cell>
        <Table.Cell>${this.numberWithCommas(this.props.crypto.volume)}</Table.Cell>
        {
          this.props.crypto.change_24hr.includes("-") ?
          <Table.Cell style={{color: "red"}}>{this.props.crypto.change_24hr}%</Table.Cell>
          :
          <Table.Cell style={{color: "green"}}>{this.props.crypto.change_24hr}%</Table.Cell>
        }
        {
          this.props.crypto.change_7d.includes("-") ?
          <Table.Cell style={{color: "red"}}>{this.props.crypto.change_7d}%</Table.Cell>
          :
          <Table.Cell style={{color: "green"}}>{this.props.crypto.change_7d}%</Table.Cell>
        }
      </Table.Row>
    );
  }

}

export default Crypto;
