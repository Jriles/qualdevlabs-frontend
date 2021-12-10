import Article from "../components/article";
import image from '../assets/shopify_products.jpg';
import React from "react";
import exampleCSVImage from "../assets/example_products_csv.png";
import sideMenu from "../assets/side_menu.png";
import productsHeaders from "../assets/products_headers.png";
import importProductsPopup from "../assets/import_products_popup.png";
import validateProductsPopup from '../assets/validate_products_popup.png';

class UploadProductsToShopify extends React.Component {
    render() { 
        return <div>
            <Article image={image} title="Upload Products to Shopify from CSV" content={
                <div className="text-white mb-5">
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-5 w-50 fs-5">
                            Sometimes you want to migrate a number of products from another store or make batch changes to a number of products at once.
                            As part of that process, you'll want to push your new products back into Shopify. Here's a detailed guide on how to do that.
                            <br/>
                            <br/>
                            First, you're going to want to make sure your products are in the correct format.
                            You can download a 
                            <a href="https://help.shopify.com/csv/product_template.csv"> sample product csv file </a>
                            here.
                            <br/>
                            <br/>
                            But generally, your products are going to look something like this:
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={exampleCSVImage} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            Next, navigate to your store admin page and click on 
                            products from the left menu bar.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={sideMenu} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            From the products overview pane, click the Import link on the right hand side, 
                            just below your name.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={productsHeaders} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            You should be presented with a file upload popup, and from there you'll want to select
                            your csv.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={importProductsPopup} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            Click the Add file button and locate the products csv on your machine. 
                            <br/>
                            <br/>
                            You're almost there!
                            <br/>
                            <br/>
                            Once you've selected the .csv file you want to upload, click the Upload and continue button.
                            <br/>
                            <br/>
                            You should be presented with a summary of the products you want to upload, if everything looks good,
                            go ahead and click the green Import products button.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={validateProductsPopup} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            That's it! Congrats on your successful batch product upload.
                        </p>
                    </div>
                </div>
            }/>
        </div>;
    }
}
 
export default UploadProductsToShopify;