import React, { Component } from 'react';
import { Grid, Image, Segment, Divider, Header } from 'semantic-ui-react'
import {connect} from 'react-redux';
import AdContainer from './AdContainer'
import { fetchHomePageArticles } from '../redux/actions';

class HomeContainer extends Component {

  componentDidMount() {
    this.props.fetchHomePageArticles()
  }

  render() {
    return (
      <div className="home-news">
        <AdContainer />
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={9}>
                {
                  this.props.homeArticles[0] ?
                  <Segment raised>
                    <Grid columns={2} relaxed='very'>
                      <Grid.Column>
                        <Image className="home-image"
                          src="https://ak4.picdn.net/shutterstock/videos/9243734/thumb/1.jpg"
                        />
                      <Header floated="left" color="blue" size='medium'>Company News</Header>
                      <br></br>
                      <div>
                        <h2 style={{float: "left", width: "100%"}}>Google Makes Quantum Computing Breakthrough, Close To Revealing Machine</h2>
                        <h5>
                          Google is close to realising a practical quantum computer for the first time after making a major discovery with the revolutionary form of computing. Hartmut Neven, director of Google’s Quantum Artificial Intelligence Lab, revealed to Quanta magazine that his lab’s most advanced quantum processor was improving at a rate far beyond what they had previously thought possible.
                        </h5>
                        <a href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/quantum-computing-google-computer-lab-hartmut-neven-law-a8973951.html" target="_blank" rel="noopener noreferrer">Click Here To View Full Article</a>
                      </div>
                      </Grid.Column>
                      <Grid.Column>
                        <Image className="home-image"
                          src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                        />
                      <Header floated="left" color="blue" size='medium'>Company News</Header>
                      <br></br>
                      <div>
                        <h2 style={{float: "left", width: "100%"}}>Facebook Libra Cryptocurrency a 'Serious Concern' for Federal Reserve</h2>
                        <h5>
                          The United States Federal Reserve System has added its voice to the chorus of doubts raised by lawmakers, politicians and others worldwide about Facebook's newly announced cryptocurrency, Libra. While speaking to House lawmakers Wednesday, Federal Reserve Chairman Jerome Powell said the US central bank has "serious concerns" about Libra, The Wall Street Journal reported.
                        </h5>
                        <a href="https://www.cnet.com/news/us-central-bank-has-serious-concerns-about-facebooks-cryptocurrency-libra-report-says/" target="_blank" rel="noopener noreferrer">Click Here To View Full Article</a>
                      </div>
                      </Grid.Column>
                    </Grid>

                    <Divider vertical></Divider>
                  </Segment>
                  :
                  null
                }
            </Grid.Column>
            <Grid.Column width={1}>

            </Grid.Column>
            <Grid.Column width={3}>
              <Segment style={{marginTop: "20%"}} raised>
                <Grid divided="vertically">
                  <Grid.Row>
                    <Image style={{margin: "0% 0% 0% 2%"}} height="50px" src="pic1.png"/>
                    <div style={{width: '100%'}}>
                      <a href="https://www.investopedia.com/articles/active-trading/091714/basics-options-profitability.asp">
                        <Header size="huge" style={{margin: "0% 0% 0% 8%", color: "#064491"}} textAlign="left">The Basics of</Header>
                        <Header size="huge" style={{margin: "-1% 0% 0% 8%", color: "#064491"}} textAlign="left">Options Profitability</Header>
                      </a>
                      <h4 style={{margin: "3% 0% 0% 8%", color: "#737373"}}>Options traders can profit by being an</h4>
                      <h4 style={{margin: "0% 0% 0% 8%", color: "#737373"}}>option buyer or an option writer.</h4>
                    </div>
                  </Grid.Row>
                  <Grid.Row>
                    <Image style={{margin: "0% 0% 0% 2%"}} height="50px" src="pic2.png"/>
                      <div style={{width: '100%'}}>
                        <a href="https://www.investopedia.com/broker-awards-4587871">
                          <Header size="huge" style={{margin: "0% 0% 0% 8%", color: "#064491"}} textAlign="left">Best Brokers</Header>
                        </a>
                        <h4 style={{margin: "3% 0% 0% 8%", color: "#737373"}}>Our annual review of the best online</h4>
                        <h4 style={{margin: "0% 0% 0% 8%", color: "#737373"}}>brokers for investors of all levels.</h4>
                      </div>
                  </Grid.Row>
                  <Grid.Row>
                    <Image style={{margin: "0% 0% 0% 2%"}} height="50px" src="pic3.png"/>
                      <div style={{width: '100%'}}>
                        <a href="https://www.investopedia.com/options-basics-tutorial-4583012">
                          <Header size="huge" style={{margin: "0% 0% 0% 8%", color: "#064491"}} textAlign="left">Essential Options</Header>
                          <Header size="huge" style={{margin: "-1% 0% 0% 8%", color: "#064491"}} textAlign="left">Trading Guide</Header>
                        </a>
                        <h4 style={{margin: "3% 0% 0% 8%", color: "#737373"}}>Learn how options could be a valuable</h4>
                        <h4 style={{margin: "0% 0% 0% 8%", color: "#737373"}}>addition to your portfolio.</h4>
                      </div>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column width={2}>

            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  homeArticles: state.newsReducer.homeArticles
})

const mapDispatchToProps = (dispatch) => ({
  fetchHomePageArticles: () => dispatch(fetchHomePageArticles())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
