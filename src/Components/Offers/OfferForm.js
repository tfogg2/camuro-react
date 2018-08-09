import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';

class OfferForm extends Component {
  render(){
    return(
      <div className="sell-content">
        <div className="sell-form-content">
          <h1>Tell us about your product</h1>
          <ReactContactForm to="address@gmail.com" className="sell-form" titlePlaceholder="Canon Rebel..." buttonText="Send" contentsPlaceholder="Description..."/>
        </div>
      </div>
    )
  }
}

export default OfferForm;
