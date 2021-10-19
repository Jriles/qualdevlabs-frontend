import React from "react";
import landingVid from "../assets/QualDevLabsLanding.mov";

class Home extends React.Component {
    render() { 
        return <div>
            {/* need an overlay here */}
            <div className="ratio ratio-16x9">
                <video controls muted autoPlay loop>
                    <source src={landingVid} type="video/mp4" />
                    Not supported
                </video>
            </div>
        </div>;
    }
}
 
export default Home;