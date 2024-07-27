"use server";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import connectToDatabase from "@/connection/mongoConnect";
import Farmer from "@/models/farmer";
const saltRounds = 10;

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

export async function POST(req, res) {
  const { phone, password } = await req.json();
  if (!phone || !password) {
    return Response.json({ Success: false, msg: "Missing fields" });
  }
  const mobile = `+91${phone}`;
  const findQuery = { mobile };
  const farmerFind = await Farmer.findOne(findQuery);
  if (farmerFind) {
    var checkEncryptedPassword = await bcrypt.compare(
      password,
      farmerFind.password
    );

    if (checkEncryptedPassword == true) {
      const authToken = generateAuthToken(farmerFind);
      return Response.json({
        Success: true,
        AuthToken: authToken,
        msg: "Successfully Logged In",
      });
    } else {
      return Response.json({ Success: false, msg: "Wrong Password" });
    }
  } else {
    return Response.json({ Success: false, msg: "Please Register First" });
  }
}
