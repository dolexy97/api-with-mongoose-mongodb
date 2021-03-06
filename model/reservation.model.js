
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  user_id: {
    type: String,
  },
  donor_name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  donor_mobile: {
    type: String,
  },
  weight: {
    type: Number,
  },
  hospital_name: {
    type: String,
  },
  hospital_address: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  state: {
    type: String,
  },
  status: {
    type: String,
    default: "Not Approved",
  },
  reservation_date: {
    type: Date,
  },
},
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("reservation", reservationSchema);

