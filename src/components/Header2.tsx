// "use client";

// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   Home,
//   About,
//   Service,
//   Contact,
//   Faq,
//   PricingPlan,
// } from "@/constants/pageLinks";

// export default function Header2() {
//   const [isFixed, setIsFixed] = useState(false);
//   const [triggerFade, setTriggerFade] = useState(false);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 50 && !hasAnimated) {
//         setTriggerFade(true); // fade-down triggered
//         setHasAnimated(true);

//         // after fade completes → make it fixed
//         setTimeout(() => {
//           setIsFixed(true);
//         }, 800); // matches AOS duration
//       } else if (window.scrollY <= 50) {
//         // reset when scrolling back to top
//         setTriggerFade(false);
//         setIsFixed(false);
//         setHasAnimated(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasAnimated]);

//   return (
//     <div className="flex flex-col w-full ">
//       {/* Top Bar */}
//       <div className="flex justify-between w-full items-center text-white py-4 mx-auto  max-w-screen-2xl px-40">
//         <div className="flex gap-10">
//           <div className="flex gap-1">
//             <Image src="/svgs/location.svg" alt="" width={20} height={20} />
//             <p className="text-[14px] leading-[21px]">
//               102/B New Market,Sandigo-USA
//             </p>
//           </div>
//           <div className="flex gap-1">
//             <Image src="/svgs/email.svg" alt="" width={20} height={20} />
//             <a href="#">example@gmail.com</a>
//           </div>
//         </div>
//         <div className="flex gap-10">
//           <div className="flex gap-1 items-center">
//             <Image src="/svgs/call.svg" alt="" width={15} height={15} />
//             <a href="">+123 (4567) 890</a>
//           </div>
//           <div className="flex gap-4">
//             <Image src="/svgs/socials/fb.svg" alt="" width={10} height={10} />
//             <Image
//               src="/svgs/socials/twitter.svg"
//               alt=""
//               width={10}
//               height={10}
//             />
//             <Image
//               src="/svgs/socials/linkedin.svg"
//               alt=""
//               width={10}
//               height={10}
//             />
//             <Image
//               src="/svgs/socials/pinterest.svg"
//               alt=""
//               width={10}
//               height={10}
//             />
//           </div>
//         </div>
//       </div>

//       <hr className="border-t border-gray-200 opacity-15" />

//       {/* Main Header */}
//       <div
//         className={`w-full ${isFixed ? "fixed top-0 left-0 right-0 z-50" : ""}`}
//         data-aos={triggerFade ? "fade-down" : ""}
//       >
//         <div
//           className={`transition-all duration-500 ${
//             isFixed ? "bg-black backdrop-blur" : "bg-transparent"
//           }`}
//         >
//           <div className="max-w-screen-2xl px-40 mx-auto ">
//             <div className="flex justify-between items-center text-white py-6">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <Image
//                   src="/images/logo.png"
//                   alt="logo"
//                   width={160}
//                   height={50}
//                 />
//               </div>

//               {/* Nav */}
//               <div className="flex items-center space-x-8">
//                 <div className="flex space-x-8 text-white">
//                   <Link href={Home}>Home</Link>
//                   <Link href={About}>About</Link>
//                   <Link href={Service}>Service</Link>
//                   <Link href="#">Pages</Link>

//                   <Link href={Contact}>Contact</Link>
//                   <Link href={PricingPlan}>Pricing Plan</Link>
//                 </div>
//                 <div className="flex items-center">
//                   <Image
//                     src="/svgs/search.svg"
//                     alt="search"
//                     width={20}
//                     height={20}
//                   />
//                 </div>

//                 <Link
//                   href="#"
//                   className="shrink-0 relative overflow-hidden group bg-app_primary text-white rounded-full py-3 px-7 z-0 transition-colors duration-500"
//                 >
//                   <span className="absolute inset-0 w-full h-full bg-black border-[1px] rounded-full border-app_primary -z-10 transition-transform origin-left duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
//                   <span className="relative z-10">Get A Quote</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr className="border-t border-gray-200 opacity-15" />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  About,
  Service,
  Contact,
  PricingPlan,
  Faq
} from "@/constants/pageLinks";

