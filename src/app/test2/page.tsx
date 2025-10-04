// import ServiceCard from '@/components/ServiceCard'
// import ProgressBar from '@/components/ProgressBar'
// import React from 'react'
// import ProcessCard from '@/components/ProcessCard'
// import DeveloperCard from '@/components/DeveloperCard'
// import {
//   CarouselComponent,
//   CarouselItemsDirective,
//   CarouselItemDirective,
// } from "@syncfusion/ej2-react-navigations";

// const page = () => {
//   return (
//     <div className='w-full max-w-screen-sm min-h-200'>

//       <ServiceCard

//         image='/images/service-thumb.png'
//         icon='/images/service-icon1.png'
//         title='Tree Plantation'

//       />

//       <ProgressBar percentage={90} />

//       <div className="flex gap-4 justify-end w-full">
//         {/* up arrow  */}
//         <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-white hover:text-app_primary hover:cursor-pointer">
//           <div className="relative h-6 w-6 rotate-90">
//             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//               <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//               <g id="SVGRepo_iconCarrier">
//                 <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="currentColor"></path>
//               </g>
//             </svg>
//           </div>
//         </div>

//       </div>

//       <ProcessCard
//       image='/images/project-img.png'
//       title='Climate'
//       heading='Cleaning Forest'
//       spinImage='/images/project-shape.png'

//       />

//       <DeveloperCard image='/images/testi-profile.png'

//       name='Angelina Watson'
//       position='Web Developer'

//       />

// <div className='control-container'>
//       <CarouselComponent>
//         <CarouselItemsDirective>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/cardinal.png" alt="cardinal" style="height:100%;width:100%;" /><figcaption class="img-caption">Cardinal</figcaption></figure>' interval={3000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/hunei.png" alt="kingfisher" style="height:100%;width:100%;" /><figcaption class="img-caption">Kingfisher</figcaption></figure>' interval={1000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/costa-rica.png" alt="keel-billed-toucan" style="height:100%;width:100%;" /><figcaption class="img-caption">Keel-billed-toucan</figcaption></figure>' interval={2000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/kaohsiung.png" alt="yellow-warbler" style="height:100%;width:100%;" /><figcaption class="img-caption">Yellow-warbler</figcaption></figure>' interval={5000}/>
//           <CarouselItemDirective template='<figure class="img-container"><img src="https://ej2.syncfusion.com/products/images/carousel/bee-eater.png" alt="bee-eater" style="height:100%;width:100%;" /><figcaption class="img-caption">Bee-eater</figcaption></figure>' interval={6000}/>
//         </CarouselItemsDirective>
//       </CarouselComponent>
//     </div>

//     </div>
//   )
// }

// export default page

"use client";

import ProgressBar from "@/components/ProgressBar";
import React from "react";
import ProcessCard from "@/components/ProcessCard";
import DeveloperCard from "@/components/DeveloperCard";
import DeveloperCarousel from "@/components/DeveloperCarousel";
import MemberCard from "@/components/MemberCard";
import WorkerTeam from "@/components/WorkerTeam";
import Footer from "@/components/Footer";
import ServiceCard2 from "@/components/ServiceCard2";
import AccordionUsage from "@/components/AccordionUsage";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Header2 from "@/components/Header2";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ScrollToTop from "@/components/ScrollToTop";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  // useCarousel,
} from "@/components/ui/carousel";
import { useRef } from "react";

const developers = [
  {
    image: "/images/testi-profile.png",
    name: "Angelina Watson",
    position: "Web Developer",
  },
  {
    image: "/images/testi-profile2.png", // Add more developer images
    name: "John Smith",
    position: "UI/UX Designer",
  },
  {
    image: "/images/testi-profile.png", // Add more developer images
    name: "John Smith",
    position: "UI/UX Designer",
  },

  {
    image: "/images/testi-profile.png", // Add more developer images
    name: "John Smith",
    position: "UI/UX Designer",
  },
];

