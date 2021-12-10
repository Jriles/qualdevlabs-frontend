import NavBar from "./components/navbar";
import React from "react";
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-709V6GJR3F"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


class App extends React.Component {
    render() { 
        return <NavBar/>;
    }
}

export default App;