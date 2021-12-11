import pfp from '../assets/profile_photo.jpg';
import React from 'react';
import Article from '../components/article';
import { HashLink } from "react-router-hash-link";

class AboutMe extends React.Component {
    render() { 
        return <div>
            <Article image={pfp} title="Hi there!" content={
                <div className="text-white mb-5">
                    <div className="d-flex text-center justify-content-center flex-row">
                        <p className="mt-5 w-50 fs-5 justify-content-center">
                            I go by Jack but my legal name is Alexander Riley.
                            I am a full-stack developer with a Bachelor of Science in Computer Science from the University of Puget Sound, a liberal arts school in Tacoma.
                            In addition to my major, I’ve taken a variety of business classes like marketing, management, business leadership, and accounting.
                            I have about a year of professional experience between freelancing and working full-time for an engineering consultancy called Assemble Inc.
                            Over the past year and a half I have learned industry best practices surrounding scale, reliability, security, and readability.
                            I’m always polite, dedicated, and team-oriented. I’m a native English speaker and US citizen living in Washington state. 
                            <br/>
                            <br/>
                            I got into computer science because I grew up helping my family, my teachers, my friends, and generally anyone who asked, struggle through awful user interfaces. 
                            I have found that truly intuitive and easy-to-use interfaces are few and far between. 
                            Building intuitive interfaces requires empathy and iteration, and I argue it’s the core reason why Apple is the fortune one company. 
                            I try to deploy my philosophy in the interfaces I build, as well as my code and documentation. 
                            After all, if your team can’t understand the code that you’ve written, how are they supposed to build on it?
                        </p> 
                    </div>
                </div>
            }/>;
        </div>
    }
}
export default AboutMe;