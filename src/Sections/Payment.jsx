import React from "react";
import { PiCheckCircle } from "react-icons/pi";
export default function Payment() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 lg:grid-cols-3 ">
          {/* available */}
          <div className="flex flex-col gap-y-4 ">
            <PiCheckCircle size={50} className="m-auto text-purple" />

            <h2 className="text-3xl font-semibold">Available Everywhere</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              vitae unde optio.
            </p>
          </div>
          {/* credit */}
          <div className="flex flex-col gap-y-4 ">
            <PiCheckCircle size={50} className="m-auto text-purple" />

            <h2 className="text-3xl font-semibold">Credit & Payment</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              vitae unde optio.
            </p>
          </div>{" "}
          {/* card */}
          <div className="flex flex-col gap-y-4 ">
            <PiCheckCircle size={50} className="m-auto text-purple" />

            <h2 className="text-3xl font-semibold">Secured Credit Card</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              vitae unde optio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
