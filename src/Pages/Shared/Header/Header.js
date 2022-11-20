import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiFalcon } from "react-icons/si";

const Header = () => {
  return (
    <nav className="flex justify-content-between container mx-auto">
      <div>
        <SiFalcon className="logoIcon inline" width="200px" />
        <input
          className="inline search-box text-white"
          type="text"
          name="search"
          placeholder="Search Your Destination"
          id=""
        />
      </div>
      <div className="mt-5 ml-28">
        <Link className="text-white mr-10" to="/news">
          News
        </Link>
        <Link className="text-white mr-10" to="/destination">
          Destination
        </Link>
        <Link className="text-white mr-10" to="/blog">
          Blog
        </Link>
        <Link className="text-white mr-10" to="/contact">
          Contact
        </Link>
        <Link className="text-white mr-10" to="/login">
          <button className="btn btn-warning">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
