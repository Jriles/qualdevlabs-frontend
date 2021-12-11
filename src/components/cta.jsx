import React from "react";
import { HashLink } from "react-router-hash-link";

class CTA extends React.Component {
    render() { 
        return <div>
            <div className="d-flex align-center justify-content-center flex-row mt-5">
                <p className="text-white fs-5">{this.props.ctaMessage}</p>
            </div>
            <div className="d-flex align-center justify-content-center flex-row mb-5">
                <HashLink to="/#contact-form">
                    <button className="btn text-white btn-success btn-lg">
                    Get In Touch
                    </button>
                </HashLink>
            </div>
        </div>
        ;
    }
}
 
export default CTA;