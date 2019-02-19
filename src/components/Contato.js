import React, { Component } from "react";
import { Row, Col } from "react-materialize";

import Doughnut from "./GraphComponent/doughnut";
import Pie from "./GraphComponent/pie";

class Contato extends Component {
    render() {
        return (
            <Row>
                <Col s={12} l={6} className="content">
                    <Doughnut/>
                </Col>
                <Col s={12} l={6} className="content">
                    <Pie/>
                </Col>
               
            </Row>
        );
    }
}

export default Contato;
