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
import image from '../assets/shopify_brand_dark.png';

class ShopifyPillarPage extends React.Component {
    render() {
        const articles = [
            {
                title: "Upload Products from CSV to Shopify",
                path: "shopify/upload-products-from-csv"
            },
            {
                title: "Change your Bank Account",
                path: "shopify/change-bank"
            }
        ];
        const topicName = "Shopify";
        return <PillarPage topic={topicName} image={image} articles={articles}></PillarPage>;
    }
}
 
export default ShopifyPillarPage;