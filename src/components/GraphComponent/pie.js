import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
    labels: ["Red", "Blue", "Yellow","Black"],
    datasets: [
        {
            data: [200, 250, 10,25],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#131a1d"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#131a1d"]
        }
    ]
};

class PieGraph extends Component {
    render() {
        return (
            <div>
                <h2>Exemplo gráfico de pizza</h2>
                <Pie data={data} />
            </div>
        );
    }
}

export default PieGraph;
