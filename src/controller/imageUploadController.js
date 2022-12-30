const images = require("../models/imageSchema")
const asyncHandler = require("express-async-handler")
const path = require("path")
const fs = require("fs")
const cloudinary = require("../utils/cloudinary")


const getPhotos = asyncHandler( async (req, res) => {
    const allImages = await images.find(req.photo)
    res.status(200).json(allImages)
})
// const singlePhoto = asyncHandler( async (req, res) => {
//     const single = await images.findById(req.body)
//     res.status(200).json(allImages)
// })
const imageUpload = asyncHandler( async (req, res) => {
// const path = req.file.path
    const result = await cloudinary.uploader.upload(req.file.path)
    
    let payload = {
        photo: result.secure_url,
        cloudinary_id: result.public_id,
        desc: req.body.desc
    }   
    const photo = await images.create(payload)
    res.status(200).json(payload)

})

const removePhoto = asyncHandler( async (req, res) =>{
    const payload = req.params.id

    const removeImage = await images.findById(payload)
    await cloudinary.uploader.destroy(removeImage.cloudinary_id)
    await images.remove()

    res.status(500).json(removeImage)
})

module.exports = {
    getPhotos,
    imageUpload,
    removePhoto
}