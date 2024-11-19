import { useRef } from "react";
import "./Projects.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

const imgVariants = {
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
const textVariants = {
  initial: {
    x: 200,
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

const items = [
  {
    id: 1,
    title: "Elvis todo App",
    img: "/TODO.jpg",
    description:
      "Todo App is a task manager built with React and CSS. Users can select their preferred language, add and delete tasks, and mark them as Todo, doing and Done. The app utilizes local storage to persist data between sessions. With a responsive design, Todo App is accessible on desktop and mobile devices.",
    link: "https://abdullahibbtwd.github.io/elvistodo/",
  },
  {
    id: 2,
    title: "Elvis WeatherApp",
    img: "/weather.jpg",
    description:
      "Welcome to elvis Weather App, your ultimate weather companion. Built with React and CSS, our website provides accurate and reliable weather forecasts powered by OpenWeatherMap API. Stay informed with current weather conditions, hourly forecasts, and 5-day forecasts.Track the weather in your location. Simple, intuitive, and responsive design for mobile and desktop devices",
    link: "https://abdullahibbtwd.github.io/elvisweatherapp/",
  },
  {
    id: 3,
    title: "Hakimi Store Desktop Application",
    img: "/DESKTOP.jpg",
    description:
      "Hakimi Store is a comprehensive store management desktop application developed with Java. This intuitive app enables users to manage inventory, process sales, and print receipts.",
    description2: "Key features include:",
    description3:
      "User signin/authentication for secure access,Product management (add, edit, delete) with local database storage,Sales processing and receipt printing,Local database storage for efficient data management.",
    link: "https://video-five-livid.vercel.app/",
  },
  {
    id: 4,
    title: "Elvis Blog",
    img: "/elvisblog.jpg",
    description:
      "A fully-featured blog application built with React and SASS, showcasing a seamless user experience through efficient routing with React Router. The application consists of:",
    description2:
      "Posting page for creating new blog posts,Main blog page for displaying all posts,Edit post page for modifying existing posts,Single post page for viewing individual posts,and Login and registration system for secure user authentication",
    description3:
      "This project showcases my ability to design and develop responsive, interactive web applications with React and SASS, leveraging React Router for seamless routing.",
      link:"https://elvis-blog-sandy.vercel.app/"
    },
  {
    id: 5,
    title: "JICOHSAT",
    img: "/jicohsat.jpg",
    description:
      "A responsive and interactive web application built with React, Framer Motion, and Tailwind CSS, featuring a landing page, login, and registration system, all seamlessly integrated with React Router for efficient routing.",
    description2:
      "Key Features: Responsive landing page with engaging animations (Framer Motion),Smooth routing between pages using React Router,Consistent design language throughout the application (Tailwind CSS),and Mobile-friendly and accessible interface",
    description3:
      "This project showcases my ability to design and develop responsive, interactive web applications with React, Framer Motion, and Tailwind CSS, leveraging React Router for seamless routing.",
    link: "https://jicohsa-school.vercel.app/",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            variants={imgVariants}
            initial="initial"
            //animate="animate"
            ref={ref}
            animate={isInView && "animate"}
            className="imagecontainer"
            ref={ref}
          >
            <img src={item.img} alt="" />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="initial"
            //animate="animate"
            ref={ref}
            animate={isInView && "animate"}
            className="textcontainer"
            ref={ref}
            style={{ y: y }}
          >
            <h2>{item.title}</h2>
            <p className="class">{item.description}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
            <a href={item.link}>
              <motion.button whileHover={{ background: "white" }}>
                See Demo
              </motion.button>
            </a>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //  offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref} id="Project">
      <div className="progress">
        <h1>Recent Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
