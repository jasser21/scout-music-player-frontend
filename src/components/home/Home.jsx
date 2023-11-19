import React from "react";
import Avatar from "../avatar/Avatar";
import "./home.css";
const Home = () => {
  return (
    <div className="homepage">
      <Avatar />
      <div className="textpart">
        <div className="greating">
          Welcome to <span className="spn">Souccor,</span> <br />
          Listen To Tunisian Scout Chants For Free
        </div>
        <a href="http://localhost:5173/login/">
          <button className="btn" type="button">
            Let&apos;s Do It
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
