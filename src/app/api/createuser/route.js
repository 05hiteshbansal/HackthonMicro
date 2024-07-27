const bcrypt = require("bcrypt");
import connectToDatabase from "@/connection/mongoConnect";
import Farmer from "@/models/farmer";
const saltRounds = 10;

export async function POST(req) {
  const { name, phone, password } = await req.json();
  if (!name || !phone || !password) {
    return Response.json({ Success: false, message: "Missing fields" });
  }
  const mobile = `+91${phone}`;

  const farmerExistsPhone = await Farmer.findOne({ phone });
  if (farmerExistsPhone) {
    return Response.json({
      Success: false,
      message: "Phone number already registered",
    });
  }

  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const farmerSave = new Farmer({
    farmername: name,
    mobile,
    password: encryptedPassword,
  });
  await Farmer.create(farmerSave);
  return Response.json({
    Success: true,
    message: "Farmer registered successfully",
  });
}
