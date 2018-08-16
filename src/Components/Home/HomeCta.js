import React, {Component} from 'react'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'

class HomeCta extends Component {
  render(){
    return(
      <div className="home-cta">
         <h1>Film.</h1>
         <h2 className="selling" onClick={() => scrollToComponent(this.props.about, { offset: .5, align: 'bottom', duration: 1500})}>It's what we do.</h2>
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
