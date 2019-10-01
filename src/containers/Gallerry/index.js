import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GalleryItem from '../../components/GalleryItem';
import GalleryNav from '../../components/GalleryNav';

const images = [
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_8a4db5e7-4977-4882-9444-38b9491f2a23.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_8448c78b-acc6-4008-96cc-c349722ce26b.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_6eec9ba7-1c49-4baf-9154-53760954c61a.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_a02ccf71-14b8-42c9-acee-27ce4e3e8007.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_994c15f0-4755-44f6-8a25-e1d7b0ee1061.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_a9ffddd7-fa2a-457a-b715-7de2d1b73e67.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_5eb606bf-e9ba-40b8-ac3d-6eaa2bbba79d.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_d1505640-4ced-464c-992c-855ffac5cba1.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_7541e3d5-903a-4014-a7ba-f0be53ce186c.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_d98bc1be-8579-43c7-9203-01016524ed96.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_51f99b8e-1257-4fd2-ace8-fbd7a39cab97.jpeg',
  'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_6188510d-83ee-4e1c-93a0-9acd5d5d3870.jpeg',
]

class Gallery extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      totalCount: 0,
    };
  }
  
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      totalCount: images.length,
      currentSlideIndex: 1
    });
  }
  
  
  render(){
    const {nav1, nav2, totalCount, currentSlideIndex} = this.state;
    const gallerySettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      afterChange: (current) =>{
        this.setState({ currentSlideIndex: current + 1 })
      },
      beforeChange: (current, next) => {
        nav2.slickGoTo(next)
      }
    };
    const navSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      focusOnSelect: true,
      beforeChange: (current, next) => {
        nav1.slickGoTo(next)
      }
    };
    return (
      <Fragment>
        <Slider
          className="gallery"
          {...gallerySettings}
          ref={slider => (this.slider1 = slider)}
        >
          {
            images.map((item, id) => (
              <GalleryItem src={item} key={id}/>
            ))
          }
        </Slider>
        
        <div className="gallery-nav-wrap">
          <div className="gallery__counter">{currentSlideIndex}/{totalCount}</div>
          <Slider
            className="gallery-nav"
            {...navSettings}
            ref={slider => (this.slider2 = slider)}
          >
            {
              images.map((item, id) => (
                <GalleryNav onClick={this.handleNav} src={item} key={id}/>
              ))
            }
          </Slider>
        </div>
      </Fragment>
    )
  }
}


export default Gallery;
