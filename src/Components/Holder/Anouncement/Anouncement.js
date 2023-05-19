import { Box } from '@material-ui/core';
import { Container } from '@mui/system';
import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import afit from './Flier/afit.jpg';
import afit1 from './Flier/afit1.jpg';
import afit2 from './Flier/afit2.jpg';
import afit3 from './Flier/afit3.jpg';
import afit4 from './Flier/afit4.jpg';

function Anouncement() {
  const images = [
    afit,
    afit1,
    afit2,
    afit3,
    afit4
  ]
  const imageElements = images.map((image, index) => {
    return <img key={index} src={image} className='my-anouncement pt-6 w-full object-contain' />
  });

  return (
    <div>
        <Container>
          <Box>
          <AliceCarousel
              mouseTracking
              // autoHeight
              // autoWidth
              infinite
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls
              disableButtonsControls
              responsive
              autoPlay
              items={imageElements}
            />
          </Box>
        </Container>
    </div>
  )
}

export default Anouncement