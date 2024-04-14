import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/SLW/FinalHeroPC_2x._CB560519186_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean Startup : The Million Copy Bestseller Driving Entrepreneurs to Success
            by RIES ERIC | 1 January 2011"
            price={29.09}
            image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._SY522_.jpg"
            rating={5}
          />

          <Product
            title="boAt Nirvana Ion TWS Earbuds with 120 HRS Playback(24hrs/Charge), Crystal Bionic Sound with Dual EQ Modes, Quad Mics ENx™ Technology, Low Latency(60ms), in Ear Detection(Ivory White)"
            price={15.0}
            image="https://m.media-amazon.com/images/I/618qYyG+HuL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Nothing Phone (2a) 5G (Black, 8GB RAM, 128GB Storage) | Glyph Interface | 45 W Charging 100% in 59 mins"
            price={150}
            image="https://m.media-amazon.com/images/I/41ZMhEBPNFL._SY300_SX300_.jpg"
            rating={5}
          />
          <Product
            title="Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Black"
            price={100}
            image="https://m.media-amazon.com/images/I/51bUaf3xB7L._SY300_SX300_.jpg"
            rating={3}
          />
          <Product
            title="Apple iPad Pro 11″ (4th Generation): with M2 chip, Liquid Retina Display, 256GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Grey"
            price={50}
            image="https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Apple 2024 MacBook Air 15″ Laptop with M3 chip: 38.91 cm (15.3″) Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Midnight"
            price={10}
            image="https://m.media-amazon.com/images/I/41PlpJ2I5bL._SY445_SX342_QL70_FMwebp_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
