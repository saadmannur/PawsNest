import Banner from "@/components/banner/Banner";
import FeaturedPet from "@/components/homepage/FeaturedPet";
import SuccessStories from "@/components/homepage/SuccessStories";
import WhyAdoptPet from "@/components/homepage/WhyAdoptPet";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPet></FeaturedPet>
      <WhyAdoptPet></WhyAdoptPet>
      <SuccessStories></SuccessStories>
    </div>
  );
}
