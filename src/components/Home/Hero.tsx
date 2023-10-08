import { Link } from "react-router-dom";
import book from "../../assets/book-image-main.png";
import { BsPlayFill } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="hero_section bg-[#003461]">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 mx-auto w-11/12 lg:w-10/12 items-center pb-7 pt-28">
        {/* ----------Content----------- */}
        <div>
          <p className="text-xl text-white pb-5">
            50% discount on early purchase
          </p>
          <h1 className="text-white text-6xl font-black leading-tight">
            Settle Your Daily life Issue in 1 Minute.
          </h1>
          <p className="text-white py-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, eius mod tempor
            incididunt labore mod tempor incididunt ut labore adipiscing.
          </p>
          <div className="pt-10 flex items-center ">
            <Link
              className="bg-[#f8f9fa] text-base text-[#1882db] tracking-wide font-medium py-3.5 px-7 rounded-full border border-white  hover:bg-transparent  hover:text-white mr-5 transition duration-700 "
              to="/"
            >
              More About Us
            </Link>
            <div className=" flex  items-center">
              <Link to="/">
                <BsPlayFill className="bg-[#f8f9fa] w-14 h-14  text-[#1882db] font-medium p-3.5 rounded-full border border-white  hover:bg-transparent  hover:text-white transition duration-700 " />
              </Link>
              <div className="text-white ml-3">
                <Link className="text-base font-medium leading-none" to="/">Watch Video</Link>
                <p className="leading-none"><Link className="text-xs underline  opacity-80" to="/">Duration 3:00 min</Link></p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------Book----------------- */}
        <div className="order-first md:order-last">
          <img className="w-full" src={book} alt="" />
        </div>
      </div>
    </div>
  );
}
