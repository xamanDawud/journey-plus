import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="login-box">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <input
        type="text"
        className="block login-email-input mb-4"
        name="email"
        placeholder="First Name"
        id=""
      />
      <input
        type="text"
        className="block login-email-input mb-4"
        name="email"
        placeholder="Last Name"
        id=""
      />
      <input
        type="text"
        className="block login-email-input mb-4"
        name="email"
        placeholder="Email or Username"
        id=""
      />
      <input
        type="password"
        className="block login-password-input mb-4 "
        name="password"
        placeholder="Password"
        id=""
      />
      <input
        type="password"
        className="block login-password-input mb-4 "
        name="password"
        placeholder="Confirm"
        id=""
      />

      <button className="btn btn-warning login-btn mb-2">Register</button>
      <p className="have-account mb-2">
        Already have account?
        <Link to="/register" className="text-warning">
          Please login
        </Link>
      </p>
      <div className="flex justify-center mb-2">
        <span className="line-one">
          <hr />
        </span>
        <p className="mr-2 ml-2">or</p>
        <span className="line-two">
          <hr />
        </span>
      </div>
      <div className="social-media-logging">
        <span className="login-google flex hover:bg-warning hover:cursor-pointer">
          <FaGoogle className="mt-1 mr-2" />
          <p>Continue With Facebook</p>
        </span>
        <span className="login-facebook flex hover:bg-warning hover:cursor-pointer">
          <FaFacebook className="mt-1 mr-2" /> <p>Continue With Google</p>
        </span>
      </div>
    </div>
  );
};

export default Register;
