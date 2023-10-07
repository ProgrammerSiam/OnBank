import React from "react";
import Gallery from "./Sections/Gallery";
import Payment from "./Sections/Payment";
import Review from "./Sections/Review";
import AboutUs from "./Sections/AboutUs";
import Home from "./Sections/Home";
import Money from "./Sections/Money";
import Credit from "./Sections/Credit";
import Video from "./Sections/Video";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import Histories from "./Sections/Histories";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log("scrollYProgress:", scrollYProgress);

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <Home />
      <Gallery />
      <Money />
      <Credit />
      <Payment />
      <Histories />
      <Video />
      <Review />
      <AboutUs />
      <Footer />
    </div>
  );
}
