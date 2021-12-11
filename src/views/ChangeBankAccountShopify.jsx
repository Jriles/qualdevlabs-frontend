import Article from "../components/article";
import image from '../assets/bank.jpg';
import React from "react";
import settingsButton from "../assets/settings_button.png";
import paymentsSettingBtn from "../assets/payments_setting_btn.png";
import managePayoutsScreen from "../assets/manage_payouts_shopify.png";
import payoutDetailsPane from "../assets/payout_details_pane.png";
import bankAccountForm from '../assets/bank_account_form.png';

class ChangeBankAccountShopify extends React.Component {
    render() { 
        return <div>
            <Article image={image} title="Change your Bank Account in Shopify" ctaMessage="Need more help?"  content={
                <div className="text-white mb-5">
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-5 w-50 fs-5">
                            In this article we go though the process of updating or adding a new bank account to your Shopify store.
                            <br/>
                            <br/>
                            First, navigate to your store admin page and click on settings, in the bottom left corner.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={settingsButton} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            Next, click on Payments in the left side menu.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={paymentsSettingBtn} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            From the payments setting view click Manage.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={managePayoutsScreen} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            From here you'll be presented with a number of options, scroll down until you see
                            the Payout details header. Once you find that, click on Add bank account.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={payoutDetailsPane} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            At this point you'll be presented with a form that asks for your business's 
                            routing and account numbers. Fill those out, click Save and you should be good to go!
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-2">
                        <img src={bankAccountForm} className="img-fluid hero-img"></img>
                    </div>
                    <div className="d-flex align-center justify-content-center flex-row">
                        <p className="mt-4 w-50 fs-5">
                            That's it! Congrats on your successful bank account change.
                        </p>
                    </div>
                </div>
            }/>
        </div>;
    }
}
 
export default ChangeBankAccountShopify;