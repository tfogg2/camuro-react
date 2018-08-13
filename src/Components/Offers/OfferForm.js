import React, {Component} from 'react';
import ReactContactForm from 'react-mail-form'
import axios from 'axios'
import SelectUSState from 'react-select-us-states'

class OfferForm extends Component {
  state = {
    active: false
  }

  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;
    const modelName = document.getElementById('modelName').value;
    const condition = document.getElementById('condition').value;
    const price = document.getElementById('price').value;
    const message = `state: ${state} \n modelName: ${modelName} \n condition: ${condition} \n price: ${price}`
    axios({
        method: "POST",
        url:"http://localhost:3002/send",
        data: {
            name: name,
            email: email,
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent.");
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
            this.resetForm()
        }
    })
  }

  inputActive() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  resetForm(){
    document.getElementById('contact-form').reset();
  }

  render(){
    const inputClass = this.state.active ? 'active' : ''
    return(
      <div className="sell-content">
        <div className="sell-form-content">
          <h1>Get An Offer</h1>
          <form className="sell-form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label for="name">NAME</label>
              <input type="name" className={inputClass} id="name" aria-describedby="customerName" onClick={this.inputActive.bind(this)}/>
            </div>
            <div className="form-group">
              <label for="email">EMAIL</label>
              <input type="email" className={inputClass} id="email" aria-describedby="emailHelp" onClick={this.inputActive.bind(this)}/>
            </div>
            <div className="form-group">
              <label for="state">STATE</label>
              <SelectUSState id="state" className="myClassName"/>
            </div>
            <div className="form-group item">
              <label for="modelName">MODEL NAME</label>
              <input type="text" className={inputClass} id="modelName" onClick={this.inputActive.bind(this)}/>
            </div>
            <div className="form-group item price">
              <label for="price">ASKING PRICE</label>
              <span>$</span>
              <input type="number" className={inputClass} id="price" onClick={this.inputActive.bind(this)}/>
            </div>
            <div className="form-group item">
              <label>ITEM CONDITION</label>
              <select id="condition" placeholder="Select item description">
                <option>Like New</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Well Used</option>
                <option>Heavily Used</option>
                <option>Faulty</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Get Offer</button>
          </form>
        </div>
      </div>
    )
  }
}

export default OfferForm;
