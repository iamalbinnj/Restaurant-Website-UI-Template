import { useEffect, useState,useRef } from "react";

import { ApiCall } from "../ApiCall/ApiCall";
import Swiper from "../Swiper/Swipers";

function CardCarousel() {
  const { data: apiData, loading, error } = ApiCall("/api");
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      // Retrieve data from localStorage
      const localStorageData = JSON.parse(localStorage.getItem("products")) || [];

      // Merge API data and localStorage data
      const combinedData = [...apiData, ...localStorageData];

      // Update state with the merged data
      setMergedData(combinedData);
    }
  }, [apiData, loading, error]);

  const swiperRef = useRef(null);
  return (
    <>
      <div className="flex justify-between mb-10 md:mr-24 md:absolute right-3 top-8 m">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 w-[50px] h-[50px] rounded-full ml-5 cursor-pointer bg-gray flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            className=""
            fill="currentColor"
            viewBox="0 0 12 20"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeWidth="4"
              d="M9.765 2 2 9.765M9.765 18 2 10.236"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 w-[50px] h-[50px] rounded-full ml-5 cursor-pointer bg-primary flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="20"
            fill="currentColor"
            viewBox="0 0 12 20"
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeWidth="4"
              d="M2 2L9.7645 9.7645M2 18L9.7645 10.2355"
            ></path>
          </svg>
        </button>
      </div>
      {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <Swiper data={mergedData} swiperRef={swiperRef} />}
    </>
  );
}


export default CardCarousel;
