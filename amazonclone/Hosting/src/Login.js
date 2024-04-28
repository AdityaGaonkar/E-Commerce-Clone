import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import this method
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Ensure this import points to your Firebase config

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // Use signInWithEmailAndPassword with the auth instance
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Handle sign-in success
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        // Handle errors
      });
  };
  const register = (e) => {
    e.preventDefault();
    // Use createUserWithEmailAndPassword with the auth instance
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Handle registration success
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
        // Handle errors
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in, you agree to Amazon's Conditions of Use and Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
