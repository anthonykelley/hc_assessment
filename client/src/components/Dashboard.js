import React from 'react';
import axios from 'axios';
import AgeBarChart from './AgeBarChart';
import ZipVerticalBarChart from './ZipVerticalBarChart';
import PersonStatistic from './PersonStatistic';
import { Grid, } from 'semantic-ui-react';

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
      <Grid stackable>
        <Grid.Row centered style={styles.padding}>
              <PersonStatistic total={this.state.person_count} />
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <AgeBarChart age={this.state.age} />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row centered>
              <ZipVerticalBarChart zip={this.state.zip} />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const styles = {
  padding: { paddingTop: '50px', paddingBottom: '25px' }
}

export default Dashboard;