const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema(
  {
    farmername: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      maxLength: 13,
      minLength: 13,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    otp: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

const Farmer = mongoose.models.Farmer || mongoose.model("Farmer", FarmerSchema);

export default Farmer;
