import React, { Component } from "react";
import BasicLoginForm from "./components/BasicLoginForm/BasicLoginForm";
import Intersection from "./components/Intersection/Intersection";
import IsEmptyDeep from "./components/IsEmptyDeep/IsEmptyDeep";
import Unique from "./components/Unique/Unique";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Unique />
                    <Intersection />
                    <IsEmptyDeep />
                    <BasicLoginForm />
                </div>
            </div>
        );
    }
}

export default App;
