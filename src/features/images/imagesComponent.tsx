import React from 'react';
import { useSelector } from 'react-redux';

import './imagesComponent.css'
import { selectImageUrls } from './imagesSlice'


interface propsParameter {
  compWidth: string,
  compHeight: string,
  compBgColor: string,
}


//  const animatedElement = document.getElementById('div1');
//
//  animatedElement.addEventListener('animationend', (event) => {
//    debugger;
//    console.log('element: ' + event.target);
//    console.log('element id: ' + event.target.id);
//    console.log('event: ' + event.animationName);
//  });


export function ImagesComponent(props:propsParameter) {

  let imageContainerStyle = {
    width: '50px',
    height: '50px',
  };
  let imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  let imageUrls = useSelector(selectImageUrls);
  let imageComponents = imageUrls.map((imgUrl: string, idx: number) => {
    return (
      <div className="imageContainer" style={imageContainerStyle} key={idx}>
        <img className="image" style={imageStyle} src={imgUrl} />
      </div>
    );
  });

  let mainComponentStyle = {
    width: props.compWidth,
    height: props.compHeight,
    backgroundColor: props.compBgColor,
  };

  return (
    <div className="floatingImagesComponent" style={mainComponentStyle} >
      {imageComponents}
    </div>
  );

}
