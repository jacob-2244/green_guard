import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, About, Service, Contact, Faq } from "@/constants/pageLinks";

const Footer = () => {
  return (
    <footer
      className="w-full h-fit bg-cover bg-center pt-28 pb-6 z-10 overflow-hidden"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      {/* Social Section */}
      <div className="relative w-full flex   h-fit py-12 justify-between max-w-[1200px] mx-auto   ">
        <div className="absolute top-0 rounded-md overflow-hidden z-10 w-full h-full">
          <div className="relative w-full h-full ">
            <Image src="/images/brand-bg.jpg" alt="" fill />
          </div>
        </div>
        <div className="absolute -right-8 -bottom-20 z-0">
          <div className="relative w-20 h-20 animate-to-and-fro-down">
            <Image src="/images/footer-social-shape.png" alt="" fill />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row w-full justify-between z-20 px-10  ">
          <div className="absolute  left-1/2 overflow-hidden z-0 w-20 top-1/2 bottom-1/2 h-10 animate-zoom-pulse">
            <Image src="/images/footer-shape2.png" alt="" fill />
          </div>
          <div className="w-full  items-center h-full flex  justify-center md:justify-start">
            <h2 className=" text-xl md:text-4xl text-white font-bold">
              Stay With Us On Social
            </h2>
          </div>

          <div className="w-full flex gap-1 md:gap-5 text-white  justify-center md:justify-end  items-center ">
            <h2 className=" hidden md:block text-md md:text-xl w-fit font-semibold">
              FOLLOW US :
            </h2>

            {/* Social icons */}
            <div className="flex justify-center  gap-3">
              {/* Facebook */}
              <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white hover:text-app_primary  before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
              <svg
                stroke=" hover:text-app_primary currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
              </svg>
            </button>

              {/* Twitter */}
             <button className=" hover:text-app_primary w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></button>

              {/* LinkedIn */}
              <button className=" hover:text-app_primary w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></button>
              {/* Pinterest */}
            <button className=" hover:text-app_primary w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-white before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg></button>
            </div>
          
        
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="flex flex-col lg:flex-row w-full max-w-screen-2xl gap-10 md:gap-20 px-6 md:px-40 py-20 mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col w-full gap-4 text-white  md:text-left">
          <div className="flex  justify-start ">
            <Image src="/images/logo.png" alt="logo" width={160} height={50} />
          </div>
          <p className="text-base md:text-lg">
            Proactively restore timely alignments after client environmentals
          </p>

          <div className="w-full flex gap-2 justify-start">
            <hr className="border border-t-app_primary w-6" />
            <p className="text-base md:text-lg">Contact</p>
          </div>

          <div className="flex gap-2 items-center justify-start">
            <Image src="/svgs/call.svg" alt="" width={20} height={15} />
            <a className="text-base md:text-lg" href="">
              +144547683514
            </a>
          </div>

          <div className="flex gap-2 justify-start">
            <Image src="/svgs/email.svg" alt="" width={28} height={20} />
            <a className="text-base md:text-lg" href="#">
              echofy@gmail.com
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-full text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold">Company</h2>
          <div className="flex flex-col gap-6 w-full">
            <Link
              className="text-base md:text-lg leading-none text-gray-400 hover:text-app_primary"
              href={Home}
            >
              Home
            </Link>
            <Link
              className="text-base md:text-lg leading-none text-gray-400 hover:text-app_primary"
              href={About}
            >
              About Us
            </Link>
            <Link
              className="text-base md:text-lg leading-none text-gray-400 hover:text-app_primary"
              href={Service}
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 w-full text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Quick Links
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <Link
              className="text-base md:text-lg text-gray-400 hover:text-app_primary cursor-pointer "
              href={"#testimonals"}
            >
              Testimonials
            </Link>
            <Link
              className="text-base md:text-lg text-gray-400 hover:text-app_primary"
              href={Contact}
            >
              Contact Us
            </Link>
            <Link
              className="text-base md:text-lg text-gray-400 hover:text-app_primary"
              href={Faq}
            >
              Faq
            </Link>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-6 w-full text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            News Letter
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Subscribe Our Newsletter
          </p>

          <input
            type="text"
            className="cursor-pointer bg-[#062216] text-white p-3 md:p-4 border border-t-app_primary w-full rounded-full"
            placeholder="Enter Your E-Mail*"
          />
          <Link
            href="#"
            className="mx-auto relative z-10 w-full overflow-hidden rounded-full bg-app_primary p-3 md:p-4  text-white transition-colors duration-500 group"
          >
            <span className="absolute inset-0 z-0 scale-x-0 origin-left transform bg-black  rounded-full border border-app_primary transition-transform duration-500 group-hover:scale-x-100"></span>
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-xl">Subscribe</span>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex items-center justify-center text-white text-center px-4">
        <p className="text-base md:text-lg">
          © 2025 Echofy – All Rights Reserved by{" "}
          <span className="text-app_primary cursor-pointer">Echofy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
