import React, { Component } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { buscaDog } from "../store/actions/busca-dog-action";

class Sidebar extends Component {
    DrawGraph(event) {
        debugger;
        event.preventDefault();
        console.log("cliquei ");
        //this.props.buscaDog(2)
   
    }

    render() {
        return (
            <SideNav
                fixed={true}
                trigger={
                    <a href="_">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                }
            >
                <SideNavItem
                    userView
                    user={{
                        //background: 'black',
                        image:
                            "https://media.licdn.com/dms/image/C4E03AQGBWEDrA-ihBg/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=F8Aa3hax_3zoIgMuDD4G4ff0qIIzuMrD09zex_9_qog",
                        name: "Erik Garces Matos",
                        email: "erik_senac@gmail.com"
                    }}
                />
                 <Link
                    to='/'
                    className="link-graph"
                    // onClick={event => {
                    //     this.DrawGraph(event);
                    // }}
                >
                    Home
                </Link>
                <Link
                    to='/main'
                    className="link-graph"
                    // onClick={event => {
                    //     this.DrawGraph(event);
                    // }}
                >
                    Alguns graficos
                </Link>
                <Link
                    to='/contato'
                    className="link-graph"
                    // onClick={e => {
                    //     this.DrawGraph(e);
                    // }}
                >
                    Mais alguns graficos
                </Link>
            </SideNav>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buscaDog: dogQtd => dispatch(buscaDog(dogQtd))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Sidebar);
