import React from 'react';
import axios from 'axios';
import AgeBarChart from './AgeBarChart';
import ZipVerticalBarChart from './ZipVerticalBarChart';
import { Grid, Row, } from 'semantic-ui-react';

class Dashboard extends React.Component {
  state = { age: [], zip: [], person_count: 0 }

  componentDidMount() {
    axios.get('/api/age_bucket')
    .then( res => {
      this.setState({ age: res.data })
    })
    axios.get('/api/zip_count')
    .then( res => {
      this.setState({ zip: res.data })
    })
    axios.get('/api/person_count')
    .then( res => {
      this.setState({ person_count: res.data[0].total })
    })
  }

	render () {
  	return (
      <Grid columns={2} stackable>
        <Grid.Column>
          <Grid.Row>
            {/* Insert member count */}
          </Grid.Row>
          <Grid.Row centered style={styles.padding}>
            <AgeBarChart age={this.state.age} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row centered style={styles.padding}>
            <ZipVerticalBarChart zip={this.state.zip} />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  padding: { paddingTop: '100px' }
}

export default Dashboard;