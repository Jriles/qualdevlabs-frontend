import React from "react";

class LandingPageSection extends React.Component {
    render() { 
        return <div className="px-5 container-fluid landing-section-buffer">
                <div className="row gx-5"> 
                    <div className="col-6 mt-4 text-white">
                        <h3 className="section-header">{this.props.header}</h3>
                        <p className="mt-4">{this.props.text}</p>
                    </div>
                    <img className="col" src={this.props.image}/>
                </div>
            </div>;
    }
}
 
export default LandingPageSection;