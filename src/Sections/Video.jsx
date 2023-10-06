import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import Lottie from "lottie-react";
import videoAnimation from "../Assets/video.json"; // Adjust the relative path as needed

export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div
        className="relative"
        style={{
          backgroundImage: `url("https://i.ibb.co/M7hkn50/scott-graham-OQMZw-Nd3-Th-U-unsplash.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ backdropFilter: "blur(4px)" }}
          ></div>
        </div>

        <div className="container relative text-center">
          <div className="flex flex-col text-white flex-center">
            <h2 className="text-3xl font-semibold text-center">
              See how it works <br />
              in less than 1 minute
            </h2>

            <Lottie
              animationData={videoAnimation}
              loop={true}
              onClick={openModal}
              className="cursor-pointer w-28"

            />
           
          </div>

          {isModalOpen && (
            <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
              <div className="bg-primary md:w-full   lg:w-[50%] lg:h-[50%] p-8 rounded-lg relative">
                <button
                  onClick={closeModal}
                  className="absolute px-1 text-sm rounded-full top-2 right-2 bg-purple text-primary focus:outline-none"
                >
                  &#x2715;
                </button>
                <ReactPlayer
                  url="https://youtu.be/fTTGALaRZoc"
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
