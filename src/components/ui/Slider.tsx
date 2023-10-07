// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import icon1 from "../../assets/icon-4.png";
import icon2 from "../../assets/icon-5.png";
import icon3 from "../../assets/icon-6.png";
import "./Slider.css";
import { BsArrowRight } from "react-icons/bs";

export default function Slider() {
  return (
    <div >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
        loop={true}
        autoplay={{ delay:3000 }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon1} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon2} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon3} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon1} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon2} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon3} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon1} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon2} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>
            {/* ------------------------ */}
            <div className="bg-white py-10 px-4 rounded-md">
              <img src={icon3} alt="" />
              <h3 className="py-4 text-2xl font-semibold">Grow Your Personality</h3>
              <p className="text-base pb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
                Lorem.
              </p>
              <Link className="text-base font-semibold" to="/">Learn More <BsArrowRight className="inline-block"/></Link>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
