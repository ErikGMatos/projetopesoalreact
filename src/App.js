import React, { Component } from "react";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <SideBar />
                <Main />
            </div>
        );
    }
}

export default App;
