import React, {Component} from 'react'

class GalleryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render(){
    const hoverClass = this.state.isHovered ? "gallery-image hovered" : "gallery-image"
    return(
      <div className='gallery-item'>
        <div className={hoverClass}>
          <h3>{this.props.title}</h3>
          <img src={this.props.image} alt={this.props.title} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}/>
        </div>
      </div>
    )
  }
}


      // <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      //   <div className="cover"></div>
      //   <img src={require("../Assets/leica-r7.png")} alt="leica-r7" />
      // </div>


export default GalleryItem
