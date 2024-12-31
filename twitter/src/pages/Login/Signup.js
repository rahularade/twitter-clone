import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../images/twitter.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import { useUserauth } from "../../context/Userauthcontext";
import "./login.css";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");
  const { signin } = useUserauth();
  const { googlesignin } = useUserauth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signin(email, password);
      const user = {
        username: username,
        name: name,
        email: email,
      };
      
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            console.log(data);
            navigate("/");
          }
        });
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
                type="username"
                placeholder="@username"
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                className="input-field"
                type="username"
                placeholder="Enter Full Name"
                onChange={(e) => setname(e.target.value)}
              />
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
              Already have an account?
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "var(--twitter-color)",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