const ServiceCards = [
  {
    image: "/images/service-thumb.png",
    icon: "/images/service-icon1.png",
    title: "Tree Plantation",
  },

  {
    image: "/images/service-thumb.png",
    icon: "/images/service-icon1.png",
    title: "Tree Plantation",
  },

  {
    image: "/images/service-thumb2.png",
    icon: "/images/service-icon2.png",
    title: "Cleaning Ocrean",
  },

  {
    image: "/images/service-thumb3.png",
    icon: "/images/service-icon3.png",
    title: "Dust Recycling",
  },
];

const ProcessCards = [
  {
    image: "/images/project-img.png",
    title: "Climate",
    heading: "Cleaning Forest",
    spinImage: "/images/project-shape.png",
  },

  {
    image: "/images/project-img2.png",
    title: "Environment",
    heading: "Tree Plantation",
    spinImage: "/images/project-shape.png",
  },

  {
    image: "/images/project-img3.png",
    title: "Recycling",
    heading: "Plastic Recycling",
    spinImage: "/images/project-shape.png",
  },

  {
    image: "/images/project-img.png",
    title: "Climate",
    heading: "Cleaning Forest",
    spinImage: "/images/project-shape.png",
  },
];

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

const WorkTeam = [
  {
    image: "/images/blog-thumb1.jpg",
    title: "Top 10 Recycling tips for Environment",
    supervisor: "John D. Alexon",
  },

  {
    image: "/images/blog-thumb2.jpg",
    title: "How Every Individual Can Make a Difference",
    supervisor: "Angelina Watson",
  },

  {
    image: "/images/blog-thumb3.jpg",
    title: "Innovations in Renewable Energy Technology",
    supervisor: "David Watson",
  },
];

// const SyncfusionCarousel = dynamic(() => import('@/components/SyncfusionCarousel'), {
//   ssr: false
// });

