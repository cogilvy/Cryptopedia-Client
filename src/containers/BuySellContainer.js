import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCryptos } from '../redux/actions'
import CryptoModal from '../components/CryptoModal'
import SearchBarCryptos from '../components/SearchBarCryptos'
import { Table } from 'semantic-ui-react'


class BuySellContainer extends Component {

  state = {
    filterInput: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    this.props.fetchCryptos()
  }

  render() {
    const filteredCryptos = [...this.props.cryptos].filter(crypto => {
      return crypto.name.toLowerCase().includes(this.state.filterInput.toLowerCase())
    })
    return (
      <div className="buy-sell-container">
        <h1 style={{textAlign: "center"}}>Cryptocurrencies Available for Purchase or Sale</h1>
        <SearchBarCryptos handleChange={this.handleChange} handleSubmit={this.handleSubmit} filterInput={this.state.filterInput}/>
        <Table style={{fontFamily: "monospace"}} celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Symbol</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Change (24hr)</Table.HeaderCell>
              <Table.HeaderCell>Change (7d)</Table.HeaderCell>
              <Table.HeaderCell>Market Cap</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              filteredCryptos.map(crypto => {
                return <CryptoModal portfolio={this.props.portfolio} key={crypto.id} crypto={crypto}/>
              })
            }
          </Table.Body>
        </Table>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  cryptos: state.cryptoReducer.cryptos
})

const mapDispatchToProps = (dispatch) => ({
  fetchCryptos: () => dispatch(fetchCryptos())
})

export default connect(mapStateToProps, mapDispatchToProps)(BuySellContainer);
