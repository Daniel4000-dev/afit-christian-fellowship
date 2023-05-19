import { Facebook, Instagram } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { Typography } from '@mui/material';


function Footer() {

  const {ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        y:0,
        opacity: 1,
        transition: {
          duration: 2.5
        }
      })
    }
    if(!inView){
      animation.start({
        y: '-5vw', 
        opacity: 0
      })
    }
    console.log('footer is currently inview', inView)
  }, [inView])
  return (
    <motion.footer 
      className='w-full bg-sky-900'
      ref={ref}
    >
      <motion.div animate={animation}>
            <img  /*src={logo}*/ alt="" />
            <Typography className="text-white text-center lg:hidden xl:hidden font-montserrat font-bold">AFIT CHRISTIAN FELLOWSHIP</Typography>

        <div className=" sm:text-center md:text-center">
            <div className="lg:hidden xl:hidden" >
                <Typography
                    className="text-white text-center text-sm font-montserrat font-bold"
                >
                    © Copyright ACF 2023. All Rights Reserved. Designed and Developed by
                    </Typography>
                    <Typography
                    className="text-white text-center text-sm font-montserrat font-bold"
                    >
                        ACF MEDIA DEPERTMENT
                    </Typography>
            </div>
            <div className="lg:hidden xl:hidden flex justify-center">
               <a href="https://www.google.com" target="_blank"> 
               <Facebook className="text-white hover:text-cyan-400 transition-colors duration-30" /> 
               </a>
               <a href="https://www.google.com" target="_blank"> 
               <Instagram className="text-white hover:text-cyan-400 transition-colors duration-10" /> 
               </a>
            </div>

            <div className="hidden flex justify-center lg:flex">
                    <Typography className=" text-sm text-left p-4" >
                        ACF © 2023. All Rights Reserved.
                    </Typography>
                    <div className="ml-auto p-4">
                    <a href="https://www.google.com" target="_blank" className="p-2 hover:border-y-2 hover:border-cyan-400 transition-colors duration-500 ease-in-out"> 
                        <Facebook className="lg:text-3xl text-white hover:text-cyan-400" /> 
                    </a>
                    <a href="https://www.google.com" target="_blank" className="p-2 hover:border-y-2 hover:border-cyan-400 transition-colors duration-500 ease-in-out"> 
                        <Instagram className="lg:text-3xl text-white hover:text-cyan-400" /> 
                    </a>
                    </div>
            </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer