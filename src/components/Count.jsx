import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import AOS from "aos";
import "aos/dist/aos.css";

const Count = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animatsiya davomiyligi (ms)
    });
  }, []);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div
      className="bg-gradient-to-br from-[#1F2022] via-[#362E30] to-[#7B5B5B]"
      data-aos="fade-down"
      id="/services"
    >
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="w-[300px] sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1200px]  mx-auto py-[100px] ">
          <h1 className="text-[40px] text-white text-center">
            Hozirgacha kurslarimizni tugatganlar haqida
          </h1>
          <p className="mt-3 text-[14px] text-white w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] text-center mx-auto">
            Hozirgacha bizda 1 000 000 dan oshiq o'quvchilar bitirgan va 1 000
            000 o'quvchilardan 70% i ishli bo'lib o'z oilasini boqmoqda bularni
            barchasiga bizni kursimiz sababi deya olaman va boshqa natijalarni
            siz pastdagi malumotlardan ko'rishingiz mumkin.
          </p>
          <div className="rounded-lg mt-7 items-center bg-[#DFA2A2] w-full h-auto ">
            <div className="flex md:w-[600px] lg:w-[800px] xl:w-[1000px]  flex-wrap mx-auto py-[30px] text-center justify-between">
              <div className="w-[250px] mx-auto">
                <h1 className="text-[23px] mb-2">Kurs bitirganlar soni</h1>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={1000000}
                    className="text-[17px] font-bold"
                    duration={5}
                    delay={0}
                  />
                )}
              </div>
              <div className="w-[250px] mx-auto">
                <h1 className="text-[23px] mb-2">Ishli bo'lganlar soni</h1>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={70832}
                    className="text-[17px] font-bold"
                    duration={4}
                    delay={0}
                  />
                )}
              </div>
              <div className="w-[250px] mx-auto">
                <h1 className="text-[23px] mb-2">
                  Kursimizga yozilganlar soni
                </h1>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={7000}
                    className="text-[17px] font-bold"
                    duration={3}
                    delay={0}
                  />
                )}
              </div>
              <div className="w-[250px] mx-auto">
                <h1 className="text-[23px] mb-2">Filiallarimiz</h1>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={10}
                    className="text-[17px] font-bold"
                    duration={2}
                    delay={0}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Count;
