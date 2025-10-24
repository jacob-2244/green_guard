



import Link from "next/link";
import Image from "next/image";
type PriceCardInputs = {
  plan: string;
  price: string;
};
export default function PriceCard({ plan, price }:PriceCardInputs) {
  return (
    <div className="bg-white group w-full sm:max-w-lg md:max-w-sm  rounded-lg flex flex-col gap-8 py-8 relative overflow-hidden">
      {/* Animated black overlay */}
      <div className="absolute inset-0 h-0 w-full bg-black text-white transition-all duration-500 ease-out group-hover:h-full z-0"></div>

      {/* Content wrapper with z-10 so it's visible */}
      <div className="relative z-10 flex flex-col gap-8">
        <div className="rounded-r-full bg-[#F5F8ED] px-6 py-3 w-fit">
          <p className="text-app_primary font-medium text-lg">
            {plan} <span>Plans</span>
          </p>
        </div>

        <h2 className="text-2xl font-bold px-6">
          ${price} <span className="text-base font-normal">Month</span>
        </h2>

        <p className="text-gray-500 leading-relaxed px-6">
          Fast project turnaround time, substantial cost savings & quality
          standards.
        </p>

        <div className="flex flex-col gap-3 w-full px-6 group-hover:text-white">
          {[
            "Repair & Replacement",
            "Repair & Replacement",
            "Real Solar PV Systems",
            "Just-In-Time Manufacturing",
          ].map((feature, i) => (
            <p key={i} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-app_primary"></span>
              {feature}
            </p>
          ))}
        </div>

        <Link
          href="#"
          className="mx-auto relative z-10 w-fit overflow-hidden rounded-full bg-app_primary px-6 py-3 text-white transition-colors duration-500 group"
        >
          <span className="absolute inset-0 z-0 scale-x-0 origin-left transform bg-black  rounded-full border border-app_primary transition-transform duration-500 group-hover:scale-x-100"></span>
          <div className="relative z-10 flex items-center justify-center gap-2">
            <span className="text-xl">Choose Plan</span>
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

        <div className="absolute right-6 top-6 w-20 h-20 rounded-full z-10 ">
          <Image
            src="/images/pricing-shape-1.png"
            alt=""
            fill
            className="animate-pulse"
          />
        </div>

        <div className="absolute right-16 bottom-16 w-20 h-28 animate-zoom-pulse z-10">
          <Image src="/images/price-bulb.png" alt="" fill />
        </div>
      </div>
    </div>
  );
}


