"use client";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Navbar, Nav } from "react-bootstrap";
import "../assets/CSS/Navbar.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CustomNavbar() {
  const router = useRouter();
  const [decoded, setDecoded] = useState({});
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAuthToken = JSON.parse(localStorage.getItem("AuthToken"));
      if (storedAuthToken) {
        setAuthToken(storedAuthToken);
        const decodedToken = jwt.decode(storedAuthToken);
        setDecoded(decodedToken);
      }
    }
  }, []);

  return (
    <div className="d-flex justify-content-around">
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Navbar.Brand href="/">Kissan Innovate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="align-self-center ps-5" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="align-self-center ps-5" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="align-self-center ps-5" href="/farm">
              Farm
            </Nav.Link>
            <Nav.Link className="align-self-center ps-5" href="/contact">
              Contact
            </Nav.Link>
            {decoded.name !== undefined ? (
              <>
                <Nav.Link
                  className="ps-5 align-self-center d-flex"
                  onClick={() => router.push("/profile")}
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <Image
                    src="/profile-img.jpg"
                    alt="Hello"
                    width={500}
                    height={500}
                    style={{ width: "5vw" }}
                    className="mx-2"
                  />
                  <div
                    className="align-self-center fs-4 font-weight-bold"
                    style={{ color: "black" }}
                  >
                    {decoded.name}
                  </div>
                </Nav.Link>
                <Nav.Link
                  className="ps-5 align-self-center d-flex"
                  onClick={() => {
                    localStorage.removeItem("AuthToken");
                    location.reload();
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  className="ps-5 align-self-center d-flex"
                  href="/login"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  className="ps-5 align-self-center d-flex"
                  href="/register"
                >
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
