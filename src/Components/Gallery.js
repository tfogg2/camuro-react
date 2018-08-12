import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import GalleryItem from './GalleryItem.js'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'




class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      displayCategory: "The Cameras",
      galleryCategories: GALLERY_CATEGORIES
    }
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category, e) {
    e.preventDefault()
    this.setState({
      displayCategory: category
    })
  }


  render(){
    const Gallery = ({state:{ gallery, displayCategory }}) => (
      <div>
        {gallery
          .filter(
            ({ category }) =>
              displayCategory === category
          )
          .map(({image, title, credit, category}) => (
          <GalleryItem key={title} title={title} image={image} credit={credit} category={category} handleHover={this.handleHover} />
        ))}
      </div>
    )

    const UI = ({ state, state: { gallery, galleryCategories }, setCategory }) => (
      <div className="gallery">
        <div className="gallery-header">
          <h3>Photos for the People</h3>
          <p>By the People</p>
        </div>
        <ul className="product-nav">
          {ListCategories(galleryCategories, setCategory )}
        </ul>
        <div className="gallery-items">
          <Gallery state={state} />
        </div>
      </div>
    )

    return <UI state={this.state}  />

  }
}


const ListCategories = (galleryCategories, setCategory ) => (
  galleryCategories.map((category) => {
    const cat = category
    return (
      <li>
        <NavLink exact="true" to={'/' + cat} key={category} className={`${category}`} onClick={() => setCategory(category)}>
          {category}
        </NavLink>
      </li>
    )
  })
)

const GALLERY = [
  { image: require("../Assets/chad-dalke.jpg"), title: "Shutter Button", credit: "https://unsplash.com/photos/4fydl6bJT8k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/hanny.jpg"), title: "Canon Rebel", credit: "https://unsplash.com/photos/-3savqescr8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/filtergrade-nikon.jpg"), title: "Film", credit: "https://unsplash.com/photos/vn5MU5VwdjQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/ariel.jpg"), title: "Sony Body", credit: "https://unsplash.com/photos/LaxqfiF6yp8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex", category: "The Cameras"},
  { image: require("../Assets/joseph-chan.jpg"), title: "Canon Rebel", credit: "https://unsplash.com/photos/99Ty_Vme3wA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/jesus-santos.jpg"), title: "Canon Rebel", credit: "https://unsplash.com/photos/_T3upUiCqEE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Cameras"},
  { image: require("../Assets/mpho-mojapelo.jpg"), title: "Canon Rebel", credit: "https://unsplash.com/photos/2TCy8pqFXsE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Photos"},
  { image: require("../Assets/luo-ping.jpg"), title: "Canon Rebel", credit: "https://unsplash.com/photos/q2xUk_LEFOw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", category: "The Photos"},
]

const uniqueItems = (x, i, array) => array.indexOf(x) === i
const GALLERY_CATEGORIES = GALLERY.map(prod => prod.category).filter(
  uniqueItems
)

GALLERY_CATEGORIES.sort()

export default Gallery;
