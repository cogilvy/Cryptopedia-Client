import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'

class Purchase extends Component {

  numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.purchase.crypto.name}</Table.Cell>
        <Table.Cell><a>${parseFloat(this.props.purchase.crypto.price).toFixed(4)}</a></Table.Cell>
        <Table.Cell>{this.props.purchase.quantity}</Table.Cell>
        <Table.Cell>${this.numberWithCommas(parseFloat(this.props.purchase.crypto.price * this.props.purchase.quantity).toFixed(4))}</Table.Cell>
        {
          this.props.purchase.crypto.change_24hr.includes("-") ?
          <Table.Cell style={{color: "red"}}>{this.props.purchase.crypto.change_24hr}%</Table.Cell>
          :
          <Table.Cell style={{color: "lightGreen"}}>{this.props.purchase.crypto.change_24hr}%</Table.Cell>
        }
        <Table.Cell>
          {
            <Button onClick={(event) => this.props.openSellingContainer(event, this.props.purchase)} size="mini" color="red">Sell</Button>
          }
        </Table.Cell>
      </Table.Row>
    );
  }

}

export default Purchase;
