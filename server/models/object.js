const mongoose = require('mongoose')

res.send({data : weee});

//Logan Huber's Code of Suffering :)
//Create Structure schema for House Entry
const houseSchema = mongoose.Schema({
    structure_id: { type: Number, min: 1, max: 9999, required: true },
    structure_type: { type: String, default: "house", required: true },
    user_id: { type: Number, min: 1, max: 9999 },
    images: { type: Array, items: {type: String, uniqueItems: true}},
    tags: { type: Array, items: {type: String, uniqueItems: true}},
    files: { type: Array, items: {type: String, uniqueItems: true}}
});
//Create Structure schema for Object ///Do I need new?
const objectSchema = mongoose.Schema({
    structure_id: { type: Number, min: 1, max: 9999, required: true },
    structure_type: { type: String, default: "object", required: true },
    user_id: { type: Number, min: 1, max: 9999 },
    images: { type: Array, items: {type: String, uniqueItems: true}},
    tags: { type: Array, items: {type: String, uniqueItems: true}},
    files: { type: Array, items: {type: String, uniqueItems: true}}
});
