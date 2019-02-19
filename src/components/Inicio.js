import React, { Component } from "react";
import { Row, Col } from "react-materialize";


class Inicio extends Component {
    render() {
        return (
            <Row>
                <Col s={12} l={6} className="content">
                   <h1>Bem vindo ao dashboard!</h1>
                </Col>
               
               
            </Row>
        );
    }
}

export default Inicio;
