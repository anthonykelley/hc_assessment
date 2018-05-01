import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, } from 'recharts';

class ZipVerticalBarChart extends React.Component {
  render() {
    return (
      <Segment basic>
        <h2 style={styles.h1}>
          Top 5 Zip Codes
        </h2>
        <BarChart
          width={650}
          height={525}
          data={this.props.zip}
          layout='vertical'
          barSize={50}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            type='number'
            orientation='top'
            tickLine={false}
            axisLine={false}
            style={styles.axisLabels}
          />
          <YAxis
            type='category'
            dataKey='zip'
            width={145}
            tickLine={false}
            axisLine={false}
            style={styles.axisLabels}
          />
          <CartesianGrid
            strokeDasharray='3 3'
          />
          <Tooltip />
          <Bar
            name='Total People'
            dataKey='total'
            fill='#00b3b3'
            style={styles.pie}
          />
        </BarChart>
      </Segment>
    )
  }
}

const styles = {
  h1: { textAlign: 'center', paddingLeft: '14em', position: 'absolute', margin: '-15px', whiteSpace: 'nowrap' },
  pie: { opacity: '.85' },
  axisLabels: { fontSize: '12.5px' },
}

export default ZipVerticalBarChart;