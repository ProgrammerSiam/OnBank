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

export default function App() {
  return (
    <div>
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
