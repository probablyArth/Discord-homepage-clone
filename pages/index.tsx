import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Sections from "../components/Sections";

export const reveal = () => {
  var reveals = document.querySelectorAll(".scroll");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", reveal);
}

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="BGIMG">
          <NavBar />
          <Hero />
        </div>
        <Sections />
      </div>
    </>
  );
};

export default Home;
