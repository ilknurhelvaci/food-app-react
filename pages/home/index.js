import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/ui/About";
import Campaigns from "@/components/ui/Campaigns";
import Carousel from "@/components/ui/Carousel";
import Reservation from "@/components/ui/Reservation";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};

export default HomePage;
