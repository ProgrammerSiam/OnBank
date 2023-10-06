import { BsFillCreditCardFill } from "react-icons/bs";

export default function Credit() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container flex flex-col items-center justify-around gap-10 lg:flex-row">
        <div className="relative">
          {/* images */}
          <div className="rounded-[90px] bg-primary">
            <img src="https://i.ibb.co/HHd004T/c1.png" alt="card-images" />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col items-start  gap-y-5 md:w-full lg:max-w-[40%] order-first lg:-order-none">
          <span className="p-2 rounded-full bg-purple">
            <BsFillCreditCardFill size={22} className="text-white" />
          </span>
          <h2 className="sub_text">Track & Pay With Self Visa'r Credit Card</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            itaque fugiat ex repudiandae aut, cupiditate obcaecati cum explicabo
            magnam ad.
          </p>

          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}
