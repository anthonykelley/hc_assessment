import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, } from 'recharts';

class AgeBarChart extends React.Component {
  render() {
    return (
      <Segment basic>
      <h2 style={styles.h1}>
        Age Distribution
      </h2>
        <BarChart
          width={650}
          height={400}
          data={this.props.age}
          margin={{top: 5, right: 30, left: 20, bottom: 20}}
        >
          <CartesianGrid
            strokeDasharray='3 3'
          />
          <XAxis
            dataKey='age_bucket'
            tickLine={false}
            axisLine={false}
            style={styles.axisLabels}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            style={styles.axisLabels}
          />
          <Tooltip />
          <Bar
            name='Total People'
            dataKey='total'
            fill='#00b3b3'
            barSize = {50}
            style={styles.pie}
          />
        </BarChart>
      </Segment>
  )}
}

const styles = {
  h1: { textAlign: 'center', paddingLeft: '12em', position: 'absolute', margin: '-45px', whiteSpace: 'nowrap' },
  pie: { opacity: '.85' },
  axisLabels: { fontSize: '12.5px' },
}

export default AgeBarChart;