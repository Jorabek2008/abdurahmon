import React, { useEffect } from "react";
import { Link } from "react-scroll";
import cryptoLogo from "/media.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#161A1D] via-[#182A34] to-[#161A1D]" data-aos="fade-down-right">
      <div className="w-[400px] sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1200px]  mx-auto flex gap-[50px] flex-wrap py-[60px] justify-between">
        <div className="w-[400px]">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={cryptoLogo} className="w-[40px] h-[40px]" alt="logo" />
            <h1 className="uppercase text-white text-[20px]">Firdavs</h1>
          </Link>
          <p className="text-white text-[17px] mt-[30px]">
            "Media" deganda, ko'pchilik "mass media" yani massaniy axborot
            vositalarini anglatadi.Media bu siyosiy va ijtimoiy qarorlarni o'z
            ichiga oladi. Bu vositalar orqali odamlar dunyodagi yangiliklar va
            hozirgi hodisa haqida bilim oladi.
          </p>
        </div>
        <div className="text-white">
          <h1 className="text-[20px]">Quick Link</h1>
          <p className="mt-[35px] cursor-pointer">About Us</p>
          <p className="mt-[10px] cursor-pointer">What is media</p>
          <p className="mt-[10px] cursor-pointer">Product gallery</p>
          <p className="mt-[10px] cursor-pointer">Audits</p>
        </div>
        <div className="text-white">
          <h1 className="text-[20px]">Information</h1>
          <p className="mt-[35px] cursor-pointer">About Us</p>
          <p className="mt-[10px] cursor-pointer">Contract</p>
          <p className="mt-[10px] cursor-pointer">Polygon</p>
          <p className="mt-[10px] cursor-pointer">Target</p>
        </div>
        <div className="text-white">
          <h1 className="text-[20px]">Quick Link</h1>
          <p className="mt-[35px] cursor-pointer">Twitter</p>
          <p className="mt-[10px] cursor-pointer">Instagram</p>
          <p className="mt-[10px] cursor-pointer">Youtube</p>
          <p className="mt-[10px] cursor-pointer">Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
