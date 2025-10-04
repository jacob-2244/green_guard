"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import ServiceCard2 from "@/components/ServiceCard2";
const Header2 = dynamic(() => import("@/components/Header2"), { ssr: false });

const ServiceCards = [
  {
    image: "/images/services-thumb.png",
    icon: "/images/service2-icon.png",
    title: "Ocean Clean",
  },

  {
    image: "/images/services-thumb2.png",
    icon: "/images/service2-icon2.png",
    title: "Dust Recycling",
  },

  {
    image: "/images/services-thumb3.png",
    icon: "/images/service2-icon4.png",
    title: "Carbon Emissions",
  },

  {
    image: "/images/services-thumb4.png",
    icon: "/images/service2-icon3.png",
    title: "Tree Plantation",
  },

  {
    image: "/images/services-thumb5.png",
    icon: "/images/service2-icon5.png",
    title: "Sustainble Energy",
  },
  {
    image: "/images/services-thumb6.png",
    icon: "/images/service2-icon6.png",
    title: "Planatary Warming",
  },
];

export default function Service() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="flex flex-col relative  w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/about-bg.jpg')` }}
      >
        <Header2 />
        <div className="w-full flex flex-col gap-3 text-center justify-center text-white pt-28 pb-40">
          <h1 className="flex w-full text-center justify-center  text-3xl md:text-5xl font-bold ">
            Our Services
          </h1>
          <div className="flex gap-3 w-full justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 536 536"
              className="text-app_primary my-auto"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"></path>
              <path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"></path>
            </svg>
            <p>Echofy</p>

            <svg
              className="my-auto"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
            </svg>

            <p className="text-gray-300">Our Services</p>
          </div>
        </div>
      </section>

      <section className=" w-full bg-[#F3F3F7] ">
        <div className="mx-auto flex flex-col justify-center  gap-14  px-4 py-28 w-full max-w-screen-xl">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 w-full justify-center ">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary ">OUR SERVICES</p>
            </div>

            <div className=" flex w-full md:text-center justify-center ">
              <h2 className="   px-4 max-w-screen-md mx-auto w-full font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 ">
                Echofy Provide Environment Best Leading Services{" "}
              </h2>
            </div> 
          </div>

          <div className="grid grid-cols-l sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ServiceCards.map((Card, index) => (
              <ServiceCard2
                key={index}
                image={Card.image}
                icon={Card.icon}
                title={Card.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop show={showScrollTop} />
    </>
  );
}
