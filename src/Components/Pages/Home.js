import { ThemeProvider } from '@emotion/react';
import { Typography } from '@mui/material';
import {  createTheme, makeStyles } from '@mui/material/styles';
import { Box, Container } from '@mui/system';
import React from 'react';
import AnimatedText from '../Holder/AnimatedText';
import Anouncement from '../Holder/Anouncement/Anouncement';
import Flier from '../Holder/Anouncement/Flier/Flier';
import Exapt from '../Holder/Exapt/Exapt';
import Exapts from '../Holder/Exapt/Exapts';
import Service from '../Holder/Service';
import Navbar from '../Navbar/Navbar';
import video from '../video/video.mp4';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        type: "dark",
    },
})

function header() {

  return (
    <ThemeProvider theme={theme}>
      
    <Box>
      <Navbar />
      <div className='relative bg-gray-700'>
        <video autoPlay muted loop src={video} className="my-video relative w-full h-full object-cover"/>
        <div className="absolute text-center space-y-3 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-4/2 z-10">
          <Typography className='text-sky-400 sm:text-2xl md:text-2xl lg:text-7xl xl:text-7xl xl:text-7xl decoration-8 font-montserrat font-bold whitespace-nowrap'>WELCOME</Typography>
          <Typography className='text-sky-400 sm:text-2xl md:text-2xl lg:text-7xl xl:text-7xl  decoration-8 font-montserrat font-bold whitespace-nowrap'>TO</Typography>
          <Typography className='text-sky-400 sm:text-2xl md:text-2xl lg:text-7xl xl:text-7xl decoration-8 font-montserrat font-bold whitespace-nowrap'>AFIT CHRISTIAN FELLOWSHIP</Typography>
          <AnimatedText 
            className='opacity-0 lg-1 font-montserrat font-bold mt-7 '
            text='We are arrows to our generation. We are a peculiar people. We are a people of God.' 
          />
        </div>
      </div>
    </Box>
    {/* <Flier/> */}
    <Anouncement />
    <Exapt />
    <Exapts />
      <Service />
    </ThemeProvider>
  )
}

export default header