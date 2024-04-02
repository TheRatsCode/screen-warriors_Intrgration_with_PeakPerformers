const mongoose = require('mongoose')

//Logan Huber's Code of Suffering :)
//Create Structure schema for House Entry ///Do I need new?
const houseSchema = mongoose.Schema({
    structure_id: { type: Number, min: 1, max: 9999, required: true },
    structure_type: { type: String, default: "house", required: true },
    user_id: { type: Number, min: 1, max: 9999 },
    images: { type: Array, items: {type: String, uniqueItems: true}},
    tags: { type: Array, items: {type: String, uniqueItems: true}},
    files: { type: Array, items: {type: String, uniqueItems: true}}
});

module.exports = mongoose.model("Houses", houseSchema);