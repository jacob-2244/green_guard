


import React from "react";
import Image from "next/image";

type MemberCardProps = {
  image: string;
  name: string;
  position: string;
};

const MemberCard = ({ image, name, position }: MemberCardProps) => {
  return (
    <div className=" flex flex-col w-full max-w-lg h-fit gap-6">
      {/* Image wrapper must be relative when using `fill` */}
      <div className="justify-center flex mx-auto w-60 h-60 md:w-80 md:h-80  relative z-20 ">
        <Image src={image} alt="team" fill className="object-cover rounded-t-lg" />
      </div>

      <div className=" w-full bg-[#F5F8ED] flex flex-col text-center  gap-2 h-[350px] justify-center -mt-[100px] align-center relative group  z-10  ">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-app_primary text-lg font-semibold">{position}</p>

      
        <div className="flex justify-center w-full gap-4 mt-6">
        
              {/* Facebook */}
              <button className="w-10 h-10 rounded-full border-2 border-[#808080] flex items-center justify-center text-[#808080] overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-app_primary hover:text-white  before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
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
             
             <button className="  w-10 h-10 rounded-full border-2 border-[#808080] flex items-center justify-center text-[#808080] overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 hover:text-white before:bg-app_primary before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></button>

              {/* LinkedIn */}
             <button className=" hover:text-white w-10 h-10 rounded-full border-2 border-[#808080] flex items-center justify-center text-[#808080] overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-app_primary before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></button>
              {/* Pinterest */}
            <button className=" hover:text-white w-10 h-10 rounded-full border-2 border-[#808080] flex items-center justify-center text-[#808080] overflow-hidden transition-all duration-500 hover:text-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-app_primary before:transition-all before:duration-500 before:scale-0 hover:before:scale-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg></button>
        </div>

          <span className="absolute bottom-0 left-1/2 w-0 h-[5px] bg-app_primary transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </div>
    </div>
  );
};

export default MemberCard;
