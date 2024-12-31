import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../images/twitter.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { useUserauth } from "../../context/Userauthcontext";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { googlesignin, login } = useUserauth();
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(email, password)
      navigate("/")
    } catch (error) {
      seterror(error.message);
      window.alert(error.message);
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    try {
      await googlesignin();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="image-container">
          <img
            className="image"
            src={twitterimg}
            alt="twitterimg"
            width={600}
          />
        </div>

        <div className="form-container">
          <div className="form-content">
            <TwitterIcon className="Twittericon" />
            <h2 className="heading">Happening now</h2>
            <h3 className="heading1">Join twitter today</h3>
            {error && <p className="errorMessage">{error}</p>}
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                className="input-field"
                type="email"
                placeholder="Email Address"
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className="btn-login">
                {" "}
                <button type="submit" className="btn">
                  Sign Up
                </button>
              </div>
            </form>
            <hr />
            <div className="google-button">
              <GoogleButton
                className="g-btn"
                type="light"
                onClick={handleGoogleSignin}
              />
            </div>
            <div className="login-link">
              Don't have an account?
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "var(--twitter-color)",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
