"use client";
import React, { useState } from "react";
import "../assets/CSS/Footer.css";
import axios from "axios";

export default function Footer(props) {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    axios;
  }
  return (
    <div
      className="footer d-flex justify-content-around"
      style={{ backgroundColor: props.color }}
    >
      <div className="">
        <h2>Get daily information</h2>
        <p>What are you waiting for? Subscribe now!</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email address"
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  );
}
