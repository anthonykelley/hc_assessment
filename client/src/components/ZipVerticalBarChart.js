import React from 'react';
import { Segment } from 'semantic-ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

class ZipVerticalBarChart extends React.Component {
  render() {
    return (
      <Segment basic>
        <h2 style={styles.align}>
          Top 5 Zip Codes
        </h2>
        <BarChart
          width={650}
          height={425}
          data={this.props.zip}
          layout='vertical'
          barSize={50}
        >
          <XAxis
            type='number'
            orientation='bottom'
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
            style={styles.bar}
          />
        </BarChart>
      </Segment>
    )
  }
}

const styles = {
  bar: { opacity: '.85' },
  axisLabels: { fontSize: '12.5px' },
  align: { textAlign: 'center' },
}

export default ZipVerticalBarChart;