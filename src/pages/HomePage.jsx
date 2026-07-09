import IntroReveal from "../components/IntroReveal";
import Hero from "../components/Hero";
import FeaturedOn from "../components/FeaturedOn";
import HomeRaised from "../components/HomeRaised";
import AvailablePreview from "../components/AvailablePreview";
import OurDogsPreview from "../components/OurDogsPreview";
import FamilyMatch from "../components/FamilyMatch";
import HomeFinalCTA from "../components/HomeFinalCTA";

function HomePage() {
  return (
    <div>
      <IntroReveal />
      <Hero />
      <FeaturedOn />
      <HomeRaised />
      <AvailablePreview />
      <OurDogsPreview />
      <FamilyMatch />
      <HomeFinalCTA />
    </div>
  );
}

export default HomePage;
