"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";
import { Swiper as SwiperType } from 'swiper';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface SwipersProps {
  data: Product[];
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const Swipers: React.FC<SwipersProps> = ({ data, swiperRef }) => {
  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="overflow-hidden mt-10 space-x-5"
    >
      {data.map((card) => (
        <SwiperSlide key={card.id}>
          <Card card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface CardProps {
  card: Product;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(`/productdetails?product=${encodeURIComponent(JSON.stringify(card))}`);
  };

  return (
    <div className="w-72 h-76 bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src={card.image}
        alt={card.title}
        width={288}
        height={192}
        className="w-72 h-48 object-contain"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-dark truncate">{card.title}</h2>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-gray first-letter:text-secondary">
            ${card.price}
          </span>
          <button
            onClick={handleBuyNow}
            className="primary-button px-4 py-2 shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swipers;