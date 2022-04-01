const express = require("express")
const router = express.Router()
const { upload } = require("../config/utils")
const {
  signIn,
  loginVlidation,
  userList,
  getDashboardData,
} = require("../controllers/admin/adminController");

const {
  signUpp,
  registerValidator,
  signInn,
  loginValidator,
  buyPost
} = require("../controllers/userController");

router.post("/api/signUpp", upload.single("user_images"), registerValidator, signUpp);
router.post("/api/signInn", loginValidator, signInn);
router.post("/api/buyAD", buyPost);



// ADMIN APIS
router.post("/api/signIn", loginVlidation, signIn);
//router.post("/api/signUpp",registerValidator, signUpp);
//router.post('/api/signIn', signIn);

router.get("/api/userList/:user_id?", userList);
router.get("/api/dashboard", getDashboardData);


module.exports = router