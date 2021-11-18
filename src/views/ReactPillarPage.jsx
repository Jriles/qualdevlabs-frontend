// bicylce metaphore
//queries
//cybernetic collective
//tech accelerates business, shouldn't harm it
//SINGLE SOURCE OF TRUTH

import PillarPage from "../components/pillarPage";
import React from "react";
//what is a crm
//what is an erp
//why is collecting data + and analyzing that data important
//here is odoo, etc.
import image from '../assets/react.png';

class ReactPillarPage extends React.Component {
    render() {
        const articles = [
            {
                title: "Customize Bootstrap in React",
                path: "customize-bootstrap-react"
            }
        ];
        const topicName = "React";
        return <PillarPage topic={topicName} image={image} articles={articles}></PillarPage>;
    }
}
 
export default ReactPillarPage;