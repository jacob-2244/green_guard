


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
      <div className="justify-center flex mx-auto  w-80 h-80  relative z-20 ">
        <Image src={image} alt="team" fill className="object-cover rounded-t-lg" />
      </div>

      <div className=" w-full bg-[#F5F8ED] flex flex-col text-center  gap-2 h-[350px] justify-center -mt-[100px] align-center relative group  z-10  ">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-app_primary text-lg font-semibold">{position}</p>

      
        <div className="flex justify-center w-full gap-4 mt-6">
        
          <div className="p-2  my-auto rounded-full border border-[#808080] transition-colors duration-300 hover:bg-app_primary hover:border-app_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-6 h-6 fill-[#808080] transition-colors duration-300 hover:fill-white"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
            </svg>
          </div>

       
          <div className="p-2 my-auto rounded-full border border-[#808080] transition-colors duration-300 hover:bg-app_primary hover:border-app_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-[#808080] transition-colors duration-300 hover:fill-white"
            >
              <path d="M24 4.557a9.847 9.847 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.737 0-4.957 2.22-4.957 4.957 0 .39.045.765.127 1.124C7.728 8.9 4.1 6.91 1.67 3.918a4.93 4.93 0 0 0-.67 2.49c0 1.72.874 3.237 2.2 4.127a4.903 4.903 0 0 1-2.245-.62v.062c0 2.404 1.71 4.406 3.977 4.86a4.936 4.936 0 0 1-2.239.084c.63 1.966 2.445 3.396 4.6 3.438A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.01 10.01 0 0 0 24 4.557z" />
            </svg>
          </div>

          <div className="p-2 my-auto rounded-full border border-[#808080] transition-colors duration-300 hover:bg-app_primary hover:border-app_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-[#808080] transition-colors duration-300 hover:fill-white"
            >
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.061 20.452H3.577V9h3.484v11.452zM5.32 7.433a2.022 2.022 0 1 1 0-4.044 2.022 2.022 0 0 1 0 4.044zM20.452 20.452h-3.484v-5.605c0-1.337-.027-3.058-1.862-3.058-1.864 0-2.15 1.454-2.15 2.957v5.706H9.472V9h3.345v1.561h.047c.466-.882 1.605-1.813 3.302-1.813 3.532 0 4.186 2.324 4.186 5.347v6.357z" />
            </svg>
          </div>

          <div className="p-2 my-auto rounded-full border border-[#808080] transition-colors duration-300 hover:bg-app_primary hover:border-app_primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-[#808080] transition-colors duration-300 hover:fill-white"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 4.99 3.657 9.128 8.438 10.297-.117-.875-.223-2.22.047-3.176.244-.837 1.57-5.337 1.57-5.337s-.4-.8-.4-1.983c0-1.86 1.078-3.248 2.419-3.248 1.141 0 1.693.856 1.693 1.881 0 1.146-.729 2.862-1.106 4.454-.314 1.327.664 2.409 1.97 2.409 2.364 0 3.959-3.034 3.959-6.619 0-2.73-1.839-4.776-5.183-4.776-3.778 0-6.139 2.822-6.139 5.972 0 1.086.419 2.252.943 2.885.104.126.119.236.088.363-.096.398-.311 1.265-.353 1.442-.056.234-.187.284-.433.172-1.614-.75-2.623-3.094-2.623-4.978 0-4.057 2.949-7.78 8.495-7.78 4.458 0 7.93 3.177 7.93 7.415 0 4.438-2.801 8.012-6.693 8.012-1.307 0-2.539-.68-2.959-1.482l-.805 3.07c-.291 1.104-1.08 2.487-1.607 3.33A12.004 12.004 0 0 0 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0z" />
            </svg>
          </div>
        </div>

          <span className="absolute bottom-0 left-1/2 w-0 h-[5px] bg-app_primary transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </div>
    </div>
  );
};

export default MemberCard;
