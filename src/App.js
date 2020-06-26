import React from "react";
import "./App.css";

import Navigator from './components/Navigator'
import Chart from './components/Charts'

class App extends React.Component {
    render() {
        return (
            <>
                <Navigator />
                <Chart />
            </>
        )
    }
}

export default App;
