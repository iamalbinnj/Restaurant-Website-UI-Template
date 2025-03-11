import Banner from "@/components/pages/Banner";
import Categories from "@/components/pages/Categories";
import Culinary from "@/components/pages/Culinary";
import Dishes from "@/components/pages/Dishes";
import Testimonials from "@/components/pages/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <Dishes />
      <Testimonials />
      <Culinary />
    </>
  );
}
