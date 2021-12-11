import React from "react";
import CTA from "./cta";

class Article extends React.Component {
    render() { 
        return <div style={{marginTop: 70}}>
            <div className="d-flex flex-row justify-content-center">
                <h1 className="text-white">
                    {this.props.title}
                </h1>
            </div>
            <div className="d-flex flex-row justify-content-center mt-5">
                <img src={this.props.image} className="img-fluid hero-img"></img>
            </div>
            <div>
                {this.props.content}
            </div>
            <CTA ctaMessage={this.props.ctaMessage}/>
        </div>;
    }
}
 
export default Article;