import "./Hero.scss";
import { FiDownload } from "react-icons/fi";

import { motion } from "framer-motion";


const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 35,
    },
  },
};
const imgVariants ={
  initial:{
    y:500,
    opacity:0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abdullahi Bashir</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend Developer and Desktop Application Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button  className="cv" variants={textVariants}>
              Download CV <FiDownload/>
            </motion.button>
            <motion.button className="Contact"  variants={textVariants}><a href="/#Contact">Contact Me</a></motion.button>
          </motion.div>
          
        </motion.div>
      </div>
      <motion.div className="slidingText" initial="initial" animate="animate"  variants={sliderVariants}>
        Website Developer Desktop Application Developer
      </motion.div>
      <motion.div className="imageContainer"
           variants={imgVariants}
           initial="initial"
           animate="animate"
      >
        <motion.img variants={imgVariants} src="/Hero.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
