"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "@/assets/CSS/Login.css";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const [loginCredentials, setLoginCredentials] = useState({
    phone: "",
    password: "",
  });

  async function handlePasswordSubmit(event) {
    event.preventDefault();
    const { phone, password } = loginCredentials;
    if (!phone || !password) {
      toast.error("Please fill in the form completely");
    } else {
      axios.post("/api/signin", { phone, password }).then((result) => {
        if (result.data.Success === true) {
          localStorage.setItem(
            "AuthToken",
            JSON.stringify(result.data.AuthToken)
          );
          toast.success(result.data.msg);
          router.push("/");
        } else {
          toast.error(result.data.msg);
        }
      });

      setLoginCredentials({
        phone: "",
        password: "",
      });
    }
  }

  function onChange(event) {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#ffdfba" }}
    >
      <div className="form-container bg-white p-5 rounded">
        <h1 className="text-center">Welcome Back to Kissan Innovate</h1>
        <p className="text-center">Innovations are waiting</p>
        <form onSubmit={handlePasswordSubmit}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={loginCredentials.phone}
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
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={loginCredentials.password}
              onChange={onChange}
              autoComplete="off"
              required
            />
            <small
              className="linkForgotPassword text-center justify-content-center text-black mb-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                router.push("/loginOTP");
              }}
            >
              Forgot Password
            </small>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Log In
          </button>
        </form>
        <p className="text-center mt-3">
          Not Registered?{" "}
          <span
            className="text-black"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
