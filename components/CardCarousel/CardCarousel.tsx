"use client"

import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ApiCall } from "../ApiCall/ApiCall";
import Swipers from "../Swipers/Swipers";
import { Swiper as SwiperType } from 'swiper';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const CardCarousel: React.FC = () => {
  const { data: apiData, loading, error } = ApiCall<Product[]>("https://fakestoreapi.com/products");
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="flex justify-between mb-10 md:absolute right-35 top-[1500px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 w-[50px] h-[50px] rounded-full ml-5 cursor-pointer bg-gray flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" fill="currentColor" viewBox="0 0 12 20">
            <path stroke="white" strokeLinecap="round" strokeWidth="4" d="M9.765 2 2 9.765M9.765 18 2 10.236"></path>
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 w-[50px] h-[50px] rounded-full ml-5 cursor-pointer bg-primary flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" fill="currentColor" viewBox="0 0 12 20">
            <path stroke="white" strokeLinecap="round" strokeWidth="4" d="M2 2L9.7645 9.7645M2 18L9.7645 10.2355"></path>
          </svg>
        </button>
      </div>

      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <Swipers data={apiData || []} swiperRef={swiperRef} />}
    </>
  );
};

export default CardCarousel;