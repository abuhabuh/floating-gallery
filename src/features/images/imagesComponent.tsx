import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectImageUrls } from './imagesSlice'

export function ImagesComponent() {

  let imageUrls = useSelector(selectImageUrls);
  let imageComponents = imageUrls.map((imgUrl: string, idx: number) => {
    return (
      <div key={idx}> {imgUrl} </div>
    );
  });

  return (
    <div>
      <h1> Images go here </h1>
      {imageComponents}
    </div>
  );
}
