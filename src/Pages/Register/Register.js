import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { googleLogin, emailPasswordRegistration } = useContext(AuthContext);
  const clickHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let email = form.email.value;
    let password = form.password.value;
    let confirmPassword = form.confirmPassword.value;
    console.log(firstName, lastName, email, password, confirmPassword);
    emailPasswordRegistration(email, password)
      .then((result) => {
        let user = result.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err);
      });
  };
  const googleLoginHandler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login-box">
      <form onSubmit={clickHandler}>
        <h1 className="text-2xl font-bold mb-6">Register</h1>
        <input
          type="text"
          className="block login-email-input mb-4"
          name="firstName"
          placeholder="First Name"
          id=""
          required
        />
        <input
          type="text"
          className="block login-email-input mb-4"
          name="lastName"
          placeholder="Last Name"
          id=""
          required
        />
        <input
          type="text"
          className="block login-email-input mb-4"
          name="email"
          placeholder="Email or Username"
          id=""
          required
        />
        <input
          type="password"
          className="block login-password-input mb-4 "
          name="password"
          placeholder="Password"
          id=""
          required
        />
        <input
          type="password"
          className="block login-password-input mb-4 "
          name="confirmPassword"
          placeholder="Confirm"
          id=""
          required
        />

        <button type="submit" className="btn btn-warning login-btn mb-2">
          Register
        </button>
        <p className="have-account mb-2">
          Already have account?
          <Link to="/login" className="text-warning">
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
          <span
            onClick={googleLoginHandler}
            className="login-facebook flex hover:bg-warning hover:cursor-pointer"
          >
            <FaFacebook className="mt-1 mr-2" /> <p>Continue With Google</p>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
