import React from "react";
import landingVid from "../assets/QualDevLabsLanding.mov";
import LandingPageSection from "../components/landingPageSection";
import TextLoop from "react-text-loop";
import securityImg from '../assets/security.png';
import americaImg from '../assets/america2.png';
import scaleImg from '../assets/scale.png';
import ContactForm from "../components/contactForm";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.firstSectionRef = React.createRef();
    }

    handleScrollToFirstSection ()
    {
        this.firstSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
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
            <div className="ratio hero-video">
                <video muted autoPlay loop>
                    <source src={landingVid} type="video/mp4" />
                    Not supported
                </video>
                <div className="text-white  hero-content">
                    <div className="d-flex flex-row justify-content-center mb-3">
                        <TextLoop className="" interval="4000">
                            <h1 className="hero-cta-text">Design</h1>
                            <h1 className="hero-cta-text">Build</h1>
                            <h1 className="hero-cta-text">Test</h1>
                            <h1 className="hero-cta-text">Deploy</h1>
                            <h1 className="hero-cta-text">Delight</h1>
                        </TextLoop>{" "}
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <button type="button" onClick={(event) => this.handleScrollToFirstSection(event)} className="btn btn-primary align-self-center text-white hero-btn">Learn More</button>
                    </div>
                </div>
            </div>
            {/* landing page sections */}
            <div ref={this.firstSectionRef}>
                <LandingPageSection  image={scaleImg} header={scaleHeader} text={scaleText}/>
            </div>
            
            <LandingPageSection image={americaImg} header={outsourcingHeader} text={outsourcingText}/>
            <LandingPageSection image={securityImg} header={securityHeader} text={securityText}/>
            <div id="contact-form">
                <ContactForm />
            </div>
        </div>;
    }
}
 
export default Home;