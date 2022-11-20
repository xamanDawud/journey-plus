import React from "react";
import "./Home.css";
import Carousel from "better-react-carousel";
import img1 from "../../assests/images/Sajek.png";
import img2 from "../../assests/images/sundorbon.png";
import img3 from "../../assests/images/Sreemongol.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex justify-conte-between">
      <div className="home-left-section mt-40">
        <h1 className="text-5xl font-bold coxs-title mb-4">Cox's bazar</h1>
        <p className="mb-6">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>

        <button className="btn btn-warning">
          Booking <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="home-right-section mt-40 ml-28 relative">
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <Link to="/coxsbazar">
              {" "}
              <button className="text-3xl font-bold coxs-title mb-4 absolute bottom-0 left-8 hover:cursor-pointer">
                Cox's Bazar
              </button>
            </Link>
            <img alt="" width="100%" src={img1} />
          </Carousel.Item>

          <Carousel.Item>
            <Link to="/sundarbans">
              {" "}
              <button className="text-3xl font-bold coxs-title mb-4 absolute bottom-0 left-56 hover:cursor-pointer">
                Sundarban
              </button>
            </Link>
            <img alt="" width="100%" src={img2} />
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/sreemangal">
              {" "}
              <button className="text-3xl font-bold coxs-title mb-4 absolute bottom-0 right-10 hover:cursor-pointer">
                Sreemangal
              </button>
            </Link>
            <img alt="" width="100%" src={img3} />
          </Carousel.Item>
          <Carousel.Item>
            {/* anything you want to show in the grid */}
          </Carousel.Item>
          {/* ... */}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
