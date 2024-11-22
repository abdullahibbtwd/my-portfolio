import "./Skill.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -10,
    opacity: 0,
  },
  animate: {
    x: -5,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const Skill = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="container">
      <div className="main-title">
        <h1>My Skills</h1>
       
      </div>

      <div className="row">
        <div className="col">
          <div className="sub">
            <h2>Frontend Skills</h2>
          </div>

          <div className="skill-container">
            <div className="skill">
              <div className="subject">HTML</div>
              <div className="progress-bar" value="94%">
                <motion.div
                  className="progress-line"
                  style={{ maxWidth: "94%" }}
                >
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </motion.div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">CSS</div>
              <div className="progress-bar" value="75%">
                <div className="progress-line" style={{ maxWidth: "75%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JAVASCRIPT</div>
              <div className="progress-bar" value="65%">
                <div className="progress-line" style={{ maxWidth: "65%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">REACT</div>
              <div className="progress-bar" value="75%">
                <div className="progress-line" style={{ maxWidth: "75%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">SASS</div>
              <div className="progress-bar" value="80%">
                <div className="progress-line" style={{ maxWidth: "80%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Tailwind css</div>
              <div className="progress-bar" value="70%">
                <div className="progress-line" style={{ maxWidth: "70%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Git & Github</div>
              <div className="progress-bar" value="90%">
                <div className="progress-line" style={{ maxWidth: "90%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Framer Motion</div>
              <div className="progress-bar" value="80%">
                <div className="progress-line" style={{ maxWidth: "80%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">Material UI</div>
              <div className="progress-bar" value="70%">
                <div className="progress-line" style={{ maxWidth: "70%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">TypeScript</div>
              <div className="progress-bar" value="60%">
                <div className="progress-line" style={{ maxWidth: "60%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="sub">
            <h2>Desktop Application Skills</h2>
          </div>

          <div className="skill-container">
            <div className="skill">
              <div className="subject">JAVA</div>
              <div className="progress-bar" value="70%">
                <div className="progress-line" style={{ maxWidth: "70%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JAVA SWING</div>
              <div className="progress-bar" value="72%">
                <div className="progress-line" style={{ maxWidth: "72%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">MY SQL</div>
              <div className="progress-bar" value="75%">
                <div className="progress-line" style={{ maxWidth: "75%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
            <div className="skill">
              <div className="subject">JAVA AWT</div>
              <div className="progress-bar" value="60%">
                <div className="progress-line" style={{ maxWidth: "60%" }}>
                  <motion.div
                    variants={textVariants}
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    className="c"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
