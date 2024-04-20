import React, { useState } from "react";
import cryptoLogo from "../../public/media.png";
import { LINK } from "./../mock/link";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed z-30 top-0 left-0 w-full bg-[#151515]">
      <div className="mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1200px] flex items-center justify-between py-[18px]">
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
        <ul className="hidden md:flex items-center gap-[20px]">
          {LINK.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setActive(item.title)}
              className={` transition-all ${
                active == item.title ? "text-[#00C2FF]" : "text-white"
              } cursor-pointer`}
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <button className="bg-[#70022A] hidden md:block px-[20px] py-[10px] rounded-md hover:bg-white hover:text-[#70022A] transition-all ease-in text-white font-semibold">
          Get Started
        </button>
        <div className="md:hidden">
            <FaBars className="text-white text-[25px]" />
        </div>



        <div className={`fixed top-0 left-0 w-full bg-[#151515] h-screen`}>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
