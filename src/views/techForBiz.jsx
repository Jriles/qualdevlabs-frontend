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
import image from '../assets/techandbusiness.jpg';

class TechForBusiness extends React.Component {
    render() {
        const articles = [
            {
                title: "What is Tech Debt?",
                path: "what-is-tech-debt"
            }
        ];
        const topicName = "Tech and Your Business";
        return <PillarPage topic={topicName} image={image} articles={articles}></PillarPage>;
    }
}
 
export default TechForBusiness;