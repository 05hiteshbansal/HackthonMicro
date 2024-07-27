"use client";
import React from "react";
import { Button } from "react-bootstrap";
import CustomNavbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import "../../assets/CSS/AboutSection.css";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function page() {
  return (
    <>
      <CustomNavbar />

      <div className="about-section d-flex justify-content-around">
        <div className="ps-5 pe-5">
          <h2 style={{ fontWeight: "bold" }}>ABOUT US</h2>
          <p className="p-2">
            Welcome to{" "}
            <span style={{ fontWeight: "bold" }}>Kissan Innovate</span>, where
            we empower Indian farmers with a comprehensive digital platform
            designed to revolutionize the agricultural landscape. Our mission is
            to bridge the gap between traditional farming practices and modern
            technological advancements, providing farmers with the tools,
            resources, and knowledge they need to thrive in todays competitive
            market.
          </p>
        </div>
        <div className="ps-5 pe-5 align-self-center" >
          <Image src="/farmer-about-1.jpg" alt="" width={500} height={500} style={{ height: "15vw" }} />
        </div>
      </div>

      <div
        className="about-section d-flex justify-content-around "
        style={{ backgroundColor: "#ffdfba" }}
      >
        <div className="ps-5 pe-5 align-self-center" >
            <Image src="/farmer-about-2.jpg" alt=""  width={300} height={400} style={{ height: "15vw" }}/>
        </div>
        <div className="ps-5 pe-5">
          <h2 style={{ fontWeight: "bold" }}>Our Vision</h2>
          <p className="p-2">
            At <span style={{ fontWeight: "bold" }}>Kissan Innovate</span>, we
            envision a future where farmers have direct access to fair markets,
            advanced tools for crop management, and the latest agricultural
            knowledge. By creating a digital ecosystem, we aim to eliminate the
            barriers that farmers face, such as reliance on middlemen,
            inadequate storage facilities, and limited access to modern farming
            techniques. Our platform is a one-stop solution that addresses these
            challenges, ensuring that farmers can optimize their productivity
            and profitability.
          </p>
        </div>
      </div>

      <div className="about-section d-flex justify-content-around">
        <div className="ps-5 pe-5">
          <h2 style={{ fontWeight: "bold" }}>What We Offer</h2>
          <p className="p-2">
            <span style={{ color: "red", fontWeight: "bold" }}>
              Direct Market Access:
            </span>{" "}
            We provide a platform for farmers to connect directly with buyers,
            ensuring transparency and fair pricing. This eliminates the need for
            intermediaries, allowing farmers to retain a larger share of their
            profits. <br />
            <span style={{ color: "red", fontWeight: "bold" }}>
              Storage Solutions:
            </span>{" "}
            Our platform includes information on nearby storage facilities,
            helping farmers manage their inventory and reduce post-harvest
            losses. With better storage options, farmers can maintain the
            quality of their produce and minimize wastage.
            <br />{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              AI & Machine Learning Tools:
            </span>{" "}
            We integrate cutting-edge AI and machine learning technologies to
            assist farmers in diagnosing crop diseases and making informed
            decisions about seeds, fertilizers, and pesticides. These tools
            enable precision farming, improving crop health and yield.
            <br />
            <span style={{ color: "red", fontWeight: "bold" }}>
              Knowledge Hub:
            </span>{" "}
            Our Knowledge Hub is a rich resource of educational materials,
            offering insights into sustainable farming practices, modern
            techniques, and the latest developments in agriculture. We are
            committed to empowering farmers with the knowledge they need to
            innovate and succeed.
          </p>
        </div>
        <div className="ps-5 pe-5 align-self-center"  >
          <Image src="/farmer-about-4.jpg" alt="" width={500} height={500} style={{ height: "15vw" }} />
        </div>
      </div>

      <div
        className="about-section d-flex align-items-center justify-content-around"
        style={{ backgroundColor: "#ffdfba" }}
      >
        <div className="ps-5 pe-5 align-self-center" >
            <Image src="/farmer-about-3.jpg" alt="" width={500} height={500} style={{ height: "15vw" }}/>
        </div>
        <div className="ps-5 pe-5">
          <h2 style={{ fontWeight: "bold" }}>Our Impact</h2>
          <p className="p-2">
            Since our inception, we have been dedicated to making a positive
            impact on the lives of farmers across India. Through real-life
            success stories and testimonials, we have seen how our platform has
            helped farmers increase their yields, reduce costs, and improve
            their overall livelihoods. We are proud to be a part of their
            journey towards a more prosperous and sustainable future.
          </p>
        </div>
      </div>

      <div className="about-section d-flex justify-content-around">
        <div className="ps-5 pe-5">
          <h2 style={{ fontWeight: "bold" }}>JOIN US</h2>
          <p className="p-2">
            We invite you to join us in our mission to transform the
            agricultural sector. Whether you are a farmer looking to enhance
            your farming practices, a buyer seeking quality produce, or an
            advocate for sustainable agriculture,{" "}
            <span style={{ fontWeight: "bold" }}>Kissan Innovate</span> has
            something for you. Together, we can create a thriving agricultural
            community that benefits everyone involved. Thank you for being a
            part of our story. Lets grow together!
          </p>
        </div>
        <div className="ps-5 pe-5 align-self-center" >
            <Image src="/farmer-about-5.jpg" alt="" width={500} height={500} style={{ height: "15vw" }} />
        </div>
      </div>

      <Footer color="#ffdfba" />
    </>
  );
}
