import React from "react";
import FlexRow from "./flexRow";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ContactForm extends React.Component {
    state = {
        email: "Email",
        note: "Note",
        modalHidden: true
    };

    handleEmailChange(event)
    {
        this.setState({email: event.target.value});
    }

    handleNoteChange(event)
    {
        this.setState({note: event.target.value});
    }

    handleDismissModal(event)
    {
        this.setState({modalHidden: true});
    }

    async submitForm(event)
    {
        event.preventDefault();
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios({
            url: "https://us-central1-qualdevlabsconsulting.cloudfunctions.net/sendEmail",
            method: 'post',
            data: {
                email: this.state.email,
                note: this.state.note
            },
            config
        });
        
        //show message sent modal
        this.setState({modalHidden: false});
    }

    render() { 
        return (
            <div className="form-spacing">
                {
                    this.state.modalHidden ? null : <div className="modal visible-modal">
                    <div className="modal-dialog dark-modal-border rounded text-white">
                        <div className="modal-content dark-modal border-0">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="exampleModalLabel">Message Sent!</h5>
                        
                            <button type="button" className="btn btn-success" onClick={(event) => this.handleDismissModal(event)}>Dismiss</button>
                        </div>
                        </div>
                    </div>
                </div>
                }
                <FlexRow>
                    <h1 className="text-white mt-5 mb-4">Get in Touch</h1>
                </FlexRow>
                <form onSubmit={(event) => this.submitForm(event)} className="lg-form mx-auto px-4">
                    
                    <div className="form-group">
                        <FlexRow>
                            <label className="text-white mb-3">Your Email</label>
                        </FlexRow>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(event) => this.handleEmailChange(event)}/>
                    </div>
                    
                    <div className="form-group mt-3">
                        <FlexRow>
                            <label className="text-white mb-3">Anything You'd Like to Share</label>
                        </FlexRow>
                        <textarea rows="4" className="form-control" id="exampleInputPassword1" onChange={(event) => this.handleNoteChange(event)}>{this.state.note}</textarea>
                    </div>
                    
                    <FlexRow><button type="submit" className="btn btn-lg btn-success mt-4 text-white">Submit</button></FlexRow>
                </form>
            </div>
        );
    }
}
 
export default withRouter(ContactForm);