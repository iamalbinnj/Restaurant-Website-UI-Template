"use client";

import Image from "next/image";

interface CulinaryItem {
  id: number;
  title: string;
  count: string;
  img: string;
}

const culinaryList: CulinaryItem[] = [
  {
    id: 1,
    title: "Catering",
    count: "Delight your guests with our flavors and presentation",
    img: "/culinary-1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    count: "We deliver your order promptly to your door",
    img: "/culinary-2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    count: "Explore menu & order with ease using our Online Ordering",
    img: "/culinary-3.png",
  },
  {
    id: 4,
    title: "Fast Delivery",
    count: "Delight your guests with our flavors and presentation",
    img: "/culinary-4.png",
  },
];

const Culinary: React.FC = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-24 my-26">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="small-heading">Our Story & Services</p>
            <h2 className="main-heading md:w-[500px]">
              Our Culinary Journey And Services
            </h2>
            <p className="my-5 text-description leading-[30px]">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <button className="primary-button w-[120px] h-[50px] px-8 py-3 font-semibold">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {culinaryList.map((item) => (
              <div
                key={item.id}
                className="shadow-2xl rounded-[45px] py-5 px-4 text-center space-y-2 text-primary"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h5 className="pt-3 font-semibold">{item.title}</h5>
                <p className="text-[#90BD95]">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culinary;