const page = () => {
  const emblaRef = useRef(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const [currentBackground, setCurrent] = useState("/images/banner-bg.jpg");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("background is changing");
  });

  const applyFirstBackground = () => {
    setCurrent("/images/banner-bg.jpg");
  };

  const applySecondBackground = () => {
    setCurrent("/images/banner-bg2.jpg");
  };

  return (
    <>
      {/* <div className='w-full max-w-screen-sm min-h-200'>
      <ServiceCard2
        image='/images/services-thumb.png'
        icon='/images/service2-icon.png'
        title='Tree Plantation'
      />

      <ProgressBar percentage={90} />

      <div className="flex gap-4 justify-end w-full">
        <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-white hover:text-app_primary hover:cursor-pointer">
          <div className="relative h-6 w-6 rotate-90">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <ProcessCard
        image='/images/project-img.png'
        title='Climate'
        heading='Cleaning Forest'
        spinImage='/images/project-shape.png'
      />

      <DeveloperCard 
        image='/images/testi-profile.png'
        name='Angelina Watson'
        position='Web Developer'
      />



        <DeveloperCarousel developers={developers} />

        <MemberCard
        image='/images/team-thumb.png'
        name='Connie Diaz'
        position='CEO & Founder'
        />


        <WorkerTeam
        image='/images/blog-thumb1.jpg'
        title='top 10'
        supervisor='John D. Alexon'
        />

      
    
    </div>




<AccordionUsage/>
  <Footer/> */}

      {/* Hero section */}

      <section
        className="flex flex-col relative h-fit 2xl:min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${currentBackground}')` }}
      >
        <Header2 />

        <div className="py-20 sm:py-28 xl:py-0 flex flex-col xl:flex-row justify-between items-center gap-10 w-full mx-auto my-auto px-4 sm:px-6 lg:px-80">
          <div className="flex flex-row w-full">
            <div
              className="hidden md:flex flex-col items-center gap-10 opacity-90 p-6"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <div className="flex flex-col gap-4 text-white">
                <div className="-rotate-90">
                  <Image
                    src="/svgs/socials/pinterest.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </div>
                <div className="-rotate-90">
                  <Image
                    src="/svgs/socials/twitter.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </div>
                <div className="-rotate-90">
                  <Image
                    src="/svgs/socials/linkedin.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <hr className="rotate-90 w-14 border-t border-white" />
              <div className="flex flex-col-reverse gap-2 text-white">
                <p className="font-bold [writing-mode:vertical-rl] rotate-180 tracking-wider">
                  FOLLOW
                </p>
                <p className="font-bold [writing-mode:vertical-rl] rotate-180 tracking-wider">
                  US
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full gap-7  md:text-left">
              <p
                className="text-app_primary text-sm sm:text-base"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                NATURAL ENVIRONMENT
              </p>

              <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <p
                  className="p-0 m-0"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Be Safe Controls
                </p>
                <p
                  className="p-0 m-0"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  Environment
                </p>
              </h1>

              <p
                className="text-white text-base sm:text-lg max-w-xl  md:mx-0"
                data-aos="fade-right"
                data-aos-delay="1100"
              >
                Professionally optimize interdependent intellectual
                interoperable connect best practices. Progressively fabricate
                done
              </p>

              <div
                className="flex items-center justify-center md:justify-start gap-4"
                data-aos="fade-right"
                data-aos-delay="1400"
              >
                <Link
                  href="#"
                  className="shrink-0 relative z-0 w-fit overflow-hidden rounded-full bg-app_primary px-8 sm:px-10 py-3 sm:py-4 text-white transition-colors duration-500 group"
                >
                  <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 rounded-full border-[1px] border-app_primary bg-black transition-transform duration-500 group-hover:scale-x-100"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <p>Let&apos;s talk</p>
                    <Image
                      src="/images/button-shape-1.png"
                      alt=""
                      width={13}
                      height={5}
                    />
                  </span>
                </Link>

                <div className="relative">
                  <div className="bg-[#345250] rounded-full cursor-pointer p-3 hover:bg-[#456260] transition-colors">
                    <div className="w-8 h-8 relative">
                      <Image src="/svgs/video.svg" alt="video button" fill />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#345250]/30 rounded-full animate-ping"></div>
                </div>

                <p className="text-white text-base sm:text-lg">Watch Video</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center my-auto ml-6">
              <input
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer border-2 border-white/50 rounded-full checked:border-white checked:border-4 hover:border-white/70 transition-all"
                onClick={applyFirstBackground}
              />
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer border-2 border-white/50 rounded-full checked:border-white checked:border-4 hover:border-white/70 transition-all"
                onClick={applySecondBackground}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}

      <section className="bg-app_primary flex py-6 w-full inset-x-0 -bottom-10 justify-center z-20 ">
        <Marquee autoFill={true}>
          <p className="text-2xl text-white font-bold mr-12">
            Animal-Protection
          </p>
          <Image
            src="/images/text-shape.png"
            alt=""
            width={30}
            height={1}
            className="mr-10"
          />
          <p className="text-2xl text-white font-bold mr-12">Ocean-Cleaning</p>
        </Marquee>
      </section>

      {/* Policy */}

      <section
        className="relative w-full bg-cover bg-[#FBF7F1]"
        style={{
          backgroundImage: `url('/images/team-bg.jpg')`,
          backgroundColor: "#FBF7F1",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="mx-auto flex flex-col lg:flex-row relative gap-5 lg:gap-6 px-4 sm:px-6 md:px-12 lg:px-40 py-14 sm:py-20 lg:py-28 w-full max-w-screen-2xl">
          <div className="relative w-full flex ">
            <Image
              src="/images/about.png"
              alt=""
              height={400}
              width={800}
              className="w-full max-w-md lg:max-w-lg"
            />
            <div className="absolute bottom-2 animate-[bounce_2s_infinite]">
              <Image
                src="/images/about-award.png"
                alt=""
                height={100}
                width={300}
                className="w-[200px] sm:w-[250px] lg:w-[300px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 py-6 sm:py-10 w-full">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">ABOUT POLICY</p>
            </div>

            <h2 className="font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[32px] sm:leading-[42px] md:text-[38px] md:leading-[48px] lg:text-[40px] lg:leading-[50px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0">
              Environmental Sustainable Forever Green Future
            </h2>

            <div className="flex gap-3 items-start">
              <Image
                src="/images/about-icon.png"
                alt=""
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">Economic Benefits</h3>
                <p>
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Image
                src="/images/about-icon2.png"
                alt=""
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl">Safe Environment</h3>
                <p>
                  Alternative innovation after ethical to network environmental
                  whiteboard transparent growth natural done.
                </p>
              </div>
            </div>

            <hr />

            <div className="flex flex-col sm:flex-row gap-6 w-fit">
              <Link
                href="#"
                className="shrink-0 relative z-0 w-fit overflow-hidden rounded-full bg-app_primary px-8 sm:px-10 py-3 sm:py-4 text-white transition-colors duration-500 group"
              >
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 rounded-full border-[1px] border-app_primary bg-black transition-transform duration-500 group-hover:scale-x-100"></span>

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

              <div className="animate-to-and-fro">
                <Image
                  src="/images/about-shape.png"
                  alt=""
                  width={90}
                  height={5}
                  className="mt-4 animate-to-and-fro"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 sm:right-10 lg:right-20 top-20 sm:top-28 lg:top-40 z-20 animate-zoom-pulse">
          <Image
            src="/images/about-shape-1.png"
            alt=""
            height={40}
            width={40}
            className="w-8 sm:w-10 lg:w-[40px]"
          />
        </div>
      </section>

      {/* Service section */}

      <section
        className="w-full bg-cover"
        style={{
          backgroundImage: `url('/images/service-bg.jpg')`,
        }}
      >
        <div className="mx-auto flex flex-col gap-5 w-full max-w-screen-2xl lg:gap-6 px-4 sm:px-6 md:px-12 lg:px-40 py-10 sm:py-20 lg:py-28 relative">
          <div className="flex gap-2">
            <Image
              src="/images/sub-title-shape.png"
              alt=""
              width={20}
              height={10}
            />
            <p className="font-medium text-app_primary">OUR SERVICES</p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row w-full justify-between">
            <h2 className="w-full font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0">
              Echofy Provide Environment Best Leading Services
            </h2>

            <div className="flex gap-4 justify-start md:justify-end w-full">
              <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-gray-200 hover:text-app_primary hover:cursor-pointer">
                <div className="relative h-6 w-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-app_primary transition-colors duration-300 hover:bg-app_primary hover:text-white hover:cursor-pointer">
                <div className="relative h-6 w-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full justify-center"
            >
              <CarouselContent>
                {ServiceCards.map((Cards, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <ServiceCard
                      key={index}
                      image={Cards.image}
                      icon={Cards.icon}
                      title={Cards.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-app_primary text-white p-3 rounded-full shadow-md hover:bg-app_primary/80" />
              <CarouselNext className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-app_primary text-white p-3 rounded-full shadow-md hover:bg-app_primary/80" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* skills */}

      <section
        className="w-full bg-cover relative overflow-hidden"
        style={{
          backgroundColor: "#F5F8ED",
        }}
      >
        <div className="mx-auto flex flex-col lg:flex-row gap-14 justify-between px-6 sm:px-10 md:px-16 lg:px-40 py-16 sm:py-20 lg:py-28 w-full max-w-screen-2xl">
          <div className="flex flex-col gap-6 py-6 sm:py-10 w-full">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
              />
              <p className="font-medium text-app_primary">OUR SKILLS</p>
            </div>

            <h2
              className="font-AlbertSans font-semibold
              text-[22px] leading-8
              sm:text-[28px] sm:leading-[38px]
              md:text-[36px] md:leading-[46px]
              lg:text-[32px] lg:leading-[42px]
              xl:text-[40px] xl:leading-[50px]
              2xl:text-[46px] 2xl:leading-[56px]
              text-HeadingColor-0"
            >
              Getting A Greener Future Safe Environment
            </h2>

            <p className="text-black/50">
              Competently cultivate worldwide e-tailers through
              principle-centered value professionally engineer high-payoff
              deliverables without exceptional processes. Rapidiously network
              cost effective vortals
            </p>

            <div className="flex flex-col sm:flex-row justify-start gap-4 w-full">
              <div className="shrink-0 relative z-0 w-fit overflow-hidden bg-white px-8 py-4 transition-colors duration-500 group">
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-app_primary transition-transform duration-500 group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-colors duration-500 group-hover:fill-white"
                      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
                      fill="#79B900"
                    />
                    <path
                      className="transition-colors duration-500 group-hover:fill-app_primary"
                      d="M16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    Safe Environment
                  </span>
                </span>
              </div>

              <div className="shrink-0 relative z-0 w-fit overflow-hidden bg-white px-8 py-4 transition-colors duration-500 group">
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-app_primary transition-transform duration-500 group-hover:scale-x-100"></span>
                <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-colors duration-500 group-hover:fill-white"
                      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2Z"
                      fill="#79B900"
                    />
                    <path
                      className="transition-colors duration-500 group-hover:fill-app_primary"
                      d="M16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <span className="text-base font-medium">Dirty Recycling</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <p className="font-medium">Recycling</p>
                <ProgressBar percentage={90} />
              </div>
              <div className="flex flex-col">
                <p className="font-medium">Ocean Cleaning</p>
                <ProgressBar percentage={80} />
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/images/skill-thumb.png"
              alt="Skills Background"
              fill
              className="object-cover relative z-10"
            />

            <div className="absolute top-2 left-0 animate-[bounce_4s_infinite] z-20">
              <Image
                src="/images/skill-shape.png"
                alt=""
                width={160}
                height={80}
              />
            </div>

            <div className="absolute bottom-4 right-0 animate-to-and-fro-down z-0">
              <Image
                src="/images/skill-shape2.png"
                alt=""
                width={130}
                height={80}
              />
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-10 animate-to-and-fro-down">
          <Image
            src="/images/skill-main-shape.png"
            alt=""
            width={200}
            height={80}
          />
        </div>
      </section>

      {/* brands */}
      <section
        className="w-full "
        style={{
          backgroundImage: `url('/images/counter-bg.png')`,
        }}
      >
        <div className=" flex flex-col gap-10 md:flex-row md:justify-evenly py-10 md:py-28 max-w-screen-2xl items-center  text-center mx-auto">
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

      {/* Projects */}

      <section className="w-full bg-cover">
        <div className="mx-auto flex flex-col gap-5 w-full max-w-screen-2xl lg:gap-6 px-4 sm:px-6 md:px-12 lg:px-40 py-10 sm:py-20 lg:py-28 relative">
          <div className="flex gap-2">
            <Image
              src="/images/sub-title-shape.png"
              alt=""
              width={20}
              height={10}
            />
            <p className="font-medium text-app_primary">OUR PROJECTS</p>
          </div>

          {/* Heading + Arrows */}
          <div className="flex flex-col gap-6 md:flex-row w-full justify-between">
            <h2 className="w-full font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[28px] sm:leading-[38px] md:text-[36px] md:leading-[46px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0">
              Finished the Latest Leading Environmental Works
            </h2>

            <div className="flex gap-4 justify-start md:justify-end w-full">
              {/* Left Arrow */}
              <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-app_primary text-white transition-colors duration-300 hover:bg-gray-200 hover:text-app_primary hover:cursor-pointer">
                <div className="relative h-6 w-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Right Arrow */}
              <div className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-app_primary transition-colors duration-300 hover:bg-app_primary hover:text-white hover:cursor-pointer">
                <div className="relative h-6 w-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* Carousel */}
          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full justify-center"
            >
              <CarouselContent>
                {ProcessCards.map((Cards, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
                  >
                    <ProcessCard
                      key={index}
                      image={Cards.image}
                      heading={Cards.heading}
                      title={Cards.title}
                      spinImage={Cards.spinImage}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-app_primary text-white p-3 rounded-full shadow-md hover:bg-app_primary/80" />
              <CarouselNext className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-app_primary text-white p-3 rounded-full shadow-md hover:bg-app_primary/80" />
            </Carousel>
          </div>
        </div>
      </section>




      </>


            )


        }