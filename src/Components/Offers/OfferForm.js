import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';

class OfferForm extends Component {
  render(){
    return(
      <div className="content">
        <div className="sell-form-content">
          <h2>SELL US YOUR SHIT</h2>
          <ReactContactForm to="address@gmail.com" className="sell-form" titlePlaceholder="Item..." buttonText="Send" contentsPlaceholder="Description..."/>
        </div>
      </div>
    )
  }
}

export default OfferForm;
