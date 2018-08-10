import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class HomeCta extends Component {
  render(){
    return(
      <div className="home-cta">
         <h1>Selling your gear?</h1>
         <Link to="/sell"><h2 className="selling">Let us know.</h2></Link>
      </div>
    )
  }
}

export default HomeCta;




// <h1>Film.</h1><br/>
// <h1>It's what <Link to='/about'>we</Link> do.</h1>
// <Link to="/products">
//   <button className="cta-btn">
//     Shop Now
//   </button>
// </Link>
// <Link to="/sell"><button className="cta-btn">Let us know</button></Link>
