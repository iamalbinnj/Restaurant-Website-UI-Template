import { useNavigate } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

function Swipers(props) {
  return (
    <>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSwiper={(swiper) => (props.swiperRef.current = swiper)}
        className="overflow-hidden mt-10 space-x-5"
      >
        {props.data.map((card) => (
          <SwiperSlide key={card.id}>
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function Card({ card: data }) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/productdetails", { state: { product: data } });
  };
  return (
    <>
      <div className="w-72 h-76 bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-72 h-48 object-contain"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-dark truncate">{data.title}</h2>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-semibold text-gray first-letter:text-secondary">
              ${data.price}
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
    </>
  );
}

export default Swipers;
