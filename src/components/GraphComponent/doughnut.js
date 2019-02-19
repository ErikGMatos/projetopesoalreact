import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
    ]
};

class DoughnutGraph extends Component {
    render() {
        return (
            <div>
                <h2>Exemplo gráfico de rosca</h2>
                <Doughnut data={data} />
            </div>
        );
    }
}

export default DoughnutGraph;
