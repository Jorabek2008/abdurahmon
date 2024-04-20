import React, { useEffect } from "react";
import ab1 from "/ab1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Media = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  return (
    <div
      className="mt-[200px] bg-gradient-to-br from-[#7D5D5D] via-[#362F30] to-[#1E1F21]"
      id="/about"
        data-aos="fade-up"
    >
      <div className="flex flex-wrap items-center md:w-[700px] lg:w-[900px] xl:w-[1200px]  mx-auto gap-[60px] py-[100px]">
        <img src={ab1} className="lg:w-[390px] lg:h-[390px] xl:w-[430px] mx-auto xl:lg:m-0 h-[430px] rounded-xl" alt="logo" />
        <div className="xl:w-[500px] lg:w-[400px] mx-auto">
          <h1 className="text-white text-center lg:text-left text-[30px] font-semibold">
            <span className="text-[#00C2FF]">Media</span> nima?
          </h1>
          <p className="text-white text-center lg:text-left mt-[10px]">
            "Media" deganda, ko'pchilik "mass media" yani massaniy axborot
            vositalarini anglatadi.Media bu siyosiy va ijtimoiy qarorlarni o'z
            ichiga oladi. Bu vositalar orqali odamlar dunyodagi yangiliklar va
            hozirgi hodisa haqida bilim oladi.
          </p>
          <ul className="list-disc ml-[20px]">
            <li className="text-white mt-[20px]">
              <h1 className="text-[20px] font-semibold">
                Media nima uchun muhim?
              </h1>
              <p>
                Media, jamiyatda axborotni tarqatish, ta'lim berish, ilmiy va
                ijtimoiy muzokaralar yuritish, siyosiy va ijtimoiy qarorlarni
                o'z ichiga oladi.
              </p>
            </li>
            <li className="text-white mt-[20px]">
              <h1 className="text-[20px] font-semibold">
                Media xabarlarni qanday taqdim qiladi?
              </h1>
              <p>
                Media xabarlarni ko'rsatish, yozish, ko'ngillash va video
                shakllarida taqdim qiladi.
              </p>
            </li>
            <li className="text-white mt-[20px]">
              <h1 className="text-[20px] font-semibold">Fake news nima?</h1>
              <p>
                "Fake news" yoki "yolg'on xabarlari" — bu yolg'on ma'lumotlar
                yoki faqat qisqa joyda saqlanadigan, to'g'ri emas axborotlar.{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Media;