export default function Header2() {
  const [isFixed, setIsFixed] = useState(false);
  const [triggerFade, setTriggerFade] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 50 && !hasAnimated) {
        setTriggerFade(true);
        setHasAnimated(true);
        setTimeout(() => {
          setIsFixed(true);
        }, 800);
      } else if (window.scrollY <= 50) {
        setTriggerFade(false);
        setIsFixed(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="flex justify-between w-full items-center text-white py-4 mx-auto px-4 sm:px-6 lg:px-40 max-w-screen-2xl">
        <div className="flex gap-6 sm:gap-10">
          <div className=" hidden sm:flex  gap-1">
            <Image src="/svgs/location.svg" alt="" width={20} height={20} />
            <p className="text-[14px] leading-[21px]">
              102/B New Market,Sandigo-USA
            </p>
          </div>
          <div className="hidden sm:flex gap-1">
            <Image src="/svgs/email.svg" alt="" width={20} height={20} />
            <a href="#">example@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-10">
          <div className=" hidden md:flex gap-1 items-center">
            <Image src="/svgs/call.svg" alt="" width={15} height={15} />
            <a href="">+123 (4567) 890</a>
          </div>
          <div className="flex gap-4">
            <Image src="/svgs/socials/fb.svg" alt="" width={10} height={10} />
            <Image
              src="/svgs/socials/twitter.svg"
              alt=""
              width={10}
              height={10}
            />
            <Image
              src="/svgs/socials/linkedin.svg"
              alt=""
              width={10}
              height={10}
            />
            <Image
              src="/svgs/socials/pinterest.svg"
              alt=""
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 opacity-15" />
      {/* 
     Main header */}

      <div
        className={`w-full ${isFixed ? "fixed top-0 left-0 right-0 z-50" : ""}`}
        data-aos={triggerFade ? "fade-down" : ""}
      >
        {/* Black background always covers full width */}
        <div
          className={`w-full transition-all duration-500 ${
            isFixed ? "bg-black backdrop-blur" : "bg-transparent"
          }`}
        >
          {/* Content stays centered with max-width */}
          <div className="max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-40 mx-auto">
            <div className="flex justify-between items-center text-white py-4 sm:py-6">
              {/* Logo */}
              <div className="flex items-center ">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={160}
                  height={50}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-8">
                <div className="flex space-x-6 text-white">
                  <Link href={Home}>Home</Link>
                  <Link href={About}>About</Link>
                  <Link href={Service}>Service</Link>

                  {/* Dropdown for Pages */}
                  <div className="relative group">
                    <button className="flex items-center gap-1">
                      Pages
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-[2px]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu showing existing links */}
                    <div className="absolute left-0 top-full mt-2 w-48 bg-black text-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-700">
                      <Link
                        href={Home}
                        className="block px-4 py-2 hover:bg-app_primary"
                      >
                        Home
                      </Link>
                      <Link
                        href={About}
                        className="block px-4 py-2 hover:bg-app_primary "
                      >
                        About
                      </Link>
                      <Link
                        href={Service}
                        className="block px-4 py-2 hover:bg-app_primary"
                      >
                        Service
                      </Link>
                      <Link
                        href={Contact}
                        className="block px-4 py-2 hover:bg-app_primary"
                      >
                        Contact
                      </Link>
                      <Link
                        href={PricingPlan}
                        className="block px-4 py-2 hover:bg-app_primary"
                      >
                        Pricing Plan
                      </Link>

                       <Link
                        href={Faq}
                        className="block px-4 py-2 hover:bg-app_primary"
                      >
                        Faq
                      </Link>
                    </div>
                  </div>

                  <Link href={Contact}>Contact</Link>
                  <Link href={PricingPlan}>Pricing Plan</Link>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/svgs/search.svg"
                    alt="search"
                    width={20}
                    height={20}
                  />
                </div>

                <Link
                  href="#"
                  className="shrink-0 relative overflow-hidden group bg-app_primary text-white rounded-full py-3 px-7 z-0 transition-colors duration-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-black border-[1px] rounded-full border-app_primary -z-10 transition-transform origin-left duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Get A Quote</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="flex flex-col items-center gap-4 py-4 text-white lg:hidden">
                <Link href={Home}>Home</Link>
                <Link href={About}>About</Link>
                <Link href={Service}>Service</Link>
                <Link href="#">Pages</Link>
                <Link href={Contact}>Contact</Link>
                <Link href={PricingPlan}>Pricing Plan</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 opacity-15" />
    </div>
  );
}
