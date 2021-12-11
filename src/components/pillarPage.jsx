import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";


class PillarPage extends React.Component {
    articleItems (articles) {
        //each article has a path and a title
        return articles.map((article) => 
            <Link to={"/blog/" + article.path} className="text-white text-decoration-none">
                <h3 className="mt-5">{article.title}</h3>
            </Link>
        )
    }

    render() { 
        /*
        structure: 
            topic name
            image
            list of articles
        */
        
        return <div style={{marginTop: 70}}>
            <div className="d-flex flex-row justify-content-center">
                <h1 className="text-white">
                    {this.props.topic}
                </h1>
            </div>
            <div className="d-flex flex-row justify-content-center mt-5">
                <img src={this.props.image} className="img-fluid hero-img"></img>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <ul className="text-center">
                    {this.articleItems(this.props.articles)}
                </ul>
            </div>
        </div>;
    }
}
 
export default PillarPage;