"use client"

import Image from "next/image";

function Testimonials() {
  return (
    <div className="container max-w-screen-2x1 mx-auto xl:px-24 my-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="relative flex justify-center items-center">
            <div className="w-[400px] h-[300px] bg-primary rounded-t-[155px] rounded-b-[41px] absolute mt-90 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
              <Image
                src="/hero-2.png"
                width={260}
                height={300}
                className="relative top-[-109px] left-15"
                alt="Customer testimonial"
                priority
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="small-heading">Testimonials</p>
            <h2 className="main-heading md:w-[500px]">
              What Our Customers Say About Us
            </h2>
            <p className="my-5 text-description leading-[30px]">
              “I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable.”
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex -space-x-6 rtl:space-x-reverse">
                <Image src="/hero-3.png" width={70} height={70} alt="Customer 1" />
                <Image src="/hero-4.png" width={70} height={70} alt="Customer 2" />
                <Image src="/hero-5.png" width={70} height={70} alt="Customer 3" />
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <g clipPath="url(#clip0_1_69)">
                      <path
                        fill="#FFE605"
                        d="m1.327 12.4 3.56 2.6-1.352 4.187A3.18 3.18 0 0 0 4.719 22.8a3.18 3.18 0 0 0 3.8-.019l3.48-2.562 3.483 2.56a3.227 3.227 0 0 0 4.983-3.592L19.113 15l3.56-2.6a3.226 3.226 0 0 0-1.9-5.832H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.23a3.227 3.227 0 0 0-1.9 5.832z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_69">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-medium text-[#454545]">
                    4.9 <small className="text-[#807E7E]">(18.6k Reviews)</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
