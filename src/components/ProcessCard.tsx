'use client'
import Image from "next/image"
import Link from "next/link"

type ProcessCardProps = {
    image: string
    spinImage: string
    title: string
    heading: string
}

export default function ProcessCard({ image, heading, title, spinImage }: ProcessCardProps) {
    return (
        <div className="group relative w-full max-w-sm rounded-md overflow-hidden bg-white pb-20">

    
            <div className="relative w-full h-[400px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-md"
                />
            </div>


      
            <div className="absolute left-0 bottom-0 right-10 z-20 flex flex-col gap-3 p-4
                bg-[#F5F8ED] border-l-8 border-app_primary rounded-t-md
                translate-y-6 group-hover:-translate-y-0 transition-all duration-500 overflow-hidden
                 group">

     
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-app_primary transition-transform duration-500 group-hover:scale-x-100"></span>

          
                <div className="relative z-10 flex flex-col gap-3">
                
                    <p className="text-black/80 group-hover:text-white transition-colors duration-500">{title}</p>
                    <h1 className="text-2xl font-semibold group-hover:text-white transition-colors duration-500">{heading}</h1>

                    <Link href="#"
                        className="flex gap-2 text-black opacity-0 group-hover:text-white group-hover:opacity-100 transition-all duration-500 mt-2">
                        View Details
                        <span>
                            <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                                <line x1="4" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2" />
                                <polyline points="18,7.5 26.5,16 18,24.5" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span>
                    </Link>

            
                    <div className="absolute right-2 bottom-2 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity animate-to-and-fro-down">
                        <Image
                            src="/images/project-content-shape.png"
                            alt="shape"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>


            <div className="absolute -right-16 -top-16 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200000 animate-spin-slow">
                <Image
                    src={spinImage}
                    alt="spin"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    )
}
