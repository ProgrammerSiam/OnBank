import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Review() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container">
        {/* title */}
        <div className="text-center">
          <h2 className="head_text">Real people, real results</h2>
          <p className="mt-5 text-sm desc">
            Our 1,8000,8000 people have signed up to build credit with sell with
            <br />
            <span className="font-semibold">4.8 satisfaction ration</span> based
            on <span className="font-semibold">2000+rating</span>
          </p>
        </div>
        <div className="w-full mt-5">
          <Swiper
            breakpoints={{
              240: {
                width: 640,
                slidesPerView: 1,
              },
              540: {
                width: 640,
                slidesPerView: 2,
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            slidesPerView={6}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col p-6 mt-5 gap-y-3 bg-primary rounded-3xl">
                <img
                  className="object-cover mb-3 rounded-full w-11 h-11"
                  src="https://i.ibb.co/G9m35g8/pexels-stefan-stefancik-91227.jpg"
                  alt="review-person-1"
                />

                <p className="text-sm desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt ratione numquam perferendis dignissimos.
                  🙂
                </p>

                <h2 className="flex items-center text-xs font-semibold gap-x-1">
                  <div className="w-2 h-[2px] bg-dark"></div>Nil
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col p-6 mt-5 gap-y-3 bg-primary rounded-3xl">
                <img
                  className="object-cover mb-3 rounded-full w-11 h-11"
                  src="https://i.ibb.co/DtVgC7q/pexels-moose-photos-1036627.jpghttps://ibb.co/c1gXFNm"
                  alt="review-person-2"
                />

                <p className="text-sm desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt ratione numquam perferendis dignissimos.
                  🤗
                </p>

                <h2 className="flex items-center text-xs font-semibold gap-x-1">
                  <div className="w-2 h-[2px] bg-dark"></div>jisan
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col p-6 mt-5 gap-y-3 bg-primary rounded-3xl">
                <img
                  className="object-cover mb-3 rounded-full w-11 h-11"
                  src="https://i.ibb.co/58H9cKx/pexels-justin-shaifer-1222271.jpg"
                  alt="review-person-3"
                />

                <p className="text-sm desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt ratione numquam perferendis dignissimos.
                  😕
                </p>

                <h2 className="flex items-center text-xs font-semibold gap-x-1">
                  <div className="w-2 h-[2px] bg-dark"></div>john
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col p-6 mt-5 gap-y-3 bg-primary rounded-3xl">
                <img
                  className="object-cover mb-3 rounded-full w-11 h-11"
                  src="https://i.ibb.co/7nZg4Cb/pexels-italo-melo-2379005.jpg"
                  alt="review-person-4"
                />

                <p className="text-sm desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt ratione numquam perferendis dignissimos.
                  🙃
                </p>

                <h2 className="flex items-center text-xs font-semibold gap-x-1">
                  <div className="w-2 h-[2px] bg-dark"></div>lilo
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col p-6 mt-5 gap-y-3 bg-primary rounded-3xl">
                <img
                  className="object-cover mb-3 rounded-full w-11 h-11"
                  src="https://i.ibb.co/74Vhpmj/pexels-fernanda-latronico-709188.jpg"
                  alt="review-person-5"
                />

                <p className="text-sm desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem incidunt ratione numquam perferendis dignissimos.
                  😀
                </p>

                <h2 className="flex items-center text-xs font-semibold gap-x-1">
                  <div className="w-2 h-[2px] bg-dark"></div>yee
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
