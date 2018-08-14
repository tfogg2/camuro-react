import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render(){
    return(
      <div className="content">
        <div className="about">
          <h3>About</h3>
          <p>Something about us.</p>
        </div>
      </div>
    )
  }
}

export default About;
