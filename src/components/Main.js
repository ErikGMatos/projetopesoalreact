import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";

import Bar from "./GraphComponent/bar";

import Line from "./GraphComponent/line";


// const dataBar = {
//     labels: [
//         "Janeiro",
//         "Fevereiro",
//         "Março",
//         "Abril",
//         "Maio",
//         "Junho",
//         "Julho"
//     ],
//     datasets: [
//         {
//             label: "Erik",
//             backgroundColor: "rgba(255,99,132,0.2)",
//             borderColor: "rgba(255,99,132,1)",
//             borderWidth: 1,
//             hoverBackgroundColor: "rgba(255,99,132,0.4)",
//             hoverBorderColor: "rgba(255,99,132,1)",
//             data: [1.5, 2, 3, 3, 5, 8, 2, 9, 1, 6, 4, 5]
//         }
//     ]
// };

const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};
class Main extends Component {
    render() {
        return (
            <Row>
                <Col s={6}>
                    <Bar  />
                </Col>
                <Col s={6}>
                    <Line data={dataLine} />
                </Col>

                {/* <Col s={12} className="cachorros">
                    {this.props.dogs.map(dog => {
                         console.log(dog);
                        return <img src={dog} alt='dog' key={dog}/>
                    })}
                </Col> */}
            </Row>
        );
    }
}

const mapStateToprops = state => {
    return {
        dogs: state.busca_dog_reducer.dogs
    };
};

export default connect(
    mapStateToprops,
    null
)(Main);
