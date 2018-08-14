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
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }


  render(){
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
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={4}
          totalItemsCount={8}
          onChange={this.handlePageChange}
        ></Pagination>
      </div>
    )

    return <UI state={this.state}  />

  }
}

const GALLERY = [
  { image: require("../Assets/chad-dalke.jpg"), title: "Chad Dalke", credit: "https://unsplash.com/photos/4fydl6bJT8k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/hanny.jpg"), title: "Hanny Naibaho", credit: "https://unsplash.com/photos/-3savqescr8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/filtergrade-nikon.jpg"), title: "Filter Grade", credit: "https://unsplash.com/photos/vn5MU5VwdjQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/ariel.jpg"), title: "Ariel Domenden", credit: "https://unsplash.com/photos/LaxqfiF6yp8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex", category: "The Cameras"},
  { image: require("../Assets/joseph-chan.jpg"), title: "Joseph Chan", credit: "https://unsplash.com/photos/99Ty_Vme3wA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/jesus-santos.jpg"), title: "Jesus Santos", credit: "https://unsplash.com/photos/_T3upUiCqEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/mpho-mojapelo.jpg"), title: "Mpho Mojapelo", credit: "https://unsplash.com/photos/2TCy8pqFXsE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Photos"},
  { image: require("../Assets/luo-ping.jpg"), title: "Luo Ping", credit: "https://unsplash.com/photos/q2xUk_LEFOw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Photos"},
]

export default Gallery;
