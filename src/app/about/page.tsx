"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });
const Header2 = dynamic(() => import("@/components/Header2"), { ssr: false });
import MemberCard from "@/components/MemberCard";
import DeveloperCarousel from "@/components/DeveloperCarousel";
const members = [
  {
    image: "/images/team-thumb.png",
    name: "Connie Diaz",
    position: "CEO & Founder",
  },

  {
    image: "/images/team-thumb2.png",
    name: "James E. Huey",
    position: "Co Founder",
  },

  {
    image: "/images/team-thumb3.png",
    name: "June D. Vargas",
    position: "Environmental",
  },
];


const developers = [
  {
    image: "/images/testi-profile.png",
    name: "Angelina Watson",
    position: "Web Developer",
  },
  {
    image: "/images/testi-profile2.png",
    name: "John D. Alexon",
    position: "UI/UX Designer",
  },
  {
    image: "/images/testi-profile.png",
    name: "Angelina Watson",
    position: "Web Developer",
  },

  {
    image: "/images/testi-profile.png",
    name: "Angelina Watson",
    position: "Web Developer",
  },
];
export default function About() {
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
          <h1 className="flex w-full text-center justify-center text-5xl font-bold ">
            About US
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

            <p className="text-gray-300">About Us</p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-cover bg-[#FBF7F1] "
        style={{
          backgroundImage: `url('/images/team-bg.jpg')`,
          backgroundColor: "#FBF7F1",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="mx-auto flex justify-between relative gap-28 px-40 py-28 w-full max-w-screen-2xl ">
          <div className="relative w-full">
            <Image src="/images/about-1.png" alt="" height={300} width={500} />
            <div className="absolute -right-10 bottom-0  ">
              <Image
                src="/images/about-2.png"
                alt=""
                height={100}
                width={350}
              />
            </div>

            <div className="absolute top-20 right-[60px] lg:right-[30px] xl:-right-[30px] 2xl:-right-[10px] hidden sm:block">
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-dashed border-app_primary opacity-50 animate-spin"></div>

                <button className="relative h-[88px] w-[88px] rounded-full border-4 border-white text-2xl text-white bg-app_primary flex justify-center items-center  ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Play_1">
                      <path d="M6.562,21.94a2.5,2.5,0,0,1-2.5-2.5V4.56A2.5,2.5,0,0,1,7.978,2.5L18.855,9.939a2.5,2.5,0,0,1,0,4.12L7.977,21.5A2.5,2.5,0,0,1,6.562,21.94Zm0-18.884a1.494,1.494,0,0,0-.7.177,1.477,1.477,0,0,0-.8,1.327V19.439a1.5,1.5,0,0,0,2.35,1.235l10.877-7.44a1.5,1.5,0,0,0,0-2.471L7.413,3.326A1.491,1.491,0,0,0,6.564,3.056Z"></path>
                    </g>
                  </svg>

                  <div className="absolute inset-0 bg-black/30 rounded-full animate-ping"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 py-10 w-full  ">
            <div className="flex gap-2">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">ABOUT ECHOFY</p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 ">
                Protecting Environment For Green Future
              </h2>
              <p className="text-gray-400 ">
                {" "}
                Assertively reinvent front-end deliverables via to sustainable
                products. Credibly an expanded array of vortals for open-source
                internal or organic sources main negotiate professional supply
                chains via inexpensive
              </p>
            </div>
            <hr />

            <div className="flex justify-between w-full">
              <div className="flex gap-4 w-full ">
                <div className="my-auto w-50 h-50 p-4 bg-[#EBF5DA]">
                  <Image
                    src="/images/about2-icon.png"
                    alt=""
                    width={40}
                    height={10}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-xl">Economic Benifits</h3>
                  <p>Alternative innovation the environmental</p>
                </div>
              </div>
              <div className="flex gap-4 w-full ">
                <div className="my-auto w-50 h-50 p-4 bg-[#EBF5DA]">
                  <Image
                    src="/images/about2-icon2.png"
                    alt=""
                    width={40}
                    height={10}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-xl">Safe Environment</h3>
                  <p>Alternative innovation the environmental</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="flex gap-10 w-fit mt-3">
              <Link
                href="#"
                className="shrink-0 relative z-0 w-fit overflow-hidden rounded-full bg-app_primary px-10 py-4 text-white transition-colors duration-500 group"
              >
                <span className="absolute inset-0 z-0 h-full w-full  origin-left scale-x-0 rounded-full border-[1px] border-app_primary bg-black transition-transform duration-500 group-hover:scale-x-100"></span>

                <span className="relative z-10 flex items-center gap-2">
                  <span>More About</span>
                  <Image
                    src="/images/button-shape-1.png"
                    alt=""
                    width={13}
                    height={5}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className=" absolute right-20 top-40  z-20 animate-zoom-pulse">
          <Image
            src="/images/testi-shape-3.png"
            alt=""
            height={40}
            width={40}
          />
        </div>
      </section>

      <section
        className="w-full "
        style={{
          backgroundImage: `url('/images/counter-bg.png')`,
        }}
      >
        <div className="flex justify-evenly py-28 max-w-screen-2xl   text-center mx-auto">
          <div className="flex flex-col gap-4 text-white">
            <Image
              src="/images/counter-icon.png"
              alt=""
              width={120}
              height={100}
            />

            <h1 className="text-5xl font-bold ">100+</h1>
            <p className="text-xl font-medium"> Team Member</p>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <Image
              src="/images/counter-icon2.png"
              alt=""
              width={120}
              height={100}
            />

            <h1 className="text-5xl font-bold  ">960+</h1>
            <p className="text-xl font-medium"> Complete Works</p>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <Image
              src="/images/counter-icon3.png"
              alt=""
              width={120}
              height={100}
            />

            <h1 className="text-5xl font-bold  ">38</h1>
            <p className="text-xl font-medium"> Award Winning</p>
          </div>

          <div className="flex flex-col gap-4 text-white">
            <Image
              src="/images/counter-icon4.png"
              alt=""
              width={120}
              height={100}
            />

            <h1 className="text-5xl font-bold ">4.7</h1>
            <p className="text-xl font-medium"> Avg. Ratings</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col  gap-8  items-center pb-56 w-full max-w-screen-2xl  mx-auto pt-28 ">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 text-center w-full justify-center">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">WORKING PROCESS</p>
            </div>

            <div className="flex w-full text-center">
              <h2 className="w-full font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 ">
                Process To Safe Environment
              </h2>
            </div>
          </div>

          <div className=" flex justify-center text-center w-full px-40 pt-10   ">
            <div className="w-full flex flex-col gap-12   ">
              <div className="relative w-full  flex justify-center items-center  ">
                <div className=" w-48 flex items-center justify-center mx-auto h-48 absolute inset-x-0  rounded-full border-4 border-dotted border-app_primary animate-spin-slow z-0 "></div>

                <div className="relative w-48   h-48 -translate-y-3 -translate-x-1 ml-2 ">
                  <Image
                    src="/images/process-icon.png"
                    alt="Process Icon"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full text-center   ">
                <h2 className="text-2xl font-semibold ">Collection Dust</h2>
                <p className=" text-gray-600  ">
                  Proactively drive maintainable value next mission-critical
                  infrastructures eggplant new environmental nature
                </p>
              </div>
            </div>
            <div className="h-[200px] w-full  text-center justify-center flex ">
              <div className="shrink-0 relative w-40 h-[30px] items-center my-auto">
                <Image
                  src="/images/process-arrow.png"
                  alt=""
                  fill
                  className="relative"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-12 items-center ">
              <div className="relative w-full  flex justify-center items-center  ">
                <div className=" w-48 flex items-center justify-center mx-auto h-48 absolute inset-x-0  rounded-full border-4 border-dotted border-app_primary animate-spin-slow z-0 "></div>

                <div className="relative w-48   h-48 -translate-y-3 -translate-x-1 ml-2 ">
                  <Image
                    src="/images/process-icon2.png"
                    alt="Process Icon"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full text-center">
                <h2 className="text-2xl font-semibold">Dust Recycling</h2>
                <p className="text-md text-gray-600  ">
                  Proactively drive maintainable value next mission-critical
                  infrastructures eggplant new environmental nature
                </p>
              </div>
            </div>
            <div className="h-[200px] w-full  text-center justify-center flex ">
              <div className="shrink-0 relative w-40 h-[30px] items-center my-auto">
                <Image
                  src="/images/process-arrow2.png"
                  alt=""
                  fill
                  className="relative"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-12 items-center ">
              <div className="relative w-full   flex justify-center items-center  ">
                <div className=" w-48 flex items-center justify-center mx-auto h-48 absolute inset-x-0  rounded-full border-4 border-dotted border-app_primary animate-spin-slow z-0 "></div>

                <div className="relative w-48   h-48 -translate-y-3 -translate-x-1 ml-2 ">
                  <Image
                    src="/images/process-icon3.png"
                    alt="Process Icon"
                    fill
                    className="object-contain relative z-10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full text-center ">
                <h2 className="text-2xl font-semibold">Cleaning Environment</h2>
                <p className="text-md text-gray-600  ">
                  Proactively drive maintainable value next mission-critical
                  infrastructures eggplant new environmental nature
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BRAND SECTION ================= */}
      <section className=" rounded-lg w-full flex  h-fit flex-col items-center justify-center mx-auto relative z-40 -mt-[150px]">
        <div
          className="relative w-full py-20 rounded-lg max-w-screen-xl"
          style={{
            backgroundImage: `url('/images/brand-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute -right-14 -top-14 overflow-hidden -z-40 w-24 h-24 animate-to-and-fro-down">
            <Image src="/images/brand-shape.png" alt="" fill />
          </div>
          <div className="w-full flex items-center gap-4 text-center mb-10 justify-center">
            <hr className="w-20 border-white" />
            <p className="text-3xl text-white font-semibold">
              All over the world 100,000+ Customers
            </p>
            <hr className="w-20 border-white" />
          </div>

          <div className="flex justify-evenly items-center w-full  gap-8">
            <div className="relative w-48 h-16">
              <Image
                src="/images/brand-1.png"
                alt="brand 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16">
              <Image
                src="/images/brand-2.png"
                alt="brand 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16">
              <Image
                src="/images/brand-3.png"
                alt="brand 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16">
              <Image
                src="/images/brand-4.png"
                alt="brand 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16">
              <Image
                src="/images/brand-5.png"
                alt="brand 5"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex w-full mx-auto  relative z-20 h-fit  pt-48 pb-12 -mt-[150px]   "
        style={{
          backgroundImage: `url("/images/team-bg.jpg ")`,
        }}
      >
        <div className=" py-20 w-full max-w-screen-2xl px-40 mx-auto  ">
          {/* section heading */}
          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-2 text-center w-full justify-center">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">OUR TEAM</p>
            </div>

            <div className="flex w-full text-center">
              <h2 className="mx-auto w-[700px] font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0">
                Meet Our Dedicated Members
              </h2>
            </div>

            <div className="flex justify-evenly gap-10 w-full max-w-screen-2xl py-8 ">
              {members.map((members, index) => (
                <MemberCard
                  key={index}
                  image={members.image}
                  name={members.name}
                  position={members.position}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee section */}
      <section className="bg-app_primary flex h-[300px] w-full overflow-hidden">
        <Marquee autoFill={true}>
          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            RECYCLING
          </h1>

          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            *
          </h1>
          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            RENEWABLE
          </h1>

          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            *
          </h1>
          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            ENVIRONMENT
          </h1>

          <h1 className="text-8xl  text-stroke text-stroke-white text-stroke-fill-app_primary mr-12 font-bold">
            *
          </h1>
        </Marquee>
      </section>

         {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="flex w-full relative pb-28 bg-[#F5F8ED] z-10">
        {/* left shape */}
        <div className="w-12 h-12 absolute left-40 top-44 animate-zoom-pulse">
          <Image src="/images/testi-shape-3.png" alt="" fill />
        </div>

        <div
          className="flex flex-col w-full max-w-screen-2xl mx-auto px-40 "
          style={{
            backgroundImage: `url('/images/map.png')`,
          }}
        >
          {/* floating small shapes */}
          <div className="flex justify-between w-full relative h-[100px] ">
            <div className="w-10 h-10 absolute left-0  top-20 animate-zoom-pulse-small">
              <Image src="/images/testi-shape-4.png" alt="" fill />
            </div>
            <div className="w-10 h-10 absolute right-0 top-20 animate-zoom-pulse-small">
              <Image src="/images/testi-shape-2.png" alt="" fill />
            </div>
          </div>

          {/* section heading */}
          <div className="w-full flex flex-col gap-3 mt-4  ">
            <div className="flex gap-2 text-center w-full justify-center">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">TESTIMONIALS</p>
            </div>

            <div className="flex w-full text-center">
              <h2 className="mx-auto w-[700px] font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0">
                Clients Best Feedback About Echofy Provission
              </h2>
            </div>
          </div>

          {/* carousel */}
          <div className="w-full">
            <DeveloperCarousel developers={developers} />
          </div>
        </div>

        {/* right shape */}
        <div className="w-12 h-12 absolute right-40 top-44 animate-zoom-pulse">
          <Image src="/images/testi-shape-1.png" alt="" fill />
        </div>
      </section>



      <Footer />
      <ScrollToTop show={showScrollTop} />
    </>
  );
}
