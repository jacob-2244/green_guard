








'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image"
import Link from "next/link"

export default function Topbar() {
    useEffect(() => {
        AOS.init({
     
            duration: 800,
            once: true, 

        });
    }, []); 

    return (
        <>
            <div className="flex flex-col w-full " >
                <div className="flex justify-between w-full items-center text-white py-4 mx-auto max-w-screen-xl bg-yellow-200 px-40 ">
                    <div className="flex gap-10">
                        <div className="flex gap-1">
                            <Image
                                src="/svgs/location.svg"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <p className="text-[14px] leading-[21px]">102/B New Market,Sandigo-USA</p>
                        </div>
                        <div className="flex gap-1">
                            <Image
                                src="/svgs/email.svg"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <a href="#">example@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex gap-1 items-center">
                            <Image
                                src="svgs/call.svg"
                                alt=""
                                width={15}
                                height={15}
                            />
                            <a href="">+123 (4567) 890</a>
                        </div>
                        <div className="flex gap-4">
                            <Image src="svgs/socials/fb.svg" alt="" width={10} height={10} />
                            <Image src="svgs/socials/twitter.svg" alt="" width={10} height={10} />
                            <Image src="svgs/socials/linkedin.svg" alt="" width={10} height={10} />
                            <Image src="svgs/socials/pinterest.svg" alt="" width={10} height={10} />
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-200 opacity-15" />
                <div className="flex justify-between items-center py-6 px-80 w-full " data-aos="fade-down">
                    <div className="flex items-center">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={160}
                            height={50}
                        />
                    </div>
                    
                    <div className="flex items-center space-x-8  ">
                        <div className="flex space-x-8 text-white">
                            <Link href="#">Home</Link>
                            <Link href="#">About</Link>
                            <Link href="#">Service</Link>
                            <Link href="#">Pages</Link>
                            <Link href="#">Blog</Link>
                            <Link href="#">Contact</Link>
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
                            className=" shrink-0 relative overflow-hidden group bg-app_primary text-white rounded-full py-3 px-7 z-0 transition-colors duration-500"
                        >

                            <span
                                className="absolute inset-0 w-full h-full bg-black border-[1px] rounded-full border-app_primary -z-10 transition-transform origin-left duration-500 transform scale-x-0 group-hover:scale-x-100"
                            >
                                
                            </span>

                            <span className="relative z-10">Get A Quote</span>
                        </Link>
                    </div>
                
                </div>
                <hr className="border-t border-gray-200 opacity-15" />
            </div>
        </>
    )
}

