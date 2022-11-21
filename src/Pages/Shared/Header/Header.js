import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SiFalcon } from "react-icons/si";
import { AuthContext } from "../../../ContextProvider/ContextProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const logsOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="flex justify-content-between container mx-auto">
      <div>
        <SiFalcon className="logoIcon inline" width="200px" />
        <input
          className="inline search-box text-white"
          type="text"
          name="search"
          placeholder={`Search Your Destination ${user?.displayName || ""}`}
          id=""
        />
      </div>
      <div className="mt-5 ml-28">
        <Link className="text-white mr-10" to="/home">
          Home
        </Link>
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
        {user?.displayName ? (
          <Link className="text-white mr-10" to="/login">
            <button onClick={logsOut} className="btn btn-warning">
              Logout
            </button>
          </Link>
        ) : (
          <Link className="text-white mr-10" to="/login">
            <button className="btn btn-warning">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
