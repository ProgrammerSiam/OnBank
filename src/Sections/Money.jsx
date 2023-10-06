import { MdVideoLibrary } from "react-icons/md";
export default function Money() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="container flex flex-col items-center justify-around gap-10 lg:flex-row">
        {/* content */}
        <div className="flex flex-col items-start  gap-y-5 md:w-full lg:max-w-[40%]">
          <span className="p-2 rounded-full bg-purple">
            <MdVideoLibrary size={22} className="text-white" />
          </span>
          <h2 className="sub_text">Build credit while you save money</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            itaque fugiat ex repudiandae aut, cupiditate obcaecati cum explicabo
            magnam ad.
          </p>

          <button className="btn">Learn More</button>
        </div>

        {/* images */}
        <div className="relative">
          <div className="rounded-[90px] bg-primary">
            <img
              src="https://i.ibb.co/60b3fzH/4d.png"
              alt="save-money-images"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
