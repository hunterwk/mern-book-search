const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema()

const bookSchema = new Schema({
    title: {type: string, required: true},
    authors:{type: string, required: true},
    description:{type: string, required: true},
    image:{type: string, required: true},
    link:{type: string, required: true}
})

const Book =mongoose.model("book", bookSchema)

module.exports = Book;