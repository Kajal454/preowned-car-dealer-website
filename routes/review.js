const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
// Define the review schema
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
});


reviewSchema.plugin(plm);
module.exports = mongoose.model('review', reviewSchema);




