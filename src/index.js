import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


// import {GoogleCharts} from 'google-charts';
// GoogleCharts.load(drawChart);
 
// function drawChart() {
 
//     // Standard google charts functionality is available as GoogleCharts.api after load
//     const data = GoogleCharts.api.visualization.arrayToDataTable([
//         ['Chart thing', 'Chart amount'],
//         ['Lorem ipsum', 60],
//         ['Dolor sit', 232],
//         ['Sit amet', 18]
//     ]);
//     const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
//     pie_1_chart.draw(data);
// }
ReactDOM.render(<App />, document.getElementById('root'));


