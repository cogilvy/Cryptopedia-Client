import React, { Component } from 'react';
import { Grid, Image, Header, Segment } from 'semantic-ui-react'

class CryptoArticle extends Component {

  render() {
    return (
      <div className="crypto-article">
        <Segment raised>
          <strong><Header as='h3'>{this.props.article.title}</Header></strong>
          <br></br>
          <p className="max-lines">{this.props.article.content ? this.props.article.content.substring(0,190) + "..." : null}</p>
          <a href={this.props.article.url} target="_blank" rel="noopener noreferrer">Click Here To View Full Article</a>
        </Segment>
      </div>
    );
  }

}

export default CryptoArticle;
