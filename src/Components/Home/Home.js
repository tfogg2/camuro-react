import React, { Component } from 'react';
import HomeContent from './HomeContent.js';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <div className="home-bg"></div>
        <HomeContent />
      </div>
    )
  }
}

export default Home;
