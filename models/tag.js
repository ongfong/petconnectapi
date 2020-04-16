const mongoose = require('mongoose');
const Pet = require('../models/pet');

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            max: 32
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        houseNumber: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            index: true,
        },
        pin: {
            type: String,
            index: true,
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    { timestamp: true }
);

tagSchema.methods = {
    authenticateIdTag: function(pin){
        return this.pin === pin;
    }
}
module.exports = mongoose.model('Tag', tagSchema);