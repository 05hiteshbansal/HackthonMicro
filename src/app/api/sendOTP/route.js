const mongoose = require("mongoose");
const twilio = require("twilio");
import connectToDatabase from "@/connection/mongoConnect";
import Farmer from "@/models/farmer";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(req) {
  const { phone } = await req.json();
  const OTP = Math.floor(100000 + Math.random() * 900000);

  const mobile = `+91${phone}`;
  const query = { mobile };
  const FarmerFound = await Farmer.findOne(query);

  if (FarmerFound) {
    await Farmer.updateOne(query, { $set: { otp: OTP } }, { new: true });

    await client.messages.create({
      body: `Your OTP is ${OTP}`,
      from: "+18589016481",
      to: mobile,
    });

    return Response.json({
      Success: true,
    });
  } else {
    return Response.json({ Success: false });
  }
}
