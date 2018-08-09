import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import GalleryItem from './GalleryItem.js'


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      gallery: GALLERY,
    }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render(){
    const Gallery = ({state:{ gallery }}) => (
      <div>
        {gallery.map(({image, title, credit}) => (
          <GalleryItem key={title} title={title} image={image} credit={credit} handleHover={this.handleHover} />
        ))}
      </div>
    )

    const UI = ({ state, state: { gallery } }) => (
      <Fade bottom>
        <div className="gallery">
          <div className="gallery-header">
            <h3>Photos for the People</h3>
            <p>By the People</p>
          </div>
          <div className="gallery-items">
            <Gallery state={state} />
          </div>
        </div>
      </Fade>
    )

    return <UI state={this.state}  />

  }
}

const GALLERY = [
  { image: require("../Assets/leica-r7.png"), title: "Nikon 35mm",credit: "This is an example description about some camera shenanigans."},
  { image: require("../Assets/camera-body.png"), title: "Canon Rebel", credit: "This is an example description about some camera shenanigans."},
  { image: require("../Assets/film.png"), title: "Film", credit: "This is an example description about some camera shenanigans."},
  { image: require("../Assets/lenses.png"), title: "Canon Prime 100mm", credit: "This is an example description about some camera shenanigans."},
  { image: require("../Assets/leica-r7.png"), title: "Sony Body", credit: "This is an example description about some camera shenanigans."},
  { image: require("../Assets/camera-body.png"), title: "Shutter Button", credit: "This is an example description about some camera shenanigans."},
]

export default Gallery;
