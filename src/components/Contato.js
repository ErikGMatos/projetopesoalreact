import React, { Component } from "react";
import { Row, Col } from "react-materialize";
class Contato extends Component {
    render() {
        return (
            <Row>
                <Col s={12} l={6} className="content">
                    <p>Aqui é a página de contatos</p>{" "}
                    <p>Aqui é a página de contatos</p>
                </Col>
                <Col s={12} l={6} className="content1">
                    <p>Aqui é a página de contatos</p>
                    <p>Aqui é a página de contatos</p>
                </Col>
            </Row>
        );
    }
}

export default Contato;
