import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_live_51PAF0GSFC7idKG0xOUoWFr7rmaOhT1FX0WwybZKGPXLXHMCzY7mwsIbqrPnj4Mc6qyvg22nC6PLQK9fXGqeyUGOA00T3R8ZLLc"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>  ", authUser);
      if (authUser) {
        //the user just logged in/  the user was just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Routes container */}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <>
                <Header /> {/* Header visible only on the Checkout page */}
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header /> {/* Header visible only on the Checkout page */}
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header /> {/* Header visible only on the Home page */}
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
