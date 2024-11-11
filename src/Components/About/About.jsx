import { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";


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
    x: -200,
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

const About = () => {
  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="about-main-container"
    variants={textVariants}
    initial="initial"
   
    ref={ref}
    animate={isInView  && "animate"}
    >
      <div className="wrapper">
        <div className="text-img">
          <motion.div className="textContainer"
        
          >
            
            <motion.h2>About Me</motion.h2>
            <motion.div className="line"></motion.div>
            <h3>
              Expert Frontend Developer & Desktop Application Specialist With 3+
              Years Of Exprience
            </h3>
            <span>
              Highly motivated and detail-oriented developer with 2+ years of
              experience in building scalable and interactive web applications
              using HTML, CSS, JavaScript, and React. Additionally, proficient
              in developing desktop applications using Java GUI. Passionate
              about delivering high-quality solutions and staying up-to-date
              with industry trends.
            </span>
            <span>
              As a seasoned <b>frontend developer</b>, I excel in crafting responsive,
              user-friendly interfaces with HTML, CSS, JavaScript, and React. My
              expertise includes: <br />
              Frontend development (HTML5, CSS3, JavaScript ES6+) <br />
              React ecosystem (React Hooks, Redux, Context API)
              <br /> Responsive web design (Mobile-First, Accessibility) <br />
              State management and optimization techniques
            </span>
            <span>
              In <b>desktop application</b> development, I leverage Java GUI to create
              efficient and intuitive applications, focusing on: <br />
              Java GUI (Swing, AWT, JavaFX) <br />
              Object-Oriented Programming (OOP)
              <br />
              principles - Event-driven programming and multithreading <br />
              Database integration and API connectivity
            </span>
          </motion.div>
          <motion.div className="imageContainer"
             variants={imgVariants}
             initial="initial"
             animate="animate"
          >
            <motion.div className="imageBackground">
              <motion.img variants={imgVariants} src="/Hero.png" alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
