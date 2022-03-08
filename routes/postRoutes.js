const express = require("express")
const router  = express.Router()
const {addPost} = require("../controllers/postController")

router.post("/api/addPost",addPost)

module.exports = router