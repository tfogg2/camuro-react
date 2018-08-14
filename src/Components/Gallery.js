import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import GalleryItem from './GalleryItem.js'
import Pagination from "react-js-pagination"
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'




class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      isOpen: false,
      activePage: 15
    }
  }

  componentDidMount() {
    const { data: allPhotos = [] } = GALLERY;
    this.setState({ allPhotos });
  }
  onPageChanged = data => {
    const { allPhotos } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentPhotos = allPhotos.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentPhotos, totalPages });
  }


  render(){
    const { currentPhotos, currentPage, totalPages } = this.state
    const allPhotos = this.state
    const totalPhotos = allPhotos.length

    if (totalPhotos === 0) return null;


    const Gallery = ({state:{ gallery }}) => (
      <div>
        {gallery
          .map(({image, title, credit}) => (
          <GalleryItem key={title} title={title} image={image} credit={credit} onClick={this.toggleModal} handleHover={this.handleHover} />
        ))}
      </div>
    )

    const UI = ({ state, state: { gallery },  }) => (
      <div className="gallery">
        <div className="gallery-header">
          <h3>Photos for the People</h3>
          <p>By the People</p>
        </div>
        <div className="gallery-items">
          <Gallery itemsCountPerPage={4} state={state}/>
        </div>
      </div>
    )

    return <UI state={this.state}  />

  }
}

const GALLERY = [
  { image: require("../Assets/chad-dalke.jpg"), title: "Chad Dalke", credit: "https://unsplash.com/photos/4fydl6bJT8k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/filtergrade-nikon.jpg"), title: "Filter Grade", credit: "https://unsplash.com/photos/vn5MU5VwdjQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/joseph-chan.jpg"), title: "Joseph Chan", credit: "https://unsplash.com/photos/99Ty_Vme3wA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/jesus-santos.jpg"), title: "Jesus Santos", credit: "https://unsplash.com/photos/_T3upUiCqEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
]

export default Gallery;
