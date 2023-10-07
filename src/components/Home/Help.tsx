import Slider from "../ui/Slider";
import {BsDashLg } from "react-icons/bs";

export default function Help() {
  return (
    <div className="hepl_section bg-[#003461] py-28">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 ">
        {/* ---------------title------------- */}
        <div className="text-white text-center pb-20">
            <h3 className="text-base tracking-[3px] font-semibold mb-6"><BsDashLg className="inline-block text-3xl"/> BENEFITS <BsDashLg className="inline-block text-3xl" /></h3>
            <h2 className="text-5xl font-bold">We Help You To Grow</h2>
        </div>
        {/* ------------slider----------- */}
        <Slider></Slider>
      </div>
    </div>
  );
}
