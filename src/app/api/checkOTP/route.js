"use server";
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

import connectToDatabase from "@/connection/mongoConnect";
import Farmer from "@/models/farmer";

function generateAuthToken(newuser) {
  try {
    const token = jwt.sign(
      {
        _id: newuser._id,
        name: newuser.farmername,
        phone: newuser.mobile,
      },
      process.env.HASH_KEY
    );
    return token;
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req) {
  const { phone, otp } = await req.json();
  const mobile = `+91${phone}`;
  const query = { mobile };
  const farmerFound = await Farmer.findOne(query);

  if (farmerFound) {
    if (farmerFound.otp === Number(otp)) {
      const authToken = generateAuthToken(farmerFound);
      return Response.json({
        Success: true,
        AuthToken: authToken,
        message: "OTP Verified",
      });
    } else {
      return Response.json({
        Success: false,
        message: "Incorrect OTP",
      });
    }
  } else {
    return Response.json({ Success: false, message: "No such user" });
  }
}
