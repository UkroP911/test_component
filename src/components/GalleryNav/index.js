import React from 'react';

export default (props) => {
  return(
    <div className="gallery__item" onClick={props.onClick} >
      <img src={props.src} alt="" id={props.id}/>
    </div>
  )
}
