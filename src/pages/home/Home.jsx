import React from "react";
import Banner from "./Banner";
import FeaturedJob from "./FeaturedJob";
import Category from "./Category";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="max_container">
      <Banner />
      <FeaturedJob />
      <Category />
      <Testimonial />
    </div>
  );
};

export default Home;
