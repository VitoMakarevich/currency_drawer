import React from 'react';

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: '2017-09-15', USD: 1.920398, EUR: 0.836904},
      {name: '2017-09-16', USD: 1.920398, EUR: 0.836904},
      {name: '2017-09-17', USD: 1.929662, EUR: 0.837503},
      {name: '2017-09-18', USD: 1.930025, EUR: 0.836696}
];
const SimpleLineChart = React.createClass({
	render () {
  	return (
      <div className = {classes.chart}>
        <LineChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="USD" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    );
  }
})

export default SimpleLineChart;