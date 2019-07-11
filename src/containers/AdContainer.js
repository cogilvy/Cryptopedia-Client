import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react'
class AdContainer extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row style={{marginBottom: "1%"}}>
          <Grid.Column width={5}>

          </Grid.Column>
          <Grid.Column padded="horizontally" className="advertisement" width={6}>
            <img alt="" className="advertisement-img" src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"/>
            <div className="ad-headers">
              <div style={{}}>
                <h3 style={{marginRight: "0%"}}>Free Coding Bootcamp Prep</h3>
                <h3 style={{marginTop: "0%", marginRight: "0%"}}>Join a top coding school today!</h3>
              </div>
              <a style={{marginTop: "1%"}} href="https://flatironschool.com/free-courses/coding-bootcamp-prep"><Button floated="right" size="large">Learn More</Button></a>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default AdContainer;
