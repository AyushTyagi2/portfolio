
import PortfolioSection from "./home/footer"; // Assuming "footer" is where your PortfolioSection is
import HeroSection from "./home/front";
import ProjectsSection from "./home/mid";
import Navbar from "./home/navbar";
import Topsection from "./home/test";
import ContactSection from "./home/contactus";
import HomePage from "./home/bell";
import ExperienceTabs from "./home/experience";
const Home = () => {  // Capitalize component names (Home, not home)
  return (
    <div> {/* A wrapping div is usually a good idea */}
    <Navbar/>
    <Topsection/>
    
    <HeroSection/>
    <ProjectsSection/>
      <PortfolioSection /> {/* Use it as a JSX element */}
      {/* You don't need to repeat it here */}
      <ExperienceTabs/>
<ContactSection/>
<HomePage/>
    </div>
  );
};

export default Home; // Make sure to export the component