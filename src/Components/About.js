import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
  render(){
    return(
      <div className="content">
        <div className="about">
          <h1>About</h1>
          <p>Something about us.</p>
          <br/>
          <label>Picture Credit:</label>
          <ul className="credit">
            <li>Photo by <a href="https://unsplash.com/photos/vn5MU5VwdjQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" >FilterGrade</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/LaxqfiF6yp8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Ariel Domenden</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/4fydl6bJT8k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank"> Chad Dalke</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/-3savqescr8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Hanny Naibaho</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/99Ty_Vme3wA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Joseph Chan</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/_T3upUiCqEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jesus Santos</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/1z1F5Qc30Bs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Mia Domenico</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/2TCy8pqFXsE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Mpho Mojapelo</a></li>
            <li>Photo by <a href="https://unsplash.com/photos/q2xUk_LEFOw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Luo ping</a></li>
            <li>Photo by <a href="" target="_blank"></a></li>
            <li>Photo by <a href="" target="_blank"></a></li>
            <li>Photo by <a href="" target="_blank"></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About;
