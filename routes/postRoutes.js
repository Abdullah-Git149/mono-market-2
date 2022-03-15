const express = require("express")
const router = express.Router()
const { addPost, fetchPosts, fetchSinglePost, updatePost, postValidator } = require("../controllers/postController")
const auth = require("../middlewares/auth")



router.post("/api/addPost", auth, addPost)
router.get("/api/fetchPosts/:id", auth, fetchPosts)
router.get("/api/fetchPost/:id", fetchSinglePost)
router.post("/api/updatePost", auth, postValidator, updatePost)
module.exports = router