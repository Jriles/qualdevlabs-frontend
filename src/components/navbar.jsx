import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TechForBusiness from "../views/techForBiz";
import GoogleCloud from "../views/googleCloud";
import Home from '../views/home';

class NavBar extends React.Component {

    render() { 
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark ml-5">
                    <Link className="navbar-brand ms-3" to="/home">QualDevLabs</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li>
                                        <Link to="/blog/tech-and-your-business" className="nav-link text-white">Tech and Your Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/google-cloud" className="nav-link text-white">Google Cloud</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/blog/tech-and-your-business">
                        <TechForBusiness/>
                    </Route>
                    <Route path="/blog/google-cloud">
                        <GoogleCloud/>
                    </Route>
                    {/* <Route path="/download">
                        <Download />
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path={"/skins-dashboard"}>
                        <SkinsDashboard/>
                    </Route>
                    <Route path={"/create-player-skin"}>
                        <CreatePlayerSkin/>
                    </Route> */}
                </Switch>
            </Router>
        );
    }
}
 
export default NavBar;