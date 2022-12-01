const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String,
    category: String,
    created:{
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Post", postSchema);