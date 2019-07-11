import React, { Component } from 'react';
import Crypto from '../components/Crypto'
import SearchBarCryptos from '../components/SearchBarCryptos'
import ShowCrypto from '../components/ShowCrypto'
import {connect} from 'react-redux';
import {fetchCryptos, cryptoForShowPage} from '../redux/actions';
import { Table, Message } from 'semantic-ui-react'

class CryptoContainer extends Component {

  state = {
    showingCrypto: false,
    cryptoToShow: {},
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

  openShowPage = (cryptoObj = {}) => {
    this.setState({
      showingCrypto: !this.state.showingCrypto,
      cryptoToShow: cryptoObj
    })
  }

  render() {
    const filteredCryptos = [...this.props.cryptos].filter(crypto => {
      return crypto.name.toLowerCase().includes(this.state.filterInput.toLowerCase())
    })
    return (
        this.state.showingCrypto ?
        <ShowCrypto openShowPage={this.openShowPage} crypto={this.state.cryptoToShow} />
        :
        <div className="crypto-container">
          <h1 style={{textAlign: "center"}}>Top 100 Cryptocurrencies by Market Capitalization</h1>
          <div style={{width: "25%", margin: "auto", textAlign: "center"}}>
            <Message size="small" positive>Click on a cryptocurrency to see more detailed information.</Message>
          </div>

          <SearchBarCryptos handleChange={this.handleChange} handleSubmit={this.handleSubmit} filterInput={this.state.filterInput}/>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Symbol</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Market Cap</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Volume (24hr)</Table.HeaderCell>
                <Table.HeaderCell>Change (24hr)</Table.HeaderCell>
                <Table.HeaderCell>Change (7d)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                filteredCryptos.map(crypto => {
                  return <Crypto openShowPage={this.openShowPage} key={crypto.id} crypto={crypto}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);
