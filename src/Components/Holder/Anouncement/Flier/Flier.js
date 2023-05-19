import React, { createContext } from 'react';
import afit from '../Flier/afit.jpg';
import afit1 from '../Flier/afit1.jpg';
import afit2 from '../Flier/afit2.jpg';
import afit3 from '../Flier/afit3.jpg';
import afit4 from '../Flier/afit4.jpg';

export const ImageContext = createContext([]);

function Flier() {

    const images = [
        afit,
        afit1,
        afit2,
        afit3,
        afit4
    ]
    const imageElements = images.map((image, index) => {
        return <img key={index} src={image} className='w-3/4 h-3/4' />
    });
    console.log(imageElements)

  return (
    <ImageContext.Provider value={imageElements}>
        <div>
         {imageElements}
        </div>
    </ImageContext.Provider>
  )
}

export default Flier