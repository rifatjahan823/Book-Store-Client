import { BsCheckLg, BsDashLg, BsFileEarmarkPdfFill } from "react-icons/bs";
import image from "../../assets/image-1.png";

export default function ChoseUs() {
  return (
    <>
      <div className="about grid gap-10 grid-cols-1 md:grid-cols-2 ">
        {/* ---------Content----------- */}
        <div className="mx-auto w-11/12 lg:w-10/12 py-20">
          <h3 className="text-[#1882db] text-base font-bold tracking-[3px]">
        
            <BsDashLg className="inline-block text-3xl text-[#1882db] " />
            CHAPTERS
          </h3>
          <h2 className="text-[#212529] text-6xl font-bold py-4">
            Why Choice The Book
          </h2>
          <p className="py-6 text-[#212529] text-lg">
            Lorem ipsum dolor sit amet, con ge sectetur adipiiscing elit, eius
            Lorem ipsum dolor sit amet, coniscinsectetur adipiscing elit, eius
            mod tempor incididunt labore mod sit amet adipiscingconsectetur.
          </p>
          <div>
            <div className="flex justify-between">
             <div>
             <h3 className="text-[#1e263b] text-2xl font-medium pb-3">
                <BsCheckLg className="inline-block text-2xl text-[#1882db] " />
                Book Build
              </h3>
              <p className="pl-6 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
             </div>
              <div>
              <h3 className="text-[#1e263b] text-2xl font-medium pb-3">
                <BsCheckLg className="inline-block text-2xl text-[#1882db] " />
                Best for Read
              </h3>
              <p className="pl-6 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
            {/* ------------------------- */}
            <div className="flex justify-between pt-6">
             <div>
             <h3 className="text-[#1e263b] text-2xl font-medium pb-3">
                <BsCheckLg className="inline-block text-2xl text-[#1882db] " />
                Perfect Format
              </h3>
              <p className="pl-6 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
             </div>
              <div>
              <h3 className="text-[#1e263b] text-2xl font-medium pb-3">
                <BsCheckLg className="inline-block text-2xl text-[#1882db] " />
                Build In PDF
              </h3>
              <p className="pl-6 text-lg">Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </div>
          <p className="py-6 text-[#212529] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <button className="text-base font-medium rounded-full text-white py-3.5 px-6 bg-[#0176FF] tracking-[1px] hover:bg-[#0B5ED7] transition duration-700">
         <BsFileEarmarkPdfFill className="inline-block"/> Download PDF Version
          </button>
        </div>
        {/* ---------------image-section--------- */}
        <div className="">
          <img className="bg-cover bg-center h-full" src={image} alt="" />
        </div>
      </div>
    </>
  );
}
