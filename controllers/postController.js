const Post = require("../models/Post")
const formadible = require("formidable")
const { body, validationResult } = require("express-validator")
const addPost = (req, res) => {
    try {
        const form = formadible({ multiples: true })
        form.parse(req, async (error, fields, files) => {
            const { _id, user_fullname, amount, calcValue, ratio, post_currency } = fields
            const errors = []
            if (amount === '') {
                errors.push({ msg: "amount is required" })
            }
            if (calcValue === '') {
                errors.push({ msg: "calcValue is required" })
            }
            if (ratio === '') {
                errors.push({ msg: "ratio is required" })
            }
            if (post_currency === '') {
                errors.push({ msg: "post_currency is required" })
            }
            if (errors.length !== 0) {
                res.status(400).json({ errors })
            } else {
                const post = await Post.create({
                    amount: amount,
                    calcValue: calcValue,
                    ratio: ratio,
                    post_currency: post_currency,
                    user_fullname: user_fullname,
                    userId: _id

                })
                await post.save()
                return res.status(201).json({ msg: "You post is created", post })
            }
        })

    } catch (error) {
        return res.status(404).json({ errors: error, msg: error.message })
    }
}


const fetchPosts = async (req, res) => {
    const id = req.params.id
    try {
        const response = await Post.find({ userId: id })
        return res.status(200).json({ response: response })
    } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message })
    }
}
const fetchSinglePost = async (req, res) => {
    const id = req.params.id
    try {
        const post = await Post.findOne({ _id: id })
        return res.status(200).json({ status: 1, post })
    } catch (error) {
        return res.status(500).json({ errors: error, msg: error.message })

    }
}


const postValidator = [
    body("amount").not().isEmpty().withMessage("Amount is required"),
    body("post_currency").not().isEmpty().withMessage("Currency is required"),
];
const updatePost = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() })
    } else {
        try {
            const response = await Post.findByIdAndUpdate(req.body.id, {
                amount: req.body.amount,
                post_currency: req.body.post_currency,
                // ratio: req.body.ratio,
                // calcValue: req.body.calcValue
            })
            return res.status(200).json({ msg: "You post has been updated", response })
            console.log(req.body)
        } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message })

        }
    }

    // res.send("hello")

}
module.exports = { addPost, fetchPosts, fetchSinglePost, updatePost, postValidator }