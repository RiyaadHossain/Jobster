import React from "react";
import Banner from "./Banner";
import FeaturedJob from "./FeaturedJob";
import Category from "./Category";
import Testimonial from "./Testimonial";
import FeaturedCompany from "./FeaturedCompany";

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
