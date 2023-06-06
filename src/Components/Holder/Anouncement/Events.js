import { Container, Typography } from '@material-ui/core';
import React from 'react';
import log from './Flier/afit2.jpg';
import log1 from './Flier/afit3.jpg';
import log2 from './Flier/afit4.jpg'

function Events() {
    const eventList = [
        log,
        log1,
        log2
    ]
  return (
    <>
        <Container>
            <div className='flex flex-row justify-around'>
                <Typography>Upcoming Events</Typography>
                {eventList.map((event, index) => {
                    return (
                        <img key={index} src={event} className='w-1/4 rounded-xl'/>
                    )
                })}
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
    </>
  )
}

export default Events