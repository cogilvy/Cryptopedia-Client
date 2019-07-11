import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPortfolioValues } from '../redux/actions'
import { AreaChart, ColumnChart } from 'react-chartkick'
import 'chart.js';
import { Header } from 'semantic-ui-react'

class PortfolioChart extends Component {

  componentDidMount() {
    this.props.fetchPortfolioValues(this.props.portfolio.id)
  }

  createData = (portfolioValues) => {
    const valueObj = {}
    portfolioValues.forEach(portValue => {
      valueObj[portValue.date.slice(0, 10)] = portValue.value
    })
    return valueObj
  }

  render() {
    console.log(this.props.portfolioValues);
    return (
      <div style={{margin: "2% 15% 2% 15%", backgroundColor: "#eee"}}>
        <Header style={{textDecoration: "underline", marginLeft: "2%"}}>Portfolio Analysis Chart</Header>
        <AreaChart download={true} data={this.createData(this.props.portfolioValues)}/>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  portfolioValues: state.simulatorReducer.portfolioValues
})

const mapDispatchToProps = (dispatch) => ({
  fetchPortfolioValues: (portID) => dispatch(fetchPortfolioValues(portID))
})

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioChart);
