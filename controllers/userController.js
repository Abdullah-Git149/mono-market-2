const { body, validationResult } = require("express-validator");
const { User } = require("../models/User");
const Post = require("../models/Post")
const bcrypt = require("bcrypt");

const registerValidator = [
  body("user_fullname")
    .not()
    .isEmpty()
    .withMessage("User full name is required"),
  //   body("user_country").not().isEmpty().withMessage("Country is required"),
  //   body("user_currency").not().isEmpty().withMessage("Currency is required"),
  body("user_email").not().isEmpty().withMessage("Email is required"),
  body("user_contact").not().isEmpty().withMessage("Contact is required"),
  // body("user_email").not().isEmpty().withMessage("Email is required"),
  // body("user_type").not().isEmpty().withMessage("User type is required"),
  body("username").not().isEmpty().withMessage("User name is required"),
  body("user_password")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be 6 charcters long"),
];

// USER SIGN UP API
const signUpp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  try {

    const check = await User.findOne({
      username: req.body.username,
      email: req.body.email,
    });
    if (check) {
      return res
        .status(400)
        .json({ status: 0, errors: [{ msg: "Use another Email or Username" }] });
    } else {
      const user = await User.create(req.body);
      const token = await user.genarateAuthToken();
      const newUser = await user.save();
      if (newUser) {
        return res.status(201).json({
          status: 1,
          msg: "account has be created",
          data: newUser,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

const loginValidator = [
  body("username").not().isEmpty().withMessage("User name is required"),
  body("user_password").not().isEmpty().withMessage("Password is required"),
];

// USER SIGN IN API
const signInn = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  console.log(req.body)
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res
        .status(404)
        .json({ status: 0, errors: [{ msg: "Invalid username" }] });
    } else {
      const isMatch = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );
      if (!isMatch) {
        return res
          .status(400)
          .json({ status: 0, errors: [{ msg: "Incorrect Password" }] });
      } else {
        const token = await user.genarateAuthToken();
        return res.status(200).json({
          status: 1,
          message: `${user.user_fullname} is logged in !`,
          data: user,
          token
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

// const signInn = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).send({ errors: errors.array() });
//   }
//   console.log(req.body);
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     if (user) {
//       const isMatch = await bcrypt.compare(
//         req.body.user_password,
//         user.user_password
//       );
//       if (isMatch) {
//         const token = await user.genarateAuthToken();
//         return res
//           .status(200)
//           .json({ status: 1, msg: "Successfull login", token });
//       } else {
//         return res
//           .status(404)
//           .json({ status: 0, errors: [{ msg: "Invalid password" }] });
//       }
//     } else {
//       return res.status(404).json({ errors: [{ msg: "User not found" }] });
//     }
//   } catch (error) {
//     return res.status(400).json({ error: errors });
//   }
// };

// const signInn = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).send({ errors: errors.array() });
//   }
//   console.log(req.body);
//   try {
//     const { username, user_password } = req.body;
//     User.find({ username: username }, (err, user) => {
//       if (user) {
//         if (user_password === user.user_password) {
//           res.send({ message: "Login", user: user });
//         } else {
//           res.send({ message: "password incorrect" });
//         }
//       } else {
//         res.send({ message: "user not found" });
//       }
//     });
//   } catch (error) {
//     return res.status(500).json({ errors: error });
//   }
// };

const buyPost = async (req, res) => {
  try {

    const post = await Post.findById(req.body.postId)
    const user = await User.findByIdAndUpdate(req.params.id, { $push: { buy_posts: post._id } }, {
      new: true
    })
    // user.buy_posts = post._id

    const newUser = await user.save()

    return res.status(200).json({ newUser })
  } catch (error) {
    return res.status(500).json({ errors: error });

  }
}

module.exports = { signUpp, registerValidator, signInn, loginValidator, buyPost };
