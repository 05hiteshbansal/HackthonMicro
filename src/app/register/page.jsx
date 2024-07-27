"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import "@/assets/CSS/Login.css";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const [passShow, setPassShow] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, phone, password } = credentials;
    if (!name || !phone || !password) {
      toast.error("Please fill in the form completely");
    } else {
      axios
        .post("/api/createuser", {
          name,
          phone,
          password,
        })

        .then((result) => {
          console.log(result.data);
          if (result.data.Success === true) {
            toast.success("Successfully registered");
            router.push("/login");
          } else {
            toast.error(result.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setCredentials({
        name: "",
        phone: "",
        password: "",
      });
    }
  }

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#ffdfba" }}
    >
      <div className="form-container bg-white p-5 rounded">
        <h1 className="text-center">Join Kissan Innovate</h1>
        <p className="text-center">Sign up to start your anonymous adventure</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 name-available-container">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="name"
              onChange={onChange}
              value={credentials.name}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={credentials.phone}
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type={!passShow ? "password" : "text"}
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="off"
              required
            />
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already a member?{" "}
          <span
            className="text-black"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
