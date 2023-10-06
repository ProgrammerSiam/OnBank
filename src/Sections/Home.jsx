import { BsFillPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { useState } from "react";
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container flex justify-around gap-10">
        {/* content */}
        <div className="md:w-full lg:max-w-[50%] ">
          <div className="flex flex-col items-start mt-20 gap-y-5">
            <h2 className="head_text">
              A new kind of Bank
              <div className="w-20 h-[5px] bg-purple mb-3"></div>
            </h2>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              quia corrupti dolorem dolor maiores quae accusamus omnis beatae
              quam
            </p>
            <button className="px-5 py-3 font-semibold text-white duration-300 rounded-full hover:bg-gradient-to-r from-violet-400 to-indigo-500 bg-purple">
              Start building credit
            </button>
          </div>
          {/* video */}
          <div className="flex items-center mt-10 gap-x-5 lg:mt-24">
            <div onClick={openModal} className="relative">
              <BsFillPlayFill
                size={25}
                className="absolute rounded-full cursor-pointer bottom-8 left-16 bg-primary text-dark"
              />
              <img
                className="object-center w-40 rounded-xl"
                src="https://i.ibb.co/HnhF6nG/home-video-img-1.jpg"
                alt="home-video"
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

            {/* content */}
            <div className="">
              <h2 className="text-2xl font-semibold">Introducing Self</h2>
              <p className="mt-2 text-sm font-medium text-dark">
                Watch This Video
              </p>
              <div className="w-12 h-[2px] bg-purple mb-3"></div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="hidden lg:block">
          <img
            className="absolute object-cover duration-300 shadow-lg cursor-pointer w-80 rounded-xl right-80 bottom-20 "
            src="https://i.ibb.co/RBHXB1q/card.png"
            alt="home-card"
          />
          <img
            className=""
            src="https://i.ibb.co/F8gvg7f/home-img.png"
            alt="home-images"
          />
        </div>
      </div>
    </section>
  );
}
