import {
  BsArrowRight,
  BsDashLg,
  BsEnvelopeAtFill,
  BsFacebook,
  BsFillTelephoneFill,
  BsLinkedin,
  BsPinMapFill,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo-main-2.png";
import { Link } from "react-router-dom";
import visa from "../assets/visa.png";
import master from "../assets/mastercard.png";
import express from "../assets/american-express.png";
import discover from "../assets/discover.png";


export default function Footer() {
  return (
    <div className="bg-[#141B30] py-12">
      <div className="mx-auto w-11/12 lg:w-10/12 grid gap-8 grid-cols-1 lg:grid-cols-4  md:grid-cols-2">
        {/* ---------cols-1----------- */}
        <div>
          <img src={logo} alt="" />
          <p className="text-[#a3a9bf] pt-5">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
            eiusmod incididunt psum dolor amet
          </p>
          <div className="pt-8 flex justify-between md:pr-8">
            <Link to='/'><BsFacebook className=" bg-white text-[#4469B5] rounded-full text-4xl"/></Link>
            <Link to='/'><BsTwitter className="p-2 bg-[#0D6EFD] text-white rounded-full text-4xl"/></Link>
            <Link to='/'><BsLinkedin className=" bg-white text-[#1378B3] rounded-full text-4xl"/></Link>
            <Link to='/'><BsPinterest className=" bg-white text-[#D94E42] rounded-full text-4xl"/></Link>
          </div>
        </div>
        {/* ---------cols-2----------- */}
        <div>
          <h3 className="text-white mb-5 font-semibold text-2xl">
            Important Links
          </h3>
          <ul className="">
            <li className="mb-3">
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                Website Development
              </Link>
            </li>
            <li className="mb-3">
              {" "}
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                Web Applications
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                Mobile Applications
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                UI/UX Design
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                Data Marketing
              </Link>
            </li>
            <li className="">
              <Link to="/" className="text-[#a3a9bf] text-base hover:underline">
                <BsDashLg className="inline-block " />
                Our Project
              </Link>
            </li>
          </ul>
        </div>
        {/* ---------cols-3----------- */}
        <div>
          <h3 className="text-white mb-5 font-semibold text-2xl">Contact</h3>
          <p className="text-[#a3a9bf] mb-3">
            <BsPinMapFill className="inline-block text-[#1882D6]" /> Wave, via
            habro dereinio 2b 52100 Arezo, italy
          </p>
          <p className="text-[#a3a9bf] mb-3">
            <BsEnvelopeAtFill className="inline-block text-[#1882D6]" />{" "}
            rifatjahan833@gmail.com
          </p>
          <p className="text-[#a3a9bf]">
            <BsFillTelephoneFill className="inline-block text-[#1882D6]" /> +65
            8133 3116 (Toll Free)
          </p>
        </div>
        {/* ---------cols-4----------- */}
        <div>
          <h3 className="text-white mb-5 font-semibold text-2xl">
            Subscription
          </h3>
          <div className="relative">
            <input
              type="search"
              id="email"
              className="block w-full p-4 pl-4 text-sm text-gray-900  rounded-full bg-white focus:ring-0 focus:border-0 "
              placeholder="Your Email"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1 bg-[#0176FF] hover:bg-blue-800 focus:outline-none focus:ring-0 focus:border-0 font-medium rounded-full text-sm px-4 py-3 "
            >
              <BsArrowRight className="text-xl"/>
            </button>
          </div>
          <p className="text-[#a3a9bf] py-8">
            Sign up for our latest news & articel. We won’t give you spam mails.
          </p>
          <div className="flex pt-6 flex-wrap justify-between">
            <img className="sm:w-16 xl:w-16 lg:w-10 w-8" src={visa} alt="" />
            <img className="sm:w-16 xl:w-16 lg:w-10 w-8" src={master} alt="" />
            <img className="sm:w-16 xl:w-16 lg:w-10 w-8" src={express} alt="" />
            <img className="sm:w-16 xl:w-16 lg:w-10 w-8" src={discover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
