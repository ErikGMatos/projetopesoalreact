import React, { Component } from "react";
import { Line } from "react-chartjs-2";



class LineGraph extends Component {
    render() {
        return (
            <div>
                <h2>Exemplo gráfico de linha</h2>
                <Line data={this.props.data} />
            </div>
        );
    }
}

export default LineGraph;
