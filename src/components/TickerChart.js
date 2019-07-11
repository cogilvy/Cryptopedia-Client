import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

class TickerChart extends Component {

  render() {
    return (
      <div>
        <TradingViewWidget symbol={`${this.props.symbol}USD`} />
      </div>
    )
  }
}

export default TickerChart;
