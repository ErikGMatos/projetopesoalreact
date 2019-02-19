import React, { Component } from "react";
import { Navbar } from "react-materialize";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    render() {
        return (
            <Navbar brand="33333333" right>
                {/* <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} />
                        Página Inicial
                    </Link>
                </li>
                <li>
                    <Link to="/contato">
                        <FontAwesomeIcon icon={faPhone} />
                        Contatos
                    </Link>
                </li> */}
            </Navbar>
        );
    }
}

export default Header;
