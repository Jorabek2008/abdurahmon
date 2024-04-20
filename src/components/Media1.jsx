import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import medi1 from "/media1.jpg"
import market from "/media1.jpg"
import info from "/media1.jpg"

const Media1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  return (
    <div className="w-[300px] sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1200px]  mx-auto" data-aos="fade-right">
      <h1 className="text-[40px] text-white text-center mt-[100px]">
        Media etika nimalardan iborat?
      </h1>
      <p className="mt-3 text-[14px] text-white w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] text-center mx-auto">
        Media, jamiyatdagi odamlar, siyosiy partiyalar va tashkilotlar orasida
        o'zaro aloqalarni yaratishda va siyosiy qarorlar qabul qilishda ta'sir
        ko'rsatishi mumkin
      </p>
      <div className="flex flex-wrap gap-10 justify-between mt-[50px] pb-[100px] text-center">
        <div className="w-[400px] md:w-[200px] lg:w-[330px] mx-auto">
          <div className="w-[400px] md:w-[200px] lg:w-[330px] h-[240px] mx-auto mb-[20px]">
            <img
              src={medi1}
              className="object-cover rounded-xl w-[300px] h-[240px] mx-auto"
              alt=""
            />
          </div>
          <h3 className="text-[25px] text-white">Media</h3>
          <p className="text-[14px] text-white">
            "Media" deganda, ko'pchilik "mass media" yani massaniy axborot
            vositalarini anglatadi. Bu, televideniya va boshqa axborot vositalari orqali jamiyatga
            taqdim etilgan axborotlarni anglatadi.
          </p>
        </div>
        <div className="w-[400px] md:w-[200px] lg:w-[330px] mx-auto">
          <div className="w-[400px] md:w-[200px] lg:w-[330px] h-[240px] mx-auto mb-[20px]">
            <img
              src={market}
              className="object-cover rounded-xl w-[300px] h-[240px] mx-auto"
              alt=""
            />
          </div>
          <h3 className="text-[25px] text-white">Marketolog</h3>
          <p className="text-[14px] text-white">
            "Targetolog" yoki "targetologiya" — bu markaziy aksiyadorlik
            jamiyatidagi sifatli miqdoriylikda yordam beradigan yoki jamiyatni
            maqsadga mos keladigan turdagi ilmiy-analitik amaliyotlardir.
          </p>
        </div>
        <div className="w-[400px] md:w-[200px] lg:w-[330px] mx-auto">
          <div className="w-[400px] md:w-[200px] lg:w-[330px] h-[240px] mx-auto mb-[20px]">
            <img
              src={info}
              className="object-cover rounded-xl w-[300px] h-[240px] mx-auto"
              alt=""
            />
          </div>
          <h3 className="text-[25px] text-white">Infoprodyusserlik</h3>
          <p className="text-[14px] text-white">
            "Infoprodyusser" yoki "informatsion-tayyorlovchi" — bu so'z, asosan,
            tayyorgarlik va tarqatish sohasidagi ishga bag'ishlangan insonni
            anglatadi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Media1;
