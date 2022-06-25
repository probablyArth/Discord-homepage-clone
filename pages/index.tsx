import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="BGIMG">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
