import Banner from "@/components/banner/Banner";
import BlogArticale from "@/components/homepage/BlogArticale";
import FeaturedPet from "@/components/homepage/FeaturedPet";
import HelpingAnimals from "@/components/homepage/HelpingAnimals";
import PetCareTips from "@/components/homepage/PetCareTips";
import SuccessStories from "@/components/homepage/SuccessStories";
import WhyAdoptPet from "@/components/homepage/WhyAdoptPet";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPet></FeaturedPet>
      <WhyAdoptPet></WhyAdoptPet>
      <SuccessStories></SuccessStories>
      
      <HelpingAnimals></HelpingAnimals>
      <PetCareTips></PetCareTips>
      <BlogArticale></BlogArticale>
    </div>
  );
}
