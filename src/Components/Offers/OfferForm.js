import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form';

class OfferForm extends Component {
  render(){
    return(
      <div className="content">
        <ReactContactForm to="address@gmail.com" />
      </div>
    )
  }
}

export default OfferForm;
