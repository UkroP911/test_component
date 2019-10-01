import React from 'react';
export default (props) => (
  <div className="popup">
    <button className="popup__close" onClick={props.onClick}/>
    <div className="popup__body">
      {props.children}
    </div>
  </div>
)
