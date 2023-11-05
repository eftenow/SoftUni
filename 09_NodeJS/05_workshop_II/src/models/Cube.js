import mongoose from "mongoose";

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    description: {
        type: String,
        maxlength: 120
    },

    imageUrl: {
        type: String,
        validate: {
            validator: (url) => url.startsWith('http'),
            message: "Image url has to start with 'http'"
        }
    },

    difficultyLevel: {
        type: Number,
        min: 0,
        max: 6
    },

    accessories: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Accessory' }
    ]

})

export const Cube = mongoose.model('Cube', cubeSchema);