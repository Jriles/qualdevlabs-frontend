import React from 'react'
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
const RouteChangeTracker = ({ history }) => {
    ReactGA.send({ hitType: "pageview", page: history.location.pathname });
    return <div></div>;
};

export default withRouter(RouteChangeTracker);