const mongoose = require("mongoose")
const {Schema} = mongoose;

const photoSchema = new Schema({
    photo:{
        type: String,
        // required: true
    },
    desc: {
        type: String,
        trim: true
    },
    cloudinary_id: {
        type: String,
        trim: true
    },

},
{
    timestamps: true 
}
)

const Photo = mongoose.model("Photo", photoSchema)
module.exports = Photo