import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Contato from "./components/Contato";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='principal'>

                    <Header />
                    <SideBar />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/contato" component={Contato} />
                    </Switch>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default App;
