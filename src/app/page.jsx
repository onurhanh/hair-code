"use client"

import About from "../../components/about";
import Contact from "../../components/contact";
import Directions from "../../components/directions";
import Services from "../../components/services";
import Slider from "../../components/slider";
import Waicon from "../../components/waicon";



export default function Home() {
  return (
    <div>
    <Slider />
    <About />
    <Services />
    <Contact />
    <Directions />
    <Waicon />
    </div>
  );
}
