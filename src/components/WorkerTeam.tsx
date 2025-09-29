








import Image from "next/image";
import React from "react";

type WorkerTeamProps = {
  image: string;
  title: string;
  supervisor: string;
};

const WorkerTeam = ({ image, title, supervisor }: WorkerTeamProps) => {
  const getFirstLetter = (name: string) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (
      words[0].charAt(0).toUpperCase()

    );
  };

  return (
    <div className="group flex flex-col max-w-lg w-full rounded-lg border border-gray-200 overflow-hidden shadow-sm bg-white">
      {/* Image */}
      <div className="relative w-full h-[370px]">
        <Image
          src={image}
          alt="team"
          fill
          className="object-cover"
        />


       <div className="absolute rounded-3xl px-8 py-3 bg-app_primary text-white top-8 left-8  cursor-pointer
  opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 
  transition-all duration-500 ease-out">
  <p className="text-lg">Environment</p>
</div>
      </div>

      {/* Content */}
      <div className="p-6 w-full flex flex-col gap-3">
        {/* Date with dot */}
        <p className="flex items-center gap-2  text-gray-500 text-lg">
          <span className="w-3 h-3 rounded-full bg-app_primary"></span>
          24 Mar, 2024
        </p>

        {/* Title */}
        <h2 className="text-2xl font-semibold group-hover:text-app_primary transition-colors">
          {title}
        </h2>

        <p className="text-gray-500 text-lg">
          Competently cultivate worldwide to e-tailers professionally engineer high
        </p>

       

       
      </div>
      <hr />

      
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center gap-2 cursor-pointer">
           
            <div className="flex items-center justify-center rounded-full w-10 h-10 text-white bg-app_primary text-sm font-bold">
              {getFirstLetter(supervisor)}
            </div>
            <h2 className="text-lg font-medium hover:text-app_primary ">{supervisor}</h2>
          </div>




           <div className="relative h-6 w-6 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
        </div>
    </div>
  );
};

export default WorkerTeam;

