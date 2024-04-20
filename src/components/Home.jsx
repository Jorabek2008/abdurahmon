import React, { useEffect, useRef } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  return (
    <div
      className="mt-[70px] md:w-[700px] lg:w-[900px] xl:w-[1200px] mx-auto pb-[100px]"
      id="/"
      data-aos="fade-down"
    >
      <div className="flex items-center flex-wrap lg:gap-[10px] xl:gap-[120px] pt-[30px] lg:pt-[100px]">
        <div className="xl:w-[500px] lg:w-[400px]">
          <h1 className="text-white text-[30px] text-center lg:text-left leading-[40px] lg:text-[35px] lg:leading-[45px] font-[500]">
            Media & Infoprodyusserlikni o'rganmoqchimisiz unda{" "}
            <span className="text-[#00C2FF]">Firdavs Urinovni</span> kurslariga
            marhamat
          </h1>
          <p className="text-white text-[14px] text-center lg:text-left">
            Bu kursda siz media, marketolog & prodyusserlik sohasini noldan
            o'rganasiz, 21-asrda nima uchun bu sohaga qiziqish yuqori va boshqa
            narsalarni o'rganish maqsadida bu kursni sotib olishingiz mukin
            vaqat chegaralangan chegirma tugashiga tezroq pastdagi havolalarga
            bosib biz bilan bog'laning
          </p>
          <div className="flex mt-[30px] justify-center lg:justify-start gap-3">
            <a
              href="https://www.youtube.com/@FirdavsUrinov"
              target="_blank"
              className="bg-[#70022A] px-[20px] py-[10px] rounded-md hover:bg-white cursor-pointer hover:text-[#70022A] transition-all ease-in text-white font-semibold"
            >
              Get Started
            </a>
            <a
              href="https://www.instagram.com/firdavs_urinov/"
              target="_blank"
              className="bg-transparent cursor-pointer flex items-center gap-3 px-[20px] py-[10px] rounded-md text-white font-semibold"
            >
              Explore
              <FaRegArrowAltCircleRight className="mt-[3px]" />
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b mt-5 mx-auto lg:m-0 via-gray-800 from-gray-700 p-[20px] to-gray-900">
          <h1 className="text-center mb-[40px] text-white text-[20px] font-semibold pt-4">
            Kurs savdosi tugaydi
          </h1>
          <FlipClockCountdown
            className=""
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          />
          <div className="text-center">
            <button className="mt-[30px] bg-[#6A4545] text-white font-semibold text-[16px] px-[20px] py-[10px] rounded-lg">
              Kursni sotib olish
            </button>
          </div>
          <div className="flex items-center gap-[50px] justify-center my-[30px]">
            <a href="https://www.instagram.com/firdavs_urinov/" target="_blank">
              <AiFillInstagram className="text-[30px] text-white cursor-pointer hover:text-[#00C2FF] transition-all" />
            </a>
            <a href="https://www.youtube.com/@FirdavsUrinov" target="_blank">
              <FaYoutube className="text-[25px] text-white cursor-pointer hover:text-[#00C2FF] transition-all" />
            </a>
            <a href="https://t.me/firdavs_urinov1" target="_blank">
              <FaTelegram className="text-[25px] text-white cursor-pointer hover:text-[#00C2FF] transition-all" />
            </a>
            <a href="https://www.facebook.com/fs.urinov/" target="_blank">
              <FaFacebook className="text-[25px] text-white cursor-pointer hover:text-[#00C2FF] transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
