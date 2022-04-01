const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    user_fullname: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    user_country: {
      type: String,
      required: false,
      enum: ["pakistan", "america", "canada", "england","nigeria","mexico"],
      default: "nigeria",
    },
    user_currency: {
      type: String,
      required: false,
      enum: ["ruppee", "dollar", "pound", "euro","naira","mexican peso"],
      default: "naira",
    },
    user_email: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    user_contact: {
      type: String,
      required: false,
      trim: true,
      default: null,
    },
    is_blocked: {
      type: Number,
      default: 0,
      trim: true,
    },
    user_authentication: {
      type: String,
      required: false,
      default: null,
    },
    user_images: {
      type: String,
      default: null,
      trim: true,
    },
    user_type: {
      type: String,
      enum: ["buyer", "seller", "brocker", ""],
      default: "",
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    user_password: {
      type: String,
      required: true,
      trim: true,
    },
    buy_posts: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: 3,
    },
    email: {
      type: String,
      require: true,
    },
    user_image: {
      type: String,
      required: false,
      default: null,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      require: false,
      default: false,
    },
    is_blocked: {
      type: Number,
      default: 0,
      trim: true,
    },
  },
  { timestamps: true }
);

// HERE GENERATE THE TOKEN
userSchema.methods.genarateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign({user }, process.env.jwt);
  user.user_authentication = token;
  await user.save();
  return token;
};

// HERE HASHING THE PASSWORD
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("user_password")) {
    user.user_password = await bcrypt.hash(user.user_password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = {User,Admin};
