import React from 'react';
import { Statistic } from 'semantic-ui-react';

class PersonStatistic extends React.Component {

  render() {
    return (
      <Statistic>
        <Statistic.Value>{this.props.total}</Statistic.Value>
        <Statistic.Label>People</Statistic.Label>
      </Statistic>
    )
  }

}

export default PersonStatistic;