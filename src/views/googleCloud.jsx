//api gateway
//workflows
//cloud functions
//google for games
    //agones
//firebase
import PillarPage from "../components/pillarPage";
import React from "react";
//what is a crm
//what is an erp
//why is collecting data + and analyzing that data important
//here is odoo, etc.
import image from '../assets/gcloud.png';

class TechForBusiness extends React.Component {
    render() {
        const articles = [
            {
                title: "Getting Started with API Gateway",
                path: "gcloud-api-gateway"
            }
        ];
        const topicName = "Google Cloud Platform";
        return <PillarPage topic={topicName} image={image} articles={articles}></PillarPage>;
    }
}
 
export default TechForBusiness;