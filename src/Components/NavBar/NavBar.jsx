
import {  motion } from "framer-motion";
import "./NavBar.scss";
import SideBar from "../SideBar/SideBar";
import Logo from "../../../public/elversh.png"




const NavBar = () => {
  return (
    <div className="navbar">

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={Logo} alt="" />
        </motion.span>
        <div className="social">
        <motion.a
            whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#Home"
          >
            Home
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#About"
          >
            About
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#Services"
          >
           Services
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#Project"
          >
           Project
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#Skills"
          >
            Skills
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="/#Contact"
          >
          Contact Me
          </motion.a>
        
        </div>
        <div className="sidebarrr">
           <SideBar/>
        </div>
       
      </div>
     
    </div>
  );
};

export default NavBar;
