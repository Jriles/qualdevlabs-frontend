import React from "react";
import landingVid from "../assets/QualDevLabsLanding.mov";
import LandingPageSection from "../components/landingPageSection";
import TextLoop from "react-text-loop";
import image from '../assets/tech-debt-image.jpg';
import seattleImg from '../assets/seattle.jpg';
import ContactForm from "../components/contactForm";

class Home extends React.Component {
    render() { 
        return <div>
            {/* landing video */}
            <div className="ratio ratio-16x9">
                <video muted autoPlay loop>
                    <source src={landingVid} type="video/mp4" />
                    Not supported
                </video>
                <div className="text-white  hero-content">
                    <div className="d-flex flex-row justify-content-center mb-3">
                        <TextLoop className="" interval="4000">
                            <h1 className="hero-cta-text">Innovate</h1>
                            <h1 className="hero-cta-text">Integrate</h1>
                            <h1 className="hero-cta-text">Build</h1>
                            <h1 className="hero-cta-text">Deploy</h1>
                            <h1 className="hero-cta-text">Delight</h1>
                        </TextLoop>{" "}
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <button type="button" className="btn btn-success align-self-center text-white hero-btn">Get Started</button>
                    </div>
                </div>
            </div>
            {/* landing page sections */}
            <LandingPageSection image={seattleImg} header="Onshore Outsourcing" text="Never worry about your IP falling into the wrong hands. Our team is 100% American and always will be."/>
            <LandingPageSection image={image} header="Scale with Ease" text="Never worry about your IP falling into the wrong hands. Our team is 100% on shore and always will be."/>
            <LandingPageSection image={image} header="Secure Solutions" text="Never worry about your IP falling into the wrong hands. Our team is 100% on shore and always will be."/>
            <LandingPageSection image={image} header="Reliable" text="Never worry about your IP falling into the wrong hands. Our team is 100% on shore and always will be."/>
            <ContactForm/>
        </div>;
    }
}
 
export default Home;