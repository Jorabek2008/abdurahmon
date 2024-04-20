import React, { useEffect } from "react";
import { FaTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Bitiruv = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  return (
    <div>
      <div className="md:w-[700px] lg:w-[900px] xl:w-[1200px]  mx-auto py-[100px]" data-aos="fade-up-right">
        <h1 className="text-[40px] text-white text-center">
          Kursimizni tugatganlarni izohlari
        </h1>
        <p className="mt-3 text-[14px] text-white w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] text-center mx-auto">
          Hozirgacha bizda 1 000 000 dan oshiq o'quvchilar bitirgan va 1 000 000
          o'quvchilardan 70% i ishli bo'lib o'z oilasini boqmoqda bularni
          barchasiga bizni kursimiz sababi deya olaman va boshqa natijalarni siz
          pastdagi malumotlardan ko'rishingiz mumkin.
        </p>
        <div className="flex items-center justify-center flex-wrap mt-6 gap-[100px]">
          <div className="w-[330px] text-white p-[20px] bg-[#222531] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src="/img1.png" className="w-[50px]" alt="logo" />
                <div>
                  <h2 className="text-[20px]">Abdulla Sobirov</h2>
                  <p className="text-[16px]">@abdu1laSobirov</p>
                </div>
              </div>
              <FaTwitter className="text-[24px] mt-2 text-yellow-400" />
            </div>
            <p className="mt-4">
              Kurs daxshat bu kurs orqali men o'z oilamni boqyapman kursni
              tugatganimga atigi 1yil boldi.
            </p>
            <div className="flex mt-4 justify-between items-center">
              <h1>12:20 AM</h1>
              <h1>April 21.2023</h1>
            </div>
          </div>
          <div className="w-[330px] text-white p-[20px] bg-[#222531] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src="/img2.png" className="w-[50px]" alt="logo" />
                <div>
                  <h2 className="text-[20px]">Humoyun Abdullayev</h2>
                  <p className="text-[16px]">@humoyun12</p>
                </div>
              </div>
              <FaTwitter className="text-[24px] mt-2 text-yellow-400" />
            </div>
            <p className="mt-4">
              Kurs daxshat bu kurs orqali men o'z oilamni boqyapman kursni
              tugatganimga atigi 1yil boldi.
            </p>
            <div className="flex mt-4 justify-between items-center">
              <h1>10:30 AM</h1>
              <h1>April 19.2024</h1>
            </div>
          </div>
          <div className="w-[330px] text-white p-[20px] bg-[#222531] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src="/img3.png" className="w-[50px]" alt="logo" />
                <div>
                  <h2 className="text-[20px]">Feruza Almatova</h2>
                  <p className="text-[16px]">@feruxchik2024</p>
                </div>
              </div>
              <FaTwitter className="text-[24px] mt-2 text-yellow-400" />
            </div>
            <p className="mt-4">
              Kurs daxshat bu kurs orqali men o'z oilamni boqyapman kursni
              tugatganimga atigi 1yil boldi.
            </p>
            <div className="flex mt-4 justify-between items-center">
              <h1>02:00 AM</h1>
              <h1>December 21.2023</h1>
            </div>
          </div>
          <div className="w-[330px] text-white p-[20px] bg-[#222531] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src="/img4.png" className="w-[50px]" alt="logo" />
                <div>
                  <h2 className="text-[20px]">Jasurbek Mamadaliyev</h2>
                  <p className="text-[16px]">@jaska23</p>
                </div>
              </div>
              <FaTwitter className="text-[24px] mt-2 text-yellow-400" />
            </div>
            <p className="mt-4">
              Kurs daxshat bu kurs orqali men o'z oilamni boqyapman kursni
              tugatganimga atigi 1yil boldi.
            </p>
            <div className="flex mt-4 justify-between items-center">
              <h1>14:07 AM</h1>
              <h1>June 21.2020</h1>
            </div>
          </div>
          <div className="w-[330px] text-white p-[20px] bg-[#222531] rounded-xl">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src="/img5.png" className="w-[50px]" alt="logo" />
                <div>
                  <h2 className="text-[20px]">Nataliy Etiketa</h2>
                  <p className="text-[16px]">@nataliy12345</p>
                </div>
              </div>
              <FaTwitter className="text-[24px] mt-2 text-yellow-400" />
            </div>
            <p className="mt-4">
              The course is terrible, I am supporting my family through this
              course It's only been 1 year since I graduated.
            </p>
            <div className="flex mt-4 justify-between items-center">
              <h1>19:50 AM</h1>
              <h1>November 21.2023</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitiruv;
