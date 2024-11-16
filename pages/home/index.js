import Customers from "@/components/customers/Customers";
import Footer from "@/components/layout/Footer";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/ui/About";
import Campaigns from "@/components/ui/Campaigns";
import Carousel from "@/components/ui/Carousel";
import Reservation from "@/components/ui/Reservation";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
