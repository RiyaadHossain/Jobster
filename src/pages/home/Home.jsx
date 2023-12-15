import React from "react";
import Banner from "./components/Banner";
import FeaturedJob from "./components/FeaturedJob";
import Category from "./components/Category";
import Testimonial from "./components/Testimonial";
import FeaturedCompany from "./components/FeaturedCompany";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <FeaturedJob />
      <Category />
      <FeaturedCompany />
      <Testimonial />
    </div>
  );
};

export default Home;
