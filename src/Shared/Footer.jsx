import { BsApple, BsGooglePlay } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container flex flex-col items-center text-center capitalize gap-y-10 justify-items-center">
        {/* title */}
        <div className="">
          <h2 className="text-4xl font-semibold text-purple">
            OnBank<span className="">.</span>
          </h2>
        </div>

        {/* link */}
        <div className="flex flex-col items-center gap-10 font-medium text-dark lg:flex-row">
          <a href="/">privacy policy</a>
          <a href="/">terms & conditions</a>
          <a href="/">compliance</a>
          <a href="/">card agreements</a>
        </div>

        {/* app */}
        <div className="flex gap-x-5">
          <button className="flex items-center p-4 font-semibold border rounded-full hover:bg-gradient-to-r from-violet-400 to-indigo-500 hover:text-white gap-x-2">
            <span>
              <BsApple />
            </span>{" "}
            app store
          </button>

          <button className="flex items-center p-4 font-semibold border rounded-full hover:bg-gradient-to-r from-violet-400 to-indigo-500 hover:text-white gap-x-2">
            <span>
              <BsGooglePlay />
            </span>{" "}
            google play
          </button>
        </div>

        {/* copyright */}
        <div className="">
          <p className="desc">© 2023 Mehedi Hasan Siam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
