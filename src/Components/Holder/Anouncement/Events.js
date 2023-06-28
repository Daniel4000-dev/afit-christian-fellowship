import { Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import log from './Flier/afit2.jpg';
import log1 from './Flier/afit3.jpg';
import log2 from './Flier/afit4.jpg';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

function Events() {
    const [selectedId, setSelectedId] = useState(null)

    const {ref, inView} = useInView({
        threshold: 0.1,
      });
      const animation = useAnimation();
    
      useEffect(() => {
        if(inView){
          animation.start({
            y:0,
            opacity: 1,
            transition: {
              duration: 1.5
            }
          })
        }
        if(!inView){
          animation.start({
            y: '10vw', 
            opacity: 0.2
          })
        }
        console.log('footer is currently inview', inView)
      }, [inView])

    const eventList = [
        log,
        log1,
        log2
    ]
  return (
    <motion.div ref={ref} className='bg-slate-200 pb-5'>
        <Container className='justify-items-center'>
            <motion.div animate={animation}>
                <Typography className='text-center pt-10 pb-6'>Upcoming Events</Typography>
            </motion.div>
           <div className='lg:flex lg:flex-row lg:justify-around'>
                {eventList.map((event, index) => {
                    return (
                        <motion.img key={index} src={event} layoutId={event.id} onClick={() => setSelectedId(event.id)} className='lg:w-1/4 lg:flex-1 lg:w-12 sm:p-2 rounded-xl lg:hover:shadow-md'/>
                    )
                })}

                <AnimatePresence>
                    {selectedId && (
                        <motion.img layoutId={selectedId}>
                            <motion.button onClick={() => setSelectedId(null)} />
                        </motion.img>
                    )}
                </AnimatePresence>
                {/* <div>
                    <img src={log} alt=''/>
                </div>

                <div>
                    <img src={log1} alt=''/>
                </div>

                <div>
                    <img src={log2} alt=''/>
                </div> */}
            </div>
        </Container>
    </motion.div>
  )
}

export default Events