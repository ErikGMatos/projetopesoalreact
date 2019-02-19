import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Contato from "./components/Contato";
import Inicio from "./components/Inicio";

import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <div className="principal">
                            <Header teste="teste123" />
                            <SideBar />
                            <Switch>
                                <Route exact path="/main" component={Main} />
                                <Route
                                    exact
                                    path="/contato"
                                    component={Contato}
                                />
                                <Route path='*' component={Inicio}/>
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
