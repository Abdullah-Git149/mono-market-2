const Post = require("../models/Post")

const addPost = (req, res) => {
    try {
        res.status(200).send("working")
    } catch (error) {
        return res.status(404).json({ error })
    }
}
module.exports = { addPost }