var mongoose = require('mongoose');
// Setup schema
var imageSchema = mongoose.Schema({

    _id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    }
});
// Export Image model
var Image = module.exports = mongoose.model('images', imageSchema);
module.exports.get = function (callback, limit) {
    Image.find(callback).limit(limit);
}