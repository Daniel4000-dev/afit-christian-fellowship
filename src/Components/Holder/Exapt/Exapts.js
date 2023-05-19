import { Container } from '@material-ui/core';
import React from 'react';
import ExBg from '../../photo/ExBg.jpg'
import Exapt from './Exapt';

function Exapts() {
  return (
    <div className='flex justify-center pt-7 relative'>
        <Exapt />
    {/* <Container className='flex justify-center pt-7'> */}
        {/* <img
        sc={ExBg} 
        className='h- w-2/3 object-contain relative'
        alt=''
        /> */}
    {/* </Container> */}
    </div>
  )
}

export default Exapts