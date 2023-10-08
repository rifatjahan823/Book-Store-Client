/* eslint-disable @typescript-eslint/no-unused-vars */
// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import './Slider.css'


export default function ProcessSlider() {
  return (
    <div>
      <Swiper className="process_slider "
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white items-center justify-center text-center py-12">
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 1</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 2</button>
              <h3 className="py-4 text-2xl font-bold">
              The Ascent Of Pattern Design
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 ">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 3</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white items-center justify-center text-center py-12">
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 1</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 2</button>
              <h3 className="py-4 text-2xl font-bold">
              The Ascent Of Pattern Design
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 ">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 3</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white items-center justify-center text-center py-12">
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 1</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 md:border-r-2 border-b-2 md:border-b-0">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 2</button>
              <h3 className="py-4 text-2xl font-bold">
              The Ascent Of Pattern Design
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
            {/* ------------------------ */}
            <div className="py-6 px-4 ">
              <button className="bg-[#F0F0F0] py-1 px-4 rounded-full font-bold hover:bg-[#1882DB] hover:text-white transition duration-700">Chapter 3</button>
              <h3 className="py-4 text-2xl font-bold">
              Information Science Process
              </h3>
              <p className="text-[17px] leading-7 pt-4 ">
              Elegantly composed book is worried about making typography and fundamental experts who routinelymaking
              </p>
            </div>
          </div>
        </SwiperSlide>
  
      </Swiper>
    </div>
  );
}
