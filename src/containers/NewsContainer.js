import React, { Component } from 'react';
import Article from '../components/Article';
import { connect } from 'react-redux';
import { fetchNewsArticles, searchNewsArticlesFetch } from '../redux/actions';
import { Grid, Header, Icon } from 'semantic-ui-react'
import SearchBarNews from '../components/SearchBarNews';

class NewsContainer extends Component {

  state = {
    filterInput: "",
  }

  componentDidMount() {
    this.props.fetchNewsArticles()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchNewsArticlesFetch(this.state.filterInput)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="news-container">
        <SearchBarNews handleSubmit={this.handleSubmit} handleChange={this.handleChange} filterInput={this.state.filterInput}/>
      <Header as='h2'>
        <Icon name='rss' />
        <Header.Content style={{textDecoration: "underline"}}>Latest News:</Header.Content>
      </Header>
        <Grid columns={2} divided>
        {
          this.props.newsArticles.map(article => {
            if (article.content && article.urlToImage) {
              return <Article key={article.url} article={article}/>
            }
            else {
              return null;
            }
          })
        }
        </Grid>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  newsArticles: state.newsReducer.newsArticles
})

const mapDispatchToProps = (dispatch) => ({
  fetchNewsArticles: () => dispatch(fetchNewsArticles()),
  searchNewsArticlesFetch: (searchTerm) => dispatch(searchNewsArticlesFetch(searchTerm))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
