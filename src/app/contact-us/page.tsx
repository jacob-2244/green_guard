"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type ContactInputs = {
  name: string;
  number: string;
  address: string;
  email: string;
  message: string;
};

const Header2 = dynamic(() => import("@/components/Header2"), { ssr: false });

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = (data) => {
    console.log(data);
  };

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
            Contact US
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

            <p className="text-gray-300">Contact US</p>
          </div>
        </div>
      </section>

      <section className="w-full py-28">
        <div className=" w-full max-w-screen-xl md:px-8 px-4 justify-center items-center  mx-auto">
          <div className=" gap-10 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full rounded-lg bg-app_primary">
            <div className=" my-4 flex w-full flex-col justify-center text-center px-2  group   border-r-2 border-t-white text-white gap-6">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-app_primary relative m-auto z-10 transition-all duration-500 group-hover:bg-black group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2 px-8 text-center">
                <h2 className="text-xl font-bold">Office Address</h2>
                <p className="text-lg">
                  200 Navana ST, West end Right Sandigo, USA
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="my-4 flex w-full flex-col justify-center text-center px-2  group   border-r-2 border-t-white text-white gap-6">
              <div className="  w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-app_primary relative m-auto z-10 transition-all duration-500 group-hover:bg-black group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2 px-8 text-center">
                <h2 className="text-xl font-bold">Make a Call</h2>
                <p>+92348-7997462</p>
                <p className="text-lg">(+880) 123 4567 890</p>
              </div>
            </div>

            {/* Email */}
            <div className="my-4 flex w-full flex-col justify-center text-center px-2  group   border-r-2 border-t-white text-white gap-6">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-app_primary relative m-auto z-10 transition-all duration-500 group-hover:bg-black group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-2 px-8 text-center">
                <h2 className="text-xl font-bold">24/7 Online Support</h2>
                <p>muhammadyaqoob2580@gmail.com</p>
                <p className="text-lg">ebmacs@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-28">
        <div className="flex flex-col md:flex-row md:justify-between gap-20 w-full max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className=" flex justify-center relative w-full h-[400px] md:h-[600px]">
            <Image src="/images/contact-map.png" alt="" fill
            // className=" w-300 md:w-full xs:h-[200px] md:h-fit"
            
             />
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="flex gap-2">
              <Image
                src="/images/sub-title-shape.png"
                alt=""
                width={20}
                height={10}
             
              />
              <p className="font-medium text-app_primary">GET IN TOUCH</p>
            </div>
            <h2 className="font-AlbertSans font-semibold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 ">
              Write Us Something
            </h2>

           <form  className="w-full flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full  flex-col sm:flex-row  gap-6 justify-between ">
                
              <div className="w-full ">
                <input
                  {...register("name", { required: "First name is required" })}
                  placeholder="Enter Your First Name"
                  className={`border  px-4 py-4 rounded w-full ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="w-full ">
                <input
                  {...register("number", { required: "Number is required" })}
                  placeholder="Your Number"
                  className={`border  px-4 py-4 rounded w-full ${
                    errors.number ? "border-red-500" : ""
                  }`}
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">
                    {errors.number.message}
                  </p>
                )}
              </div>
            </div>
           

            <div className="w-full flex-col sm:flex-row  gap-6 justify-between">
              <div className="w-full">
                <input
                  {...register("email", { required: "Email is required" })}
                  placeholder="Your Email"
                  className={`border  px-4 py-4 rounded w-full ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full ">
                <input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Your Address"
                  className={`border  px-4 py-4 rounded w-full ${
                    errors.number ? "border-red-500" : ""
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <textarea
              rows={5}
              
                {...register("message", { required: "Message is required" })}
                placeholder="Your Message"
                className={`border  px-2 py-4 rounded w-full   ${
                  errors.message ? "border-gray-500" : ""
                }`}
              />
            </div>

            <div className="w-full">
                <input type="checkbox"/> <span className="text-gray-400">I agree with the Terms & Conditions.</span>
            </div>

            <div className="w-fit">
                <input type="submit"
                value="Submit Now ->"
                className="text-white bg-app_primary px-20 py-4 rounded-full hover:bg-black text-lg font-semibold"
                 />
            </div>


             </form>


          </div>
          
       
        </div>
      </section>

        <Footer />
      <ScrollToTop show={showScrollTop} />
    </>
  );
}
