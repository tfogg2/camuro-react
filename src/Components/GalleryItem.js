import React, {Component} from 'react'

const GalleryItem = props => {

  return(
    <div className="gallery-item" >
      <img src={props.image} alt={props.title} />
    </div>
  )
}


      // <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      //   <div className="cover"></div>
      //   <img src={require("../Assets/leica-r7.png")} alt="leica-r7" />
      // </div>


export default GalleryItem
