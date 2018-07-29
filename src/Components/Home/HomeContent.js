import React, {Component} from 'react';
import HomeCta from './HomeCta.js';
import HomeBrands from './HomeBrands.js';
import HomeProductTypes from './HomeProductTypes.js';
import HomeFeatured from './HomeFeatured.js';
import HomeInsta from './HomeInsta.js';
import HomeBottomCta from './HomeBottomCta.js';

class HomeContent extends Component {
  render(){
    return(
      <div className="home-content">
        <HomeCta />
        <HomeBrands />
        <HomeProductTypes />
        <HomeFeatured />
        <HomeInsta />
        <HomeBottomCta />

      </div>
    )
  }
}

export default HomeContent;
