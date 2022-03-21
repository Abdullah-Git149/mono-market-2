const express = require("express")
const router = express.Router()
const { addPost, fetchPosts, fetchSinglePost, updatePost, postValidator, deletePost, homePosts, postDetails } = require("../controllers/postController")
const auth = require("../middlewares/auth")



router.post("/api/addPost", auth, addPost)
router.get("/api/fetchPosts/:id", auth, fetchPosts)
router.get("/api/fetchPost/:id", fetchSinglePost)
router.get("/api/deletePost/:id", auth, deletePost)
router.post("/api/updatePost", auth, postValidator, updatePost)
router.get("/api/homePosts/:page", homePosts)
router.get("/api/details/:id", postDetails)

module.exports = router