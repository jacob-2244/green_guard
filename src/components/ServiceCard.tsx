'use client'
import Image from "next/image"

type ServiceCardProps = {
    image: string,
    icon: string,
    title: string,

}

export default function ServiceCard({ image, icon, title  }: ServiceCardProps) {
    return (
        <div className="group relative flex flex-col w-full gap-5 p-5 max-w-sm bg-[#F5F8ED] rounded-md overflow-hidden z-10 duration-500">


            <div className="absolute inset-0 h-0 w-full bg-black transition-all duration-500 ease-out group-hover:h-full -z-10"></div>

            <div className="">
                <Image
                    src={image}
                    alt="image"
                    width={450}
                    height={50}
                />
            </div>

            <div className="flex w-full justify-between">
                <Image
                    src={icon}
                    alt="icon"
                    width={50}
                    height={10}
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-app_primary transition-colors duration-300 group-hover:bg-app_primary group-hover:text-white group-hover:cursor-pointer">
                    <div className="relative h-6 w-6 -rotate-45">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/24/svg">
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>


            <h2 className="text-2xl font-semibold relative z-10 group-hover:text-white transition-colors duration-500">{title}</h2>

            <hr className="w-10 text-app_primary border-app_primary relative z-10 transition-colors duration-500" />


            <p className=" text-black/70 relative z-10 group-hover:text-white transition-colors duration-500">
                Alternative innovation to ethical network environmental whiteboard


            </p>

            <div className="absolute right-0 bottom-0 transition-all duration-500 opacity-0 translate-x-full translate-y-full group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <Image
                    src="/images/service-shape.png"
                    alt=""
                    width={80}
                    height={20}
                    className="rotate-90"
                />
            </div>
        </div>
    )
}
