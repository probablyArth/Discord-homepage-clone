import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Footer from "../components/Footer";
import Head from "next/head";

const reveal = () => {
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
      <Head>
        <title>Discord</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="BGIMG">
        <NavBar />
        <Hero />
      </div>
      <Sections />
      <Footer />
    </>
  );
};

export default Home;
