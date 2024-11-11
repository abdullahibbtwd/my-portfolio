import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const imgVariants = {
  initial: {
    x: 500,
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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className="main-services"
    >
      <div className="services">
        <h1>Services</h1>
        <div className="containers">
          <h2>
            I focus on helping your brand grow
            <br /> and move forward
          </h2>
          <p className="p">What We Do?</p>
          <div className="container">
            <motion.div
              variants={textVariants}
              initial="initial"
              ref={ref}
              animate={isInView && "animate"}
              className="box"
            >
              <p>Frontend Development</p>
              <span>
                As a junior frontend developer, I offer reliable and efficient
                services to help you bring your web project to life.
              </span>
              <p>My Services</p>
              <li>Responsive Web Design</li>
              <li>Web Application Development</li>
              <li>Frontend Optimization</li>
              <li>Cross-Browser Compatibility</li>
            </motion.div>
            <motion.div
              variants={imgVariants}
              initial="initial"
              ref={ref}
              animate={isInView && "animate"}
              className="box"
            >
              <p>Desktop App Development</p>
              <span>
                As a junior Java developer, I offer reliable and efficient
                services for desktop application development.
              </span>
              <p >My Services</p>
              <li>Java Application Development</li>
              <li>GUI Design and Development</li>
              <li>Database Integration</li>
              <li>Application Maintenance</li>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
