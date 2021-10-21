import React from "react";
import landingVid from "../assets/QualDevLabsLanding.mov";
import LandingPageSection from "../components/landingPageSection";
import TextLoop from "react-text-loop";
import image from '../assets/tech-debt-image.jpg';
import seattleImg from '../assets/seattle.jpg';
import ContactForm from "../components/contactForm";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    handleScrollToForm ()
    {
        this.formRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    }

    render() { 
        //headers
        const outsourcingHeader = "Onshore Outsourcing";
        const scaleHeader = "Scale with Ease";
        const securityHeader = "Highly Secure Solutions";
        //texts
        const outsourcingText = "Never worry about timezones, communication or IP loss. " +
                                "Our team is 100% American and always will be.";
        const scaleText = "We leverage cloud native technology and test driven development to build immensely scalable solutions. " + 
                          "Never get punished for your organization's success.";
        const securityText = "By utilizing technology like middleware, alarms, AI and state of the art encryption we insure that your data and infrastructure remain protected.";
        
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
                            <h1 className="hero-cta-text">Design</h1>
                            <h1 className="hero-cta-text">Build</h1>
                            <h1 className="hero-cta-text">Deploy</h1>
                            <h1 className="hero-cta-text">Delight</h1>
                        </TextLoop>{" "}
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <button type="button" onClick={(event) => this.handleScrollToForm(event)} className="btn btn-success align-self-center text-white hero-btn">Get Started</button>
                    </div>
                </div>
            </div>
            {/* landing page sections */}
            <LandingPageSection image={seattleImg} header={outsourcingHeader} text={outsourcingText}/>
            <LandingPageSection image={image} header={scaleHeader} text={scaleText}/>
            <LandingPageSection image={image} header={securityHeader} text={securityText}/>
            <div ref={this.formRef}>
                <ContactForm />
            </div>
        </div>;
    }
}
 
export default Home;