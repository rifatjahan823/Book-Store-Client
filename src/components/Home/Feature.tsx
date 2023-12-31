import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";

export default function Feature() {
  return (
    <>
      {/* --------------Feature-section-------- */}
      <div className="feature_section bg-[#0067B8] p-3 flex justify-center items-center h-24">
        <h3 className="text-lg text-white font-semibold">
          <Link className="underline" to="/">
            insert your details and go
          </Link>
          *eBook includes iBooks, PDF &amp; ePub versions, Copy the title
          thatfits best,
        </h3>{" "}
        <BsArrowRight className="ml-2 text-white text-xl font-semibold" />
      </div>
      {/* --------------Feature-sectione-------- */}
      <div className="feature_section-2 bg-[#F3F3F3] py-20">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 mx-auto w-11/12 lg:w-10/12 items-center justify-center">
          {/* --------experience---------- */}
          <div>
            <img src={icon1} alt="" />
            <h3 className="py-3 text-3xl font-semibold">Experience</h3>
            <p className="text-base">Lorem ipsum dolor amet, consectetur adipiscing elit, eius Lorem dolorsit consectetur.</p>
          </div>
          {/* ------------goals---------- */}
          <div>
            <img src={icon2} alt="" />
            <h3 className="py-3 text-3xl font-semibold">Marketing Goals</h3>
            <p className="text-base">Lorem ipsum dolor amet, consectetur adipiscing elit, eius Lorem dolorsit consectetur.</p>
          </div>
          {/* -------------vission---------- */}
          <div>
            <img src={icon3} alt="" />
            <h3 className="py-3 text-3xl font-semibold">Targetting Vission</h3>
            <p className="text-base">Lorem ipsum dolor amet, consectetur adipiscing elit, eius Lorem dolorsit consectetu</p>
          </div>
        </div>
      </div>
    </>
  );
}
