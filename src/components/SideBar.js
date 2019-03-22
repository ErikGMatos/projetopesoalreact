import React, { Component } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { buscaDog } from "~/store/actions/busca-dog-action";

import minhavariavel from '~/teste/maisum/index'
class Sidebar extends Component {
    DrawGraph(event) {
        event.preventDefault();
        console.log("cliquei ");

        //this.props.buscaDog(2)
    }

    render() {
        console.log(minhavariavel);
        return (
            <SideNav
                fixed={true}
                trigger={
                    <a href="_">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                }
                options={{ closeOnClick: true }}
            >
                <SideNavItem
                    userView
                    user={{
                        //background: 'black',
                        image:
                            "https://media.licdn.com/dms/image/C4E03AQGBWEDrA-ihBg/profile-displayphoto-shrink_100_100/0?e=1557360000&v=beta&t=53MWDj-pVYwilbhrxaasv6feoI3mw7jDVXncoUmMK4Y",
                        name: "Erik Garces Matos",
                        email: "erik_senac@gmail.com"
                    }}
                />
                <Link to="/" className="link-graph">
                    Home
                </Link>
                <Link to="/main" className="link-graph">
                    Alguns graficos
                </Link>
                <Link to="/contato" className="link-graph">
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
