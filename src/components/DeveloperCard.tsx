





"use client";
import Image from "next/image";

type DeveloperCardProps = {
  image: string;
  name: string;
  position: string;
};

const DeveloperCard = ({ image, name, position }: DeveloperCardProps) => {
  return (
    <div className="group relative flex gap-4 w-full  p-12 rounded-md overflow-hidden">
   
      <div className="absolute inset-0 bg-app_primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-lg z-0"></div>

  
      <div className="relative z-10 flex gap-4 w-full">
   
        <div className="relative w-28 h-24 mb-auto">
          <Image src={image} alt="" fill sizes="112px" />
        </div>

        <div className="w-full flex flex-col gap-6">
      
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((element, index) => (
              <div
                key={index}
                className="bg-app_primary rounded-sm w-8 h-6 flex items-center justify-center py-2 transition-colors duration-300 group-hover:bg-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-app_primary"
                  fill="currentColor"
                >
                  <path d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265 
                    C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096
                    c-1.458,0.223-2.669,1.242-3.138,2.642c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977
                    c-0.242,1.488,0.389,2.984,1.62,3.854c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365
                    c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977
                    l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z" />
                </svg>
              </div>
            ))}
          </div>

     
          <p className="text-gray-600 text-lg transition-colors duration-300 group-hover:text-white">
            Appropriately administrate proactive value with to niche markets.
            Dramatically target market position idea after high quality best
            practice. Dramatically synergize open source service
          </p>

       
          <div className="flex w-full h-full justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-white">
                {name}
              </h2>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                {position}
              </p>
            </div>

          
            <div className="relative w-32 h-6 transition duration-300 group-hover:invert">
              <Image src="/images/envato.png" alt="" fill sizes="100px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;

