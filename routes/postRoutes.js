const express = require("express")
const router = express.Router()
const { addPost, fetchPosts, purchaseAd, fetchSinglePost, getAllPosts, updatePost, postValidator, deletePost, homePosts, postDetails } = require("../controllers/postController")
const auth = require("../middlewares/auth")

router.post("/api/addPost", auth, addPost)
router.get("/api/fetchPosts/:id", auth, fetchPosts)
router.get("/api/fetchPost/:id", fetchSinglePost)
router.get("/api/deletePost/:id", auth, deletePost)
router.post("/api/updatePost", auth, postValidator, updatePost)
router.post("/api/purchaseAd", purchaseAd)
router.get("/api/homePosts/:page", homePosts)
router.get("/api/details/:id", postDetails)
router.get("/api/allposts", getAllPosts)

module.exports = router