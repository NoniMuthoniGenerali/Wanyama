import React from "react";
import Amphibian_pic from "../Assets/amphibian.jpeg";
import Bird_pic from "../Assets/bird.jpg";
import Fish_pic from "../Assets/fish.jpeg";
import Mammal_pic from "../Assets/mammal.avif";
import komodo_pic from "../Assets/komodo.jpg";
import "../home.css";

function Animals() {
  return (
    <div>
      <div className="overview">
        <div className="card">
          <img src={Amphibian_pic} alt="" />
          <div className="container">
            <h4>Amphibians</h4>
            <a href="">learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={Bird_pic} alt="" />
          <div className="container">
            <h4>Birds</h4>
            <a href="">learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={Fish_pic} alt="" />
          <div className="container">
            <h4>Fish</h4>
            <a href="">learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={Mammal_pic} alt="" />
          <div className="container">
            <h4>Mammals</h4>
            <a href="">learn more</a>
          </div>
        </div>
        <div className="card">
          <img src={komodo_pic} alt="" />
          <div class="container">
            <h4>
              <b>Reptiles</b>
            </h4>
            <a href="https://kids.nationalgeographic.com/animals/reptiles">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animals;
