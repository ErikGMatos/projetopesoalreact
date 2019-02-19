import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const initialState = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

class Graph extends Component{
    
    componentWillMount() {
        this.setState(initialState);
    }
    componentDidMount() {
        var _this = this;

        setInterval(function() {
            var oldDataSet = _this.state.datasets[0];
            var newData = [];

            for (var x = 0; x < _this.state.labels.length; x++) {
                newData.push(Math.floor(Math.random() * 100));
            }

            var newDataSet = {
                ...oldDataSet
            };
            newDataSet.label = 'Erik ' + Math.floor(Math.random() * 100)
            newDataSet.data = newData;
            newDataSet.backgroundColor ='red';
            newDataSet.borderColor = 'black';
            newDataSet.hoverBackgroundColor = 'orange';
            newDataSet.hoverBorderColor = 'yellow';

            var newState = {
                ...initialState,
                datasets: [newDataSet]
            };

            _this.setState(newState);
        }, 5000);
    }
    render() {
        return <Bar data={this.state} />;
    }
};

class CrazyLine extends Component {
    render() {
        return (
            <div>
                <Graph />
            </div>
        );
    }
}

export default CrazyLine;
