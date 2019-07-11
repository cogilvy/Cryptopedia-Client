import React, { Component } from 'react';
import { Button, Icon, Header } from 'semantic-ui-react'

class ResourcesContainer extends Component {

  render() {
    return (
      <div className="resources">
        <Header size="large" style={{textDecoration: "underline"}}>Other Resources:</Header>
        <a href="https://coinmarketcap.com/">
          <Button color='linkedin'>
            <Icon name='bitcoin' /> CoinMarketCap
          </Button>
        </a>
        <br></br>
        <a href="https://www.facebook.com/groups/CryptoCurrencyCollectorsClubPublicForum/">
          <Button color='facebook'>
            <Icon name='facebook' /> Crypto Collectors
          </Button>
        </a>
        <br></br>
        <a href="https://www.youtube.com/channel/UCGyqEtcGQQtXyUwvcy7Gmyg">
          <Button color='youtube'>
            <Icon name='youtube' /> Altcoin Buzz Youtube
          </Button>
        </a>
        <br></br>
        <a href="https://twitter.com/CryptoDerivativ?lang=en">
          <Button color='twitter'>
            <Icon name='twitter' /> Crypto Trading Twitter
          </Button>
        </a>
        <br></br>
        <a href="https://www.tradingheroes.com/cryptocurrency-trading-guide-beginners/">
          <Button color='google plus'>
            <Icon name='hire a helper' /> Beginners Trading Guide
          </Button>
        </a>
      </div>
    );
  }

}

export default ResourcesContainer;
