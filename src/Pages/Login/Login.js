import React from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let navigate = useNavigate();
  let { user, googleLogin, emailPasswordLogin, logOut } =
    useContext(AuthContext);
  console.log(user);

  const clickHandler = (event) => {
    event.preventDefault();
    let form = event.target;
    let email = form.email.value;
    let password = form.password.value;
    emailPasswordLogin(email, password).then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      console.log(user);
    });
  };
  const googleLoginHandler = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="login-box">
      <form onSubmit={clickHandler}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input
          type="text"
          className="block login-email-input mb-8"
          name="email"
          placeholder="Email or Username"
          id=""
        />
        <input
          type="password"
          className="block login-password-input mb-8 "
          name="password"
          placeholder="Password"
          id=""
        />
        <div className="flex justify-between mb-8">
          <span className="flex">
            <input
              type="checkbox"
              className="block mr-3 "
              name="Remember Me"
              id=""
            />
            <p>Remember Me</p>
          </span>
          <span>
            {" "}
            <p className="text-warning border-b-warning">Forgot Password</p>
          </span>
        </div>
        <button className="btn btn-warning login-btn mb-4">Login</button>
        <p className="have-account mb-4">
          Don't have any account?
          <Link to="/register" className="text-warning">
            Crate an account
          </Link>
        </p>
        <div className="flex justify-center mb-6">
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

export default Login;
