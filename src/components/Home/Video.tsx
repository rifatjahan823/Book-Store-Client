import { Link } from "react-router-dom";
import bg from "../../assets/main-bg-2.png";
import { BsPlayFill } from "react-icons/bs";

export default function Video() {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat py-28 bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto w-11/12 lg:w-10/12 text-center text-white">
        <h3 className="text-2xl font-bold mb-6">
          Exceptionally Energetic About Writting
        </h3>
        <h1 className="text-6xl font-bold mb-20">
          Watching Something Inspirational
        </h1>
        <Link className=" flex mx-auto relative w-24 h-24 " to="/">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <BsPlayFill className="relative bg-[#f8f9fa] w-24 h-24  text-[#1882db] font-medium p-5  rounded-full   shadow-inner shadow-black" />
        </Link>
      </div>
    </div>
  );
}
