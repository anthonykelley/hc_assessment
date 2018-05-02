import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

class AgeBarChart extends React.Component {
  render() {
    return (
      <Segment basic>
        <h2 style={styles.align}>
          Age Distribution
        </h2>
        <BarChart
          width={650}
          height={420}
          data={this.props.age}
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
            style={styles.bar}
          />
        </BarChart>
      </Segment>
  )}
}

const styles = {
  bar: { opacity: '.85' },
  axisLabels: { fontSize: '12.5px' },
  align: { textAlign: 'center' },
}

export default AgeBarChart;