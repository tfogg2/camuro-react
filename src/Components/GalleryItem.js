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
      <a href={this.props.credit} target="_blank">
        <div className='gallery-item'>
          <div className={hoverClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <img src={this.props.image} alt={this.props.title} />
          </div>
        </div>
      </a>
    )
  }
}


      // <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
      //   <div className="cover"></div>
      //   <img src={require("../Assets/leica-r7.png")} alt="leica-r7" />
      // </div>


export default GalleryItem
