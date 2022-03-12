const express = require("express")
const router = express.Router()
const { addPost, fetchPosts } = require("../controllers/postController")
const auth = require("../middlewares/auth")



router.post("/api/addPost", auth, addPost)
router.get("/api/fetchPosts/:id", auth, fetchPosts)

module.exports = router