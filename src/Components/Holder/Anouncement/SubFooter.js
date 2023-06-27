import { Divider } from '@material-ui/core';
import React from 'react';
import Logo from '../../photo/logo.png'

function SubFooter() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-end lg:pt-10 lg:pb-12 pt-8'>
        <div className='hidden lg:block pr-16 pt-5 items-center'>
            <img src={Logo} alt="" className='w-60 h-30 rounded-xl pl-'/>
        </div>

        <div className='lg:pl-10 pl-8'>
            <h1 className='w-2/5 lg:w-80 border-b-4 border-gray-500 text-2xl font-bold'>Get in Touch</h1>
            <p4></p4>
            <p4></p4>
            <p4></p4>
        </div>

        <div className='pl-8 lg:pl-2'>
            <h1 className='w-2/5 lg:w-80 border-b-4 border-gray-500 text-2xl font-bold'>Quick Links</h1>
            <p4></p4>
            <p4></p4>
            <p4></p4>
        </div>

        <div className='pl-8 lg:pl-2 mb-2 lg:mr-4'>
            <h1 className='w-2/5 lg:w-80  border-b-4 border-gray-500 text-2xl font-bold'>We Meet</h1>
            <div className='pb-3'>
                <p className='text-lg'>Tuesday</p>
                <p>6:30pm - 7:30pm</p>
            </div>
            
            <div className='pb-3'>
                <p className='text-lg'>Thursday</p>
                <p>5:30pm - 8:00pm</p>
            </div>
            
            <div className='pb-3'>
                <p className='text-lg'>Friday</p>
                <p>12:45pm - 2:00pm</p>
            </div>

            <div className='pb-3'>
                <p className='text-lg'>Sunday</p>
                <p>8:00am - 11:00am</p>
            </div>
        </div>

    </div>
  )
}

export default SubFooter