import { BsArrowRight, BsDashLg, BsFillCalendarFill } from "react-icons/bs";
import  blog1 from '../../assets/blog-1.png';
import  blog2 from '../../assets/blog-2.png';
import  blog3 from '../../assets/blog-3.png';
import { FaComment } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";




export default function Blog() {
  return (
    <div className="mx-auto w-11/12 lg:w-10/12 py-20">
      <div className="text-center">
        <h3 className="text-[#1882db] text-base font-bold tracking-[3px]"> <BsDashLg className="inline-block text-3xl text-[#1882db] " />LATEST NEWS <BsDashLg className="inline-block text-3xl text-[#1882db] " /></h3>
        <h2 className="text-[#212529] text-6xl font-bold py-4">Fresh insights from Author every week.</h2>
      </div>
      {/* ------Blog--------------- */}
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-12">
    {/* --------------blog-1---------------- */}
    <div>
        <img className="w-full" src={blog1} alt="" />
        <div className="bg-[#F0F0F0] p-4 rounded-lg">
            <div className="flex justify-between border-b-2 pb-2">
                <h6 className="text-[#757E85] font-bold"><BiSolidUser className="inline-block"/> Admin</h6>
                <h6 className="text-[#757E85] font-bold"><FaComment className="inline-block"/> 10 Comments</h6>
                <h6 className="text-[#757E85] font-bold"><BsFillCalendarFill className="inline-block"/> April 26, 2022</h6>
            </div>
            <h2 className="text-[#212529] text-2xl font-bold mt-3">best books of January: This week’s releases</h2>
            <p className="text-[17px] mt-3 mb-5">Lorem ipsum dolor sit amet consectetur conse adipiscing elit, eius Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <Link to='' className="hover:text-[#1882DB]">Read More <BsArrowRight className="inline-block"/></Link>
        </div>
    </div>
    {/* --------------blog-2---------------- */}
    <div>
    <img className="w-full" src={blog2} alt="" />
        <div className="bg-[#F0F0F0] p-4 rounded-lg">
            <div className="flex justify-between border-b-2 pb-2">
                <h6 className="text-[#757E85] font-bold"><BiSolidUser className="inline-block"/> Admin</h6>
                <h6 className="text-[#757E85] font-bold"><FaComment className="inline-block"/> 10 Comments</h6>
                <h6 className="text-[#757E85] font-bold"><BsFillCalendarFill className="inline-block"/> April 26, 2022</h6>
            </div>
            <h2 className="text-[#212529] text-2xl font-bold mt-3">best books of January: This week’s releases</h2>
            <p className="text-[17px] mt-3 mb-5">Lorem ipsum dolor sit amet consectetur conse adipiscing elit, eius Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <Link to='' className="hover:text-[#1882DB]">Read More <BsArrowRight className="inline-block"/></Link>
        </div>
    </div>
    {/* --------------blog-3---------------- */}
    <div>
    <img className="w-full" src={blog3} alt="" />
        <div className="bg-[#F0F0F0] p-4 rounded-lg">
            <div className="flex justify-between border-b-2 pb-2">
                <h6 className="text-[#757E85] font-bold"><BiSolidUser className="inline-block"/> Admin</h6>
                <h6 className="text-[#757E85] font-bold"><FaComment className="inline-block"/> 10 Comments</h6>
                <h6 className="text-[#757E85] font-bold"><BsFillCalendarFill className="inline-block"/> April 26, 2022</h6>
            </div>
            <h2 className="text-[#212529] text-2xl font-bold mt-3">best books of January: This week’s releases</h2>
            <p className="text-[17px] mt-3 mb-5">Lorem ipsum dolor sit amet consectetur conse adipiscing elit, eius Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            <Link to='' className="hover:text-[#1882DB]">Read More <BsArrowRight className="inline-block"/></Link>
        </div>
    </div>
      </div>
    </div>
  );
}
