import React, { Component } from 'react';
import { Grid, Image, Header, Segment } from 'semantic-ui-react'


class Article extends Component {

  render() {
    return (
      <Grid.Column>
        <div className="flex">
          <Image className="article-image" src={this.props.article.urlToImage} />
          <Segment raised>
            <Header as='h2'>{this.props.article.title}</Header>
            <h5 className="max-lines">{this.props.article.content ? this.props.article.content.substring(0,190) + "..." : null}</h5>
            <a href={this.props.article.url} target="_blank" rel="noopener noreferrer">Click Here To View Full Article</a>
          </Segment>
        </div>
      </Grid.Column>
    );
  }

}

export default Article;
