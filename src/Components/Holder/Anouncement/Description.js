import React, { useEffect } from "react";
import Logo from "../../photo/logo.png";
import {  motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function Description() {
    const {ref, inView} = useInView({
        threshold: 0.1
    });
    const animation = useAnimation(); 

    useEffect(() => {
        if(inView){
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1.5,
                    // when: "beforeChildren"
                }
            })
        }
        if(!inView){
            animation.start({y: '20vw', opacity: 0})
        }
    console.log("use effect hook, inview", inView); 
}, [inView])
  return (
    <motion.div
     className="lg:flex items-center pt-12"
     >
      <div className="lg:px-16">
        <img
          src={Logo}
          style={{ width: "40vw", height: "50vh", border: 50 }}
          className="contain rounded-lg mx-auto "
          alt=""
        />
      </div>

      <motion.div
      ref={ref}
        animate={animation}
        // style={{ }}
        className="w-2/3 text-center lg:pl-11 mx-auto pt-7"
      >
        <h1 className="text-sky-500 text-2xl whitespace-pre-line">
          Welcome to Afit Christian Fellowship
        </h1>
        <p className="text-xl bold whitespace-pre-line pt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti id
          asperiores sunt. Nostrum nobis odio excepturi similique officia fugit,
          veritatis quaerat, aut maxime laboriosam laudantium doloribus, beatae
          obcaecati exercitationem distinctio?
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Description;
