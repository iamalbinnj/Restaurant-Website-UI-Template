import Card from "../Card/Card";

interface CategoryItem {
  id: number;
  title: string;
  count: string;
  img: string;
}

const Categories: React.FC = () => {
  const items: CategoryItem[] = [
    {
      id: 1,
      title: "Main Dish",
      count: "(86 dishes)",
      img: "/popular-food-1.png",
    },
    {
      id: 2,
      title: "Breakfast",
      count: "(12 breakfast)",
      img: "/popular-food-2.png",
    },
    {
      id: 3,
      title: "Dessert",
      count: "(48 desserts)",
      img: "/popular-food-3.png",
    },
    {
      id: 4,
      title: "Browse All",
      count: "(255 Items)",
      img: "/popular-food-4.png",
    },
  ];

  return (
    <div className="container max-w-screen-2x1 mx-auto xl:px-24 py-16">
      <div className="text-center">
        <p className="small-heading">Customer Favorites</p>
        <h2 className="main-heading">Popular Categories</h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-around items-center mt-12">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            cardClass="rounded-[40px] bg-white py-6 px-5 w-55 max-auto text-center cursor-pointer shadow-lg hover:-translate-y-4 duration-300 transition-all"
            cardAlign="flex w-full mx-auto items-center justify-center"
            imgClass="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
            contentClass="mt-5 space-y-1"
            h2Class="font-semibold"
            pClass=""
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
