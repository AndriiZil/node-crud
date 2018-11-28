const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    imageSrc: {type: String, default: ''}
    // age: {type: Number, required: true},
    // position: {type: String, required: true},
    // experiense: {type: Number, required: true},
    // salary: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);