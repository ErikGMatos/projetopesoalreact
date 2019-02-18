import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";

// import { buscaDog } from "../store/actions/busca-dog-action";

//import Chart from "chart.js";

class Main extends Component {
    //constructor(props){
    //    super(props);
    //}
    //componentDidMount() {
    // if (window.onload) {
    //     var ctx = document.getElementById("canvas").getContext("2d");
    //     new Chart(ctx, config);
    // } else {
    //     window.onload = function() {
    //         var ctx = document.getElementById("canvas").getContext("2d");
    //         new Chart(ctx, config);
    //     };
    // }
    //}

    render() {
        return (
            <Row>
                {/* <Col s={6} id="">
                    <canvas id="canvas" width="200" height="200" />
                </Col> */}
                <Col s={12} className="cachorros">
                    {this.props.dogs.map(dog => {
                         console.log(dog);
                        return <img src={dog} alt='dog' key={dog}/>
                    })}
                </Col>
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
