import React, { Component } from 'react';
import { motion } from 'framer-motion';

const style = { 
    overflow: "hidden", 
    display: "flex", 
    fontize: "4rem", 
    mrginLeft: "0.1rem", 
    display: "hidden",
    opacity: 0
}

function AnimatedText({ text }) {

    const letters = Array.from(text);

    const container = {
    hidden: { opacity: 0 },
    visible: (i = 1 ) => ({
        opacity: 1,
        transition: { staggerChildren: 0.09, delayChildren: 1 * i, delay: 2},
    }),
    };

    const child = {
    visible:{
        opacity: 1,
        x: 0,
        transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        }
    },
    hidden: {
        opacity: 0,
        x: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }
    }
  return (
    <motion.div 
    style={style}
     variants={container} 
     initial="hidden" 
     animate="visible"
     >
         {letters.map((letter,index) => (
            <motion.span 
            style={{
                color: "#12a2e1",
                fontFamily: "montserrat",
                textlign: "center",
                mrgiLeft: "0.1rem",
                display: 'hidden',
            }}
            variants={child}
            key={index}>
                {letter ===" "? "\u00A0":letter}
            </motion.span>
        ))}
    </motion.div>
  )
}

export default AnimatedText