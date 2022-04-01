const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        amount: {
            type: Number,
            required: false,
            trim: true,
            default: null,
        },
        calcValue: {
            type: Number,
            required: false,
            default: null,
        },
        // user_country: {
        //   type: String,
        //   required: false,
        //   enum: ["pakistan", "america", "canada", "england","nigeria","mexico"],
        //   default: "nigeria",
        // },
        post_currency: {
            type: String,
            required: false,
            enum: ["ruppee", "dollar", "pound", "euro", "naira", "mexican peso"],
            default: "naira",
        },

        is_blocked: {
            type: Number,
            default: 0,
            trim: true,
        },
        user_fullname: {
            type: String,
            required: false,
            trim: true,
        },
        ratio: {
            type: String,
            required: false,
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
       
    },
    {
        timestamps: true,
    }
)

const purchaseTable = mongoose.Schema({
    status_Ad:{
        type:String,
        require:false,
    },
    post_id:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Post"
    },
    buyer_id:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    }
})
const Post = mongoose.model("Post", postSchema)
const Purchase = mongoose.model("Purchase", purchaseTable)

module.exports = {Post , Purchase}