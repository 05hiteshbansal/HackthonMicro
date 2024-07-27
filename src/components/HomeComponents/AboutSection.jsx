"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import "../../assets/CSS/AboutSection.css";
import Image from "next/image";
export default function AboutSection() {
  const router = useRouter();
  return (
    <div className="about-section d-flex justify-content-around">
      <div className="">
        <h2 style={{ fontWeight: "bold" }}>
          Helping farmers to live
          <br /> better than before !
        </h2>
        <p className="p-2">
          But since 2002, organics goal is to help as many farmers <br />
          as we can to increase their agricultural business and gain more <br />
          profit sharing.
        </p>
        <Button
          onClick={() => router.push("/about")}
          className="rounded-pill ps-5 pe-5"
          variant="warning"
        >
          Read More
        </Button>
      </div>
      <div className="">
        <Image src="/farmer-home.jpg" alt=""  height={500} weight={500} style={{ height: "20vw" }} />
      </div>
    </div>
  );
}
