
'use client'

import Image from "next/image"
import Link from "next/link"

export default function Header() {


    return (
        <>
           
                <div className="flex justify-between w-full items-center py-4 px-6 bg-[#262626]">

                    <div>
                        <Image
                            src="/svgs/headerlogo.svg"
                            alt="headerlogo"
                            width={130}
                            height={90}


                        />
                    </div>

                    <div>
                        <Link
                            href="#" className="bg-app_primary text-white rounded-md  px-5 py-2 text-center text-[14px] leading-[21px]">
                            Buy now
                        </Link>
                    </div>


                </div>

            
        </>
    )
}