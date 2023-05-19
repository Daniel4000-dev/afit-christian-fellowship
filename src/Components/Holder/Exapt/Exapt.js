import React from 'react';
import exapt from '../../Holder/Exapt/ExaptFiles/exapt.jpg';
import exapt1 from '../../Holder/Exapt/ExaptFiles/exapt1.jpg';
import exapt2 from '../../Holder/Exapt/ExaptFiles/exapt2.jpg';
import exapt3 from '../../Holder/Exapt/ExaptFiles/exapt3.jpg';
import exapt4 from '../../Holder/Exapt/ExaptFiles/exapt4.jpg';
import exapt5 from '../../Holder/Exapt/ExaptFiles/exapt5.jpg';
import exapt6 from '../../Holder/Exapt/ExaptFiles/exapt6.jpg';
import exapt7 from '../../Holder/Exapt/ExaptFiles/exapt7.jpg';
import exapt8 from '../../Holder/Exapt/ExaptFiles/exapt8.jpg';
import exapt9 from '../../Holder/Exapt/ExaptFiles/exapt9.jpg';
import exapt10 from '../../Holder/Exapt/ExaptFiles/exapt10.jpg';
import { Box, Container } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';

function Exapt() {

    const images = [
        exapt,
        exapt1,
        exapt2,
        exapt3,
        exapt4,
        exapt5,
        exapt6,
        exapt7,
        exapt8,
        exapt9,
        exapt10
      ]

    const imageElements = images.map((image, index) => {
        return <img key={index} src={image} className='pt-6 w-full object-contain z20' />
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
          autoPlayInterval={5000}
          animationDuration={3000}
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

export default Exapt