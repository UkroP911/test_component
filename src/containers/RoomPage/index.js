import React, {Component} from 'react';

import PopUp from '../../components/PopUp';
import Gallerry from '../Gallerry';

const heroImg = 'https://d1jhx8f0okmpxm.cloudfront.net/uploads/pictures/width_1080_8a4db5e7-4977-4882-9444-38b9491f2a23.jpeg'

class RoomPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  openPopup = () => {
    this.setState({
      isOpen: true,
    });
  };
  
  closePopup = () => {
    this.setState({
      isOpen: false,
    });
  };
  
  render() {
    const {isOpen} = this.state;
    
    return (
      <div className="room">
        <div className="room__hero" onClick={this.openPopup}>
          <img src={heroImg} alt=""/>
        </div>
        {
          isOpen && (
            <PopUp onClick={this.closePopup}>
              <Gallerry/>
            </PopUp>
          )
        }
      </div>
    );
  }
  
}

export default RoomPage
