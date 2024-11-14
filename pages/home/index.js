import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import Carousel from "@/components/ui/Carousel";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
};

export default HomePage;
