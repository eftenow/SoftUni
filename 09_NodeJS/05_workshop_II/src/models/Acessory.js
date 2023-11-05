import mongoose from "mongoose";

const accessorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlenght: 2
    },
    description:{
        type: String,
        required: true,
        maxlenght: 100
    },
    imageUrl:{
        type: String,
        validate: {
            validator: (url) => url.startsWith('http'),
            message: "Image Url has to start with 'http'"
        }
    }
})

export const Accessory = mongoose.model('Accessory', accessorySchema);