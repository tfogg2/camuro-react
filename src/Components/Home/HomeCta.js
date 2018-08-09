import React, {Component} from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

class HomeCta extends Component {
  render(){
    return(
      <div className="home-cta">
         <h1>We buy Film.</h1>
         <h2 className="selling">Are you selling?</h2>
         <Link to="/sell"><button className="cta-btn">Let us know</button></Link>
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
