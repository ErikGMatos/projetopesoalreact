import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meusDados: {
                labels: [
                    "Janeiro",
                    "Fevereiro",
                    "Março",
                    "Abril",
                    "Maio",
                    "Junho",
                    "Julho"
                ],
                datasets: [
                    {
                        label: "Erik",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)",
                        data: [1.5, 2, 3, 3, 5, 8, 2, 9, 1, 6, 4, 5]
                    }
                ]
            }
        };
    }

    componentWillMount(){
        
        if(this.props.data){
            //this.setState({meusDados.datasets[0].data = [1,2,3]})
        }
    }

    render() {
        return (
            <div>
                <h2>Exemplo gráfico de barras</h2>
                <Bar
                    data={this.state.meusDados}
                    // width={100}
                    // height={400}
                    // options={{
                    //     maintainAspectRatio: false
                    // }}
                />
            </div>
        );
    }
}
export default BarGraph;
