import { BsDashLg } from "react-icons/bs";
import ProcessSlider from "../ui/ProcessSlider";


export default function Process(){
    return(
        <div className=" bg-[#F0F0F0] py-28 ">
       <div className="relative">
       <div className="mx-auto w-11/12 lg:w-10/12 ">
          {/* ---------------title------------- */}
          <div className=" text-center pb-20">
              <h3 className="text-base text-[#1882DB] tracking-[3px] font-semibold mb-6"><BsDashLg className="inline-block text-3xl"/> BOOK SUMMARY <BsDashLg className="inline-block text-3xl" /></h3>
              <h2 className="text-5xl font-bold">The Book Chapters</h2>
          </div>
          {/* ------------slider----------- */}
          <ProcessSlider/>
        </div>
       </div>
      </div>
    )
}